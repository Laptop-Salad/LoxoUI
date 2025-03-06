<script>
	export let colour = "base";
	export let inverse = false;
	export let classProp = "";

	let classes = `${colour} ${classProp}`;

	if (inverse) {
		classes += " inverse";
	}
</script>

<div {...$$props} class="{classes} inline-flex rounded-lg px-4 py-2">
	<slot></slot>
</div>