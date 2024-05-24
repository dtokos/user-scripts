<script lang="ts">
    import { DropdownMenu } from 'bits-ui';
    import { Snippet } from 'svelte';

    type Props = {
        children: Snippet
    };

    const { children }: Props = $props();
</script>

<DropdownMenu.Content class="gl-new-dropdown" align="start" sideOffset={4}>
    <div class="gl-new-dropdown-panel gl-display-block!">
        <div class="gl-new-dropdown-inner">
            <div class="gl-new-dropdown-contents">
                {@render children()}
            </div>
        </div>
    </div>
</DropdownMenu.Content>
