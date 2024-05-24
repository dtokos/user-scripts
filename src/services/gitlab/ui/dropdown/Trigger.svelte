<script lang="ts">
    import { DropdownMenu } from "bits-ui";
    import type { Snippet } from 'svelte';

    type Props = {
        children: Snippet,
    };

    const { children }: Props = $props();
</script>

<DropdownMenu.Trigger class="btn btn-default btn-md gl-button gl-new-dropdown-toggle">
    <span class="gl-button-text gl-w-full">
        <span class="gl-new-dropdown-button-text">
            {@render children()}
        </span>
        <svg role="img" aria-hidden="true" class="gl-button-icon gl-new-dropdown-chevron gl-icon s16">
            <use href="/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg#chevron-down"></use>
        </svg>
    </span>
</DropdownMenu.Trigger>
