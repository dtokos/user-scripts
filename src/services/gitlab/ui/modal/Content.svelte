<script lang="ts">
    import { Dialog } from 'bits-ui';
    import type { Snippet } from 'svelte';

    type Props = {
        children: Snippet,
    };

    const { children }: Props = $props();
</script>

<Dialog.Content>
    <div class="modal fade show gl-modal" style="display: block;">
        <div class="modal-dialog modal-md">
            <div class="modal-content">
                {@render children()}
            </div>
        </div>
    </div>
</Dialog.Content>
