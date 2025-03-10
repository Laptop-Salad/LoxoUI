<script>
    export let colour = 'base';

    let classes = '';
    classes += colour + '-text';
</script>

<div class="font-semibold my-4 {colour} {classes}">
    <slot></slot>
</div>