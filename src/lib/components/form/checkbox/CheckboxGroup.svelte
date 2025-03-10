<script>
    import {InputDescription, InputLabel} from "$lib";
    export let label = '';
    export let description = '';
</script>

<fieldset>
    <InputLabel {label}>
        <InputDescription {description} />
    </InputLabel>

    <div class="mt-4 ms-1">
        <slot></slot>
    </div>
</fieldset>