<script lang="ts">
    import Modal from '@gitlab/ui/modal';
    import type { ProjectRef, SHA } from '@gitlab/types.ts';

    type Props = {
        projectRef: ProjectRef
        sha: SHA,
        isOpen: boolean,
    };

    let { projectRef, sha, isOpen = $bindable(false) }: Props = $props();

    $effect(() => {
        if (isOpen) {
            console.log('modal was opened');
        }
    });

    const onOpen = (open: boolean) => {
        console.log('on open change', open);
    }
</script>

<Modal.Root bind:open={isOpen} onOpenChange={onOpen}>
    <Modal.Portal>
        <Modal.Overlay />

        <Modal.Content>
            <Modal.Header>
                <Modal.Title>Generate ticket comment</Modal.Title>
                <Modal.CloseIcon />
            </Modal.Header>
            <Modal.Body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum reiciendis sit voluptas! Consequuntur debitis dolore dolorem dolores esse eveniet facilis fugit, illum laboriosam nihil nisi numquam, odit, quis similique voluptatibus!
            </Modal.Body>
            <Modal.Footer>
                footer
            </Modal.Footer>
        </Modal.Content>
    </Modal.Portal>
</Modal.Root>