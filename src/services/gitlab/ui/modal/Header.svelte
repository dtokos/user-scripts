<script lang="ts">
    import type { Snippet } from 'svelte';

    type Props = {
        children: Snippet,
    };

    const { children }: Props = $props();
</script>

<header class="modal-header">
    {@render children()}
</header>
