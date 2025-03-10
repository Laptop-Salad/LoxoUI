<script>
    import {Heading} from "$lib";

    export let heading;
</script>

<div>
    <Heading classes="ms-5">{heading}</Heading>

    <div class="border-s border-gray-400 ms-5 mt-2">
        <slot></slot>
    </div>
</div>