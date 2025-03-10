<script>
    let colours = [
        'red',
        'orange',
        'amber',
        'yellow',
        'lime',
        'green',
        'emerald',
        'teal',
        'cyan',
        'sky',
        'blue',
        'indigo',
        'violet',
        'purple',
        'fuchsia',
        'pink',
        'rose',
        'slate',
        'gray',
        'zinc',
        'neutral',
        'stone',
    ];

    let openingCurly = "{";
    let closingCurly = "}";
</script>

<div class="space-y-4">
    <div>
        <p>@layer loxoui {openingCurly}</p>
        <div class="ms-4">
            {#each colours as colour}
                <div class="mt-4">
                    <p>/** {colour[0].toUpperCase() + colour.slice(1)} **/</p>
                    <p> .{colour}-text {openingCurly} @apply text-{colour}-600; {closingCurly}</p>
                    <p> .{colour}-text.inverse  {openingCurly} @apply text-{colour}-200; {closingCurly}</p>
                    <p> .{colour}-text-inverse  {openingCurly} @apply text-{colour}-200; {closingCurly}</p>
                    <br>
                    <p> .{colour}-bg {openingCurly} @apply bg-{colour}-600; {closingCurly}</p>
                    <p> .{colour}-bg.inverse {openingCurly} @apply bg-{colour}-200; {closingCurly}</p>
                    <p> .{colour}-bg-inverse {openingCurly} @apply bg-{colour}-200; {closingCurly}</p>
                    <br>
                    <p> .{colour}-border {openingCurly} @apply border-{colour}-600; {closingCurly}</p>
                    <p> .{colour}-border.inverse {openingCurly} @apply border-{colour}-200; {closingCurly}</p>
                    <p> .{colour}-border-inverse {openingCurly} @apply border-{colour}-200; {closingCurly}</p>
                </div>
            {/each}

            <p>/** Base **/</p>
            <p> .base-text {openingCurly} @apply text-black; {closingCurly}</p>
            <p> .base-text.inverse  {openingCurly} @apply text-white; {closingCurly}</p>
            <p> .base-text-inverse  {openingCurly} @apply text-white; {closingCurly}</p>
            <br>
            <p> .base-bg {openingCurly} @apply bg-black; {closingCurly}</p>
            <p> .base-bg.inverse {openingCurly} @apply bg-white; {closingCurly}</p>
            <p> .base-bg-inverse {openingCurly} @apply bg-white; {closingCurly}</p>
            <br>
            <p> .base-border {openingCurly} @apply border-black; {closingCurly}</p>
            <p> .base-border.inverse {openingCurly} @apply border-white; {closingCurly}</p>
            <p> .base-border-inverse {openingCurly} @apply border-white; {closingCurly}</p>
        </div>
        <p>{closingCurly}</p>
    </div>
</div>