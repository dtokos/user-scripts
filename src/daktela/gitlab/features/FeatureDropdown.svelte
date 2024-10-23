<script lang="ts">
    import Dropdown from '@gitlab/ui/dropdown';
    import DaktelaIcon from '@gitlab/ui/DaktelaIcon.svelte';
    import Icon from '@gitlab/ui/Icon.svelte';
    import type { Feature } from './types';

    type Props = {
        features: Feature[],
        class?: string,
    };

    const { features, class: className = '' }: Props = $props();
</script>

<Dropdown.Root>
    <Dropdown.Trigger class={className}>
        <DaktelaIcon class="gl-icon s14" style="scale: 1.5" />
    </Dropdown.Trigger>

    <Dropdown.Content>
        {#each features as feature (feature.title)}
            <Dropdown.Item onclick={feature.onClick}>
                <Icon name={feature.icon} class="gl-mr-2" />
                {feature.title}
            </Dropdown.Item>
        {/each}
    </Dropdown.Content>
</Dropdown.Root>
