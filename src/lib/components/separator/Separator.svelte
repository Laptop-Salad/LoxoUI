<script>
    export let vertical = false;
    export let colour = 'neutral';
    export let inverse = false;
    let classes = 'block ';

    if (inverse) { classes += ' inverse';}

    colour += '-border';

    if (vertical) {
        classes += 'border-s w-0';
    } else {
        classes += 'border-t h-0';
    }
</script>

<div class="{classes} {colour}">&nbsp;</div>