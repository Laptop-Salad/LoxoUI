<script>
    import {Input, InputDescription, InputLabel} from "$lib";

    export let label = '';
    export let description = '';
    export let value;
</script>

<div>
    {#if label !== undefined}
        <InputLabel {label}>
            <InputDescription {description} />
            <Input bind:value {...$$restProps} />
        </InputLabel>
    {/if}
</div>