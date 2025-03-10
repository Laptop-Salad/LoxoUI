<script>
    import {Input, InputDescription, InputLabel} from "$lib";

    export let label = '';
    export let description = '';
</script>

<div>
    {#if label !== undefined}
        <InputLabel {label}>
            <InputDescription {description} />

            <slot></slot>
        </InputLabel>
    {/if}
</div>