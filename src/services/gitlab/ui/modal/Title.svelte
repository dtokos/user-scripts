<script lang="ts">
    import { Dialog } from 'bits-ui';
    import type { Snippet } from 'svelte';

    type Props = {
        children: Snippet,
    };

    const { children }: Props = $props();
</script>

<Dialog.Title class="modal-title">
    {@render children()}
</Dialog.Title>
