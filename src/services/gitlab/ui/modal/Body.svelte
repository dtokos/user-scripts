<script lang="ts">
    import type { Snippet } from 'svelte';

    type Props = {
        children: Snippet,
    };

    const { children }: Props = $props();
</script>

<div class="modal-body">
    {@render children()}
</div>
