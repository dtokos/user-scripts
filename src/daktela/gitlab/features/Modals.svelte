<script lang="ts">
    import GenerateTicketCommentModal from './generate-ticket-comment/GenerateTicketCommentModal.svelte';
    import { Controls } from './types.ts';

    type Props = {
        controls: Controls,
    };

    let { controls }: Props = $props();
</script>

<GenerateTicketCommentModal bind:args={controls.generateTicketCommentModal.args} />
