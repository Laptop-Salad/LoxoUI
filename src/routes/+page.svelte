<script>
    import {Bottom, BottomTab, Drawer, DrawerTab, Heading, Pill, Separator} from "$lib";
    import DrawerGroup from "$lib/components/nav/drawer/DrawerGroup.svelte";
</script>

<div class="p-5">
    <Drawer show="{false}">
        <DrawerTab>Installation</DrawerTab>
        <Separator></Separator>

        <DrawerGroup heading="Components">
            <DrawerTab>Button</DrawerTab>
            <DrawerTab>Drawer</DrawerTab>
            <DrawerTab>Bottom Nav</DrawerTab>
        </DrawerGroup>
    </Drawer>

    <Heading>Feed</Heading>

    <Pill colour="sky" size="sm">Sky</Pill>

    <Bottom>
        <BottomTab icon="fa-newspaper">Feed</BottomTab>
        <BottomTab icon="fa-house">Home</BottomTab>
        <BottomTab icon="fa-bell">Notifications</BottomTab>
    </Bottom>
</div>