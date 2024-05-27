<script lang="ts">
    import type { Snippet } from 'svelte';

    type Props = {
        children: Snippet
    };

    const { children }: Props = $props();
</script>

<footer class="modal-footer">
    {@render children()}
</footer>
