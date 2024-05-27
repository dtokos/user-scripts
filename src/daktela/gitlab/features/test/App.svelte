<script lang="ts">
    import Dropdown from '@gitlab/ui/dropdown';
    import Modal from '@gitlab/ui/modal';
    import DaktelaIcon from '@gitlab/ui/DaktelaIcon.svelte';
    import Icon from '@gitlab/ui/Icon.svelte';
    import type { ProjectRef, SHA } from '@gitlab/types.ts';

    type Props = {
        projectRef?: ProjectRef
        sha?: SHA,
    };

    const { projectRef, sha }: Props = $props();

    let generateTicketModalOpen: boolean = $state(false);

    function openGenerateTicketCommentModal() {
        generateTicketModalOpen = true;
    }
</script>

<Dropdown.Root>
    <Dropdown.Trigger>
        <DaktelaIcon class="gl-icon s16" style="scale: 1.5" />
    </Dropdown.Trigger>

    <Dropdown.Content>
        {#if projectRef && sha}
            <Dropdown.Item onclick={openGenerateTicketCommentModal}>
                <Icon name="comment-lines" class="gl-mr-2" />
                Generate ticket comment
            </Dropdown.Item>
        {/if}
    </Dropdown.Content>
</Dropdown.Root>

{#if projectRef && sha}
    <Modal.Root bind:open={generateTicketModalOpen}>
        <Modal.Portal>
            <Modal.Overlay />

            <Modal.Content>
                <Modal.Header>
                    <Modal.Title>Generate ticket comment</Modal.Title>
                    <Modal.CloseIcon />
                </Modal.Header>
            </Modal.Content>
        </Modal.Portal>
    </Modal.Root>
{/if}
