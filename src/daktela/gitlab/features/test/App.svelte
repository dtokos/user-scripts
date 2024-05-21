<script lang="ts">
    let count = $state(0);

    function increment(): void {
        count += 1;
    }
</script>

<button onclick={increment}>{count}</button>
