<script lang="ts">
    import { Dialog } from 'bits-ui';
    import type { Snippet } from 'svelte';

    const sizeMap = {
        'sm': 'sm',
        'md': 'md',
    } as const;

    type Size = keyof typeof sizeMap;

    type Props = {
        size?: Size,
        children: Snippet,
    };

    const { size = 'md', children }: Props = $props();
</script>

<Dialog.Content>
    <div class="modal fade show gl-modal" style="display: block;">
        <div class="modal-dialog modal-{size}">
            <div class="modal-content">
                {@render children()}
            </div>
        </div>
    </div>
</Dialog.Content>
