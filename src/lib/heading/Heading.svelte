<script>
    export let colour = 'base';
    export let classes = '';

    colour += '-text-inverse';
</script>

<div class="font-semibold {colour} {classes}">
    <slot></slot>
</div>