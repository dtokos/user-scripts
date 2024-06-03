<script lang="ts" context="module">
    const map = {
        'chevron-down': 'chevron-down',
        'comment-lines': 'comment-lines',
        'close': 'close',
        'copy-to-clipboard': 'copy-to-clipboard',
    } as const;

    export type Name = keyof typeof map;
</script>

<script lang="ts">
    type Size = 16 | 24;

    type Props = {
        name: Name,
        class?: string,
        size?: Size
    };

    const { name, class: className = '', size = 16 }: Props = $props();
</script>

<svg role="img" class="gl-icon s{size} {className}">
    <use href="/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg#{map[name]}"></use>
</svg>
