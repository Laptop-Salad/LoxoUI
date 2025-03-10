<script>
    export let type = 'text';
    export let value;
</script>

<input
    class="border muted-border rounded-lg w-full"
    {type}
    bind:value
    {...$$restProps}
/>