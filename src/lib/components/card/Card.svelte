<script>
    export let classProp = '';
    let classes = '';

    classes += classProp;
</script>

<div class="{classes} p-5 border rounded-lg border-slate-200 shadow-sm">
    <slot></slot>
</div>