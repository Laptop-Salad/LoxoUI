<script>
    export let value;
</script>

<select
    class="border muted-border rounded-lg w-full"
    bind:value
    {...$$restProps}
>
    <slot></slot>
</select>
