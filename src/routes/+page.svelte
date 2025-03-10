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
    import InputGroup from "$lib/components/input/InputGroup.svelte";

    let name = $state('');

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
            bind:value={name}
            label="Name"
            description="Name of person viewing this page."
        />
    </div>

    <Bottom>
        <BottomTab icon="fa-newspaper" active={true}>Feed</BottomTab>
        <BottomTab icon="fa-house">Home</BottomTab>
        <BottomTab icon="fa-bell">Notifications</BottomTab>
    </Bottom>
</div>