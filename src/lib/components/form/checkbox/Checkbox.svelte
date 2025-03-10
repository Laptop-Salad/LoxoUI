<script>
    export let checked = null;
    export let label = '';
</script>

<label>
    <input
        class="border muted-border rounded p-2"
        type="checkbox"
        bind:checked
        {...$$restProps}
    />

    <span class="ms-2 text-sm">{label}</span>
</label>