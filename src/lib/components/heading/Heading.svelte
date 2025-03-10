<script>
    import ClassBuilder from "$lib/helpers/ClassBuilder.js";

    export let colour = 'base';

    let classes = ClassBuilder
        .new()
        .setTextColour(colour)
        .getClasses();
</script>

<div class="font-semibold my-4 {classes}">
    <slot></slot>
</div>