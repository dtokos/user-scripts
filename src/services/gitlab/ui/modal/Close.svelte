<script lang="ts">
    import { Dialog } from 'bits-ui';
    import type { Snippet } from 'svelte';

    type Props = {
        children?: Snippet,
    };

    let { children }: Props = $props();
</script>

<Dialog.Close class="btn btn-default btn-md gl-button">
    <span class="gl-button-text">
        {#if children}
            {@render children()}
        {:else}
            Close
        {/if}
    </span>
</Dialog.Close>
