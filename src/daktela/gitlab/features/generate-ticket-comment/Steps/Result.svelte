<script lang="ts">
    import type { Comment } from '../../../types.ts';
    import renderComment from '../../../render.ts';
    import Icon from '@gitlab/ui/Icon.svelte';

    type Props = {
        comment: Comment,
    };

    const { comment }: Props = $props();
    const rendered = $derived.by(() => renderComment(comment));

    async function copy(): Promise<void> {
        try {
            await navigator.clipboard.writeText(rendered);
        } catch (error) {
            console.error(error);
        }
    }
</script>

<div class="gl-display-flex gl-justify-content-space-between gl-mb-2">
    <div>
        {#if comment.ticket}
            <span>
                Ticket:
                <a href={comment.ticket} target="_blank" rel="noreferrer noopener">{comment.ticket}</a>
            </span>
        {/if}
    </div>
    <button onclick={copy} title="Copy message" class="btn input-group-text btn-default btn-md gl-button btn-default-secondary btn-icon">
        <Icon name="copy-to-clipboard" class="gl-button-icon" />
    </button>
</div>

<textarea readonly class="gl-form-input gl-form-textarea form-control">{rendered}</textarea>
