<script>
    import {Drawer, DrawerTab, Heading, Pill, Separator} from "$lib";
</script>

<Pill>Hello</Pill>

<Drawer show="{false}">
    <DrawerTab>Installation</DrawerTab>
    <Separator></Separator>
    <Heading classes="ms-5">Components</Heading>
    <DrawerTab>Button</DrawerTab>
    <DrawerTab>Drawer</DrawerTab>
    <DrawerTab>Bottom Nav</DrawerTab>
</Drawer>