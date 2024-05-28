<script lang="ts">
    import Dropdown from '@gitlab/ui/dropdown';
    import DaktelaIcon from '@gitlab/ui/DaktelaIcon.svelte';
    import Icon from '@gitlab/ui/Icon.svelte';
    import type { ProjectRef, SHA } from '@gitlab/types.ts';
    import GenerateTicketCommentModal from '../generate-ticket-comment/GenerateTicketCommentModal.svelte';

    type Props = {
        projectRef?: ProjectRef
        sha?: SHA,
    };

    const { projectRef, sha }: Props = $props();

    let isGenerateTicketCommentModalOpen = $state(false);

    function openGenerateTicketCommentModal(): void {
        isGenerateTicketCommentModalOpen = true;
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
    <GenerateTicketCommentModal bind:isOpen={isGenerateTicketCommentModalOpen} {projectRef} {sha} />
{/if}