<script lang="ts" module>
    export type LoadingIconSize = 'sm' | 'md' | 'lg' | 'xl';
    export type LoadingIconColor = 'light' | 'dark';
    export type LoadingIconVariant = 'spinner' | 'dots';

    export type LoadingIconProps = {
        label?: string,
        size?: LoadingIconSize,
        color?: LoadingIconColor,
        variant?: LoadingIconVariant,
        inline?: boolean,
        class?: string,
    };
</script>

<script lang="ts">
    const {
        label = 'Loading',
        size = 'sm',
        color = 'dark',
        variant = 'spinner',
        inline = false,
        class: className = '',
    }: LoadingIconProps = $props();

    const component = $derived(inline ? 'span' : 'div');
</script>

{#if variant === 'spinner'}
    <svelte:element this={component} aria-label={label} class="gl-spinner-container {className}" role="status">
        <span class="!gl-align-text-bottom gl-spinner gl-spinner-{color} gl-spinner-{size}"></span>
    </svelte:element>
{:else}
    <svelte:element
        this={component}
        role="status"
        aria-label={label}
        class="gl-dots-loader gl-dots-loader-{color} gl-dots-loader-{size} {className}"
    >
        <span></span>
    </svelte:element>
{/if}
