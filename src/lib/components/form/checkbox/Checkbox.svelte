<script lang="ts">
    export let checked: boolean | null = null;
    export let group: string[] | null = null;
    export let label = '';
</script>

<label>
    <input
        class="border muted-border rounded p-2"
        type="checkbox"
        bind:checked
        bind:group
        {...$$restProps}
    />

    <span class="ms-2 text-sm">{label}</span>
</label>