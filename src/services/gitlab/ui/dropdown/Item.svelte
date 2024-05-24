<script lang="ts">
    import {DropdownMenu} from 'bits-ui';
    import type { Snippet } from 'svelte';

    type Props = {
        children: Snippet,
    };

    const { children }: Props = $props();
</script>

<DropdownMenu.Item class="gl-new-dropdown-item">
    <div class="gl-new-dropdown-item-content">
        <span class="gl-new-dropdown-item-text-wrapper">
            {@render children()}
        </span>
    </div>
</DropdownMenu.Item>
