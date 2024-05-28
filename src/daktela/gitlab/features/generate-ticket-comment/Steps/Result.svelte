<script lang="ts">
    import type { Comment } from '../../../types.ts';
    import renderComment from '../../../render.ts';

    type Props = {
        comment: Comment,
    };

    const { comment }: Props = $props();
    const rendered = $derived.by(() => renderComment(comment));
</script>

<h1>Result</h1>
<textarea>{rendered}</textarea>
