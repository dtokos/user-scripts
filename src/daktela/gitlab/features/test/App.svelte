<script lang="ts">
    import { DropdownMenu } from "bits-ui";
    import Dropdown from '@gitlab/ui/dropdown';

    let count = $state(0);

    function increment(): void {
        count += 1;
    }
</script>

<Dropdown.Root>
    <Dropdown.Trigger />

    <DropdownMenu.Content class="gl-new-dropdown" align="start" sideOffset={4}>
        <div class="gl-new-dropdown-panel gl-display-block!">
            <div class="gl-new-dropdown-inner">
                <div class="gl-new-dropdown-contents">
                    <DropdownMenu.Item class="gl-new-dropdown-item">
                        <div class="gl-new-dropdown-item-content">
                            <span class="gl-new-dropdown-item-text-wrapper">
                                New branch
                            </span>
                        </div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item class="gl-new-dropdown-item">
                        <div class="gl-new-dropdown-item-content">
                            <span class="gl-new-dropdown-item-text-wrapper">
                                New tag
                            </span>
                        </div>
                    </DropdownMenu.Item>
                </div>
            </div>
        </div>
    </DropdownMenu.Content>
</Dropdown.Root>
