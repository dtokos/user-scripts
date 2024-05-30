<script lang="ts">
    import Dropdown from '@gitlab/ui/dropdown';
    import DaktelaIcon from '@gitlab/ui/DaktelaIcon.svelte';
    import Icon from '@gitlab/ui/Icon.svelte';
    import type { ProjectRef, SHA } from '@gitlab/types.ts';
    import GenerateTicketCommentModal from '../generate-ticket-comment/GenerateTicketCommentModal.svelte';
    import type { Args } from '../generate-ticket-comment/GenerateTicketCommentModal.svelte';

    type Props = {
        class?: string,
        projectRef?: ProjectRef
        sha?: SHA,
    };

    const { projectRef, sha, class: className = '' }: Props = $props();

    let generateTicketCommentModalArgs: Args | undefined = $state(undefined);

    function openGenerateTicketCommentModal(p: ProjectRef, s: SHA): void {
        generateTicketCommentModalArgs = { projectRef: p, sha: s };
    }
</script>

<Dropdown.Root>
    <Dropdown.Trigger class={className}>
        <DaktelaIcon class="gl-icon s14" style="scale: 1.5" />
    </Dropdown.Trigger>

    <Dropdown.Content>
        {#if projectRef && sha}
            <Dropdown.Item onclick={() => openGenerateTicketCommentModal(projectRef, sha)}>
                <Icon name="comment-lines" class="gl-mr-2" />
                Generate ticket comment
            </Dropdown.Item>
        {/if}
    </Dropdown.Content>
</Dropdown.Root>

{#if projectRef && sha}
    <GenerateTicketCommentModal bind:args={generateTicketCommentModalArgs} />
{/if}