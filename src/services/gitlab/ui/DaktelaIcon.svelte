<script lang="ts">
    type Props = {
        class?: string,
        style?: string,
    };

    const { class: className = '', style }: Props = $props();
</script>

<img src="/uploads/-/system/project/avatar/10/256x256.png" alt="Daktela logo" class={className} {style} />
