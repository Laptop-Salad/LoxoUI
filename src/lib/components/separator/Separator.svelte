<script>
    export let vertical = false;
    let classes = 'block muted-border ';

    if (vertical) {
        classes += 'border-s w-0';
    } else {
        classes += 'border-t h-0';
    }
</script>

<div class="{classes}">&nbsp;</div>