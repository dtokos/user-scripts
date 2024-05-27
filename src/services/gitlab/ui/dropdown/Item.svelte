<script lang="ts">
    import { DropdownMenu } from 'bits-ui';
    import type { Snippet } from 'svelte';
    import type { MouseEventHandler } from 'svelte/elements';

    type Props = {
        children: Snippet,
        onclick: MouseEventHandler<HTMLDivElement>
    };

    const { children, onclick }: Props = $props();
</script>

<DropdownMenu.Item class="gl-new-dropdown-item" {onclick}>
    <div class="gl-new-dropdown-item-content">
        <span class="gl-new-dropdown-item-text-wrapper">
            {@render children()}
        </span>
    </div>
</DropdownMenu.Item>
