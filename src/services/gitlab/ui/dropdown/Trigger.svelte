<script lang="ts">
    import { DropdownMenu } from "bits-ui";
    import type { Snippet } from 'svelte';
    import Icon from '../Icon.svelte';

    type Props = {
        children: Snippet,
    };

    const { children }: Props = $props();
</script>

<div class="gl-disclosure-dropdown gl-new-dropdown">
    <DropdownMenu.Trigger class="btn btn-default btn-md gl-button gl-new-dropdown-toggle">
        <span class="gl-button-text gl-w-full">
            <span class="gl-new-dropdown-button-text">
                {@render children()}
            </span>
            <Icon name="chevron-down" class="gl-button-icon gl-new-dropdown-chevron" />
        </span>
    </DropdownMenu.Trigger>
</div>
