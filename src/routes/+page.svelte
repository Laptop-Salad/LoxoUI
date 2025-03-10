<script>
    import {Drawer, DrawerTab, Heading, Pill, Separator} from "$lib";
    import DrawerGroup from "$lib/nav/drawer/DrawerGroup.svelte";
</script>

<Drawer show="{true}">
    <DrawerTab>Installation</DrawerTab>
    <Separator></Separator>

    <DrawerGroup heading="Components">
        <DrawerTab>Button</DrawerTab>
        <DrawerTab>Drawer</DrawerTab>
        <DrawerTab>Bottom Nav</DrawerTab>
    </DrawerGroup>
</Drawer>