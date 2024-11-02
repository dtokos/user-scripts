<script lang="ts" module>
    import type { ProjectRef, SHA } from '@gitlab/types';

    export type Args = {
        projectRef: ProjectRef,
        sha: SHA,
    };
</script>

<script lang="ts">
    import { Modal } from '@gitlab/ui/modal';
    import Loading from './Steps/Loading.svelte';
    import Result from './Steps/Result.svelte';
    import { Comments } from '../../comments';
    import type { Comment } from '../../types';

    type Props = {
        args?: Args,
    };

    type Step = (
        | { type: 'closed' }
        | { type: 'loading', project: ProjectRef, commit: SHA }
        | { type: 'result', comment: Comment }
    );

    let { args = $bindable() }: Props = $props();
    let step: Step = $state({ type: 'closed' });

    async function start(project: ProjectRef, commit: SHA): Promise<void> {
        setLoadingState(project, commit);

        const base = await Comments.assembleBase(project, commit);
        // const autoResolvedBase = Comments.tryAutoResolveBase(base);
        const autoResolvedBase = Comments.resolveBaseUsingFirst(base);

        if (autoResolvedBase !== null) {
            const comment = await Comments.assembleComment(project, autoResolvedBase);
            setResultState(comment);
        } else {
            // TODO: Implement modal
            console.error('Comment could not be auto-resolved');
        }
    }

    function setLoadingState(project: ProjectRef, commit: SHA): void {
        step = { type: 'loading', project, commit };
    }

    function setResultState(comment: Comment): void {
        step = { type: 'result', comment };
    }

    $effect(() => {
        if (args !== undefined) {
            start(args.projectRef, args.sha);
        }
    });

    function onOpenChange(newIsOpen: boolean): void {
        if (!newIsOpen) {
            closeModal();
        }
    }

    function closeModal(): void {
        step = { type: 'closed' };
        args = undefined;
    }
</script>

<Modal.Root open={step.type !== 'closed'} onOpenChange={onOpenChange}>
    <Modal.Portal>
        <Modal.Overlay />

        <Modal.Content size="sm">
            <Modal.Header>
                <Modal.Title>Generate ticket comment</Modal.Title>
                <Modal.CloseIcon />
            </Modal.Header>
            <Modal.Body>
                {#if step.type === 'loading'}
                    <Loading />
                {:else if step.type === 'result'}
                    <Result comment={step.comment} />
                {/if}
            </Modal.Body>
            <Modal.Footer>
                <Modal.Close />
            </Modal.Footer>
        </Modal.Content>
    </Modal.Portal>
</Modal.Root>
