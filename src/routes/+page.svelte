<script lang="ts">
    import {
        Drawer,
        DrawerTab,
        DrawerGroup,
        Separator,
        Heading,
        Select,
        SelectOption,
        Checkbox,
        CheckboxGroup,
        Card,
        Pill,
        Input,
        InputGroup,
        Bottom,
        BottomTab,
        Button, Container,
    } from "$lib";

    let name = $state('');
    let favouriteColour = $state('');
    let likesSvelte = $state(false);
    let favouriteFruits: string[] = $state([]);
</script>

<Container>
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
            <Checkbox
                    label="Oranges"
                    bind:group={favouriteFruits}
                    value="oranges"
                    name="favouriteFruits"
            />

            <Checkbox
                    label="Watermelons"
                    bind:group={favouriteFruits}
                    value="watermelons"
                    name="favouriteFruits"
            />

            <Checkbox
                    label="Grapes"
                    bind:group={favouriteFruits}
                    value="grapes"
                    name="favouriteFruits"
            />
        </CheckboxGroup>

        <Button colour="emerald" on:click={() => console.log(favouriteFruits)}>Get Favourite Fruits</Button>
    </div>
</Container>

<Bottom>
    <BottomTab icon="fa-newspaper" active={true}>Feed</BottomTab>
    <BottomTab icon="fa-house">Home</BottomTab>
    <BottomTab icon="fa-bell">Notifications</BottomTab>
</Bottom>
