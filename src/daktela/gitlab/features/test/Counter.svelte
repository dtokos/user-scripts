<script lang="ts">
    type Props = {
        counter: {
            count: number,
            increment: () => void,
        },
    };

    const { counter }: Props = $props();
</script>

<button onclick={counter.increment}>{counter.count}</button>
