<script>
    import ClassBuilder from "$lib/helpers/ClassBuilder.js";

    export let colour = 'base';
    export let classProp = '';

    let classes = ClassBuilder
        .new()
        .setTextColour(colour)
        .setClassProp(classProp)
        .getClasses();
</script>

<div class="font-semibold my-4 {classes}">
    <slot></slot>
</div>