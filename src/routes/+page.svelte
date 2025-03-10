<script>
    import {
        Bottom,
        BottomTab,
        Card,
        Drawer,
        DrawerTab,
        Heading,
        Input,
        Pill,
        Separator
    }
    from "$lib";

    import DrawerGroup from "$lib/components/nav/drawer/DrawerGroup.svelte";
    import InputGroup from "$lib/components/form/InputGroup.svelte";
    import Select from "$lib/components/form/select/Select.svelte";
    import SelectOption from "$lib/components/form/select/SelectOption.svelte";
    import Checkbox from "$lib/components/form/checkbox/Checkbox.svelte";
    import CheckboxGroup from "$lib/components/form/checkbox/CheckboxGroup.svelte";

    let name = $state('');
    let favouriteColour = $state('');
    let likesSvelte = $state(false);
    let favouriteFruits = $state([]);
</script>

<div class="p-5">
    <Drawer show={false}>
        <DrawerTab>Installation</DrawerTab>
        <Separator />

        <DrawerGroup heading="Components">
            <DrawerTab>Button</DrawerTab>
            <DrawerTab>Drawer</DrawerTab>
            <DrawerTab>Bottom Nav</DrawerTab>
        </DrawerGroup>
    </Drawer>

    <Heading>Feed</Heading>

    <div class="space-y-6">
        <Card>
            <Pill colour="sky" size="sm">Sky</Pill>
        </Card>

        <InputGroup
            label="Name"
            description="Name of person viewing this page."
        >
            <Input bind:value={name} />
        </InputGroup>

        <InputGroup
            label="Colour"
            description="Your favourite colour."
        >
            <Select bind:value={favouriteColour}>
                <SelectOption value="">I dont have one</SelectOption>
                <SelectOption value="Sky">Sky</SelectOption>
                <SelectOption value="Green">Green</SelectOption>
            </Select>
        </InputGroup>

        <div>
            <Checkbox bind:checked={likesSvelte} label="Likes Svelte" />
        </div>

        <CheckboxGroup
            label="Favourite Fruits"
            description="Fruits that you like most."
        >
            <Checkbox label="Likes Svelte" />
        </CheckboxGroup>
    </div>

    <Bottom>
        <BottomTab icon="fa-newspaper" active={true}>Feed</BottomTab>
        <BottomTab icon="fa-house">Home</BottomTab>
        <BottomTab icon="fa-bell">Notifications</BottomTab>
    </Bottom>
</div>