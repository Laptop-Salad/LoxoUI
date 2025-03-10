<script>
	export let colour = "base";
	export let inverse = false;
	export let classProp = "";

	let classes = `${classProp}`;

	classes += colour + '-text-inverse ' + colour + '-bg';

	if (inverse) {
		classes += " inverse";
	}
</script>

<div {...$$props} class="{classes} inline-flex rounded-lg px-4 py-2">
	<slot></slot>
</div>