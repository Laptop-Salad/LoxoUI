<script>
	import ClassBuilder from "$lib/helpers/ClassBuilder.js";

	export let colour = "base";
	export let size = "base";
	export let inverse = false;
	export let bordered = false;

	let builder = ClassBuilder
			.new()
			.setBgColour(colour)
			.setTextColour(colour)
			.setInverse(inverse)
			.setSize(size);

	if (bordered) {
		builder.setBorderColour(colour);
	}

	let classes = builder
			.getClasses();
</script>

<div {...$$props} class="{classes} inline-flex rounded-lg px-4 py-2">
	<slot></slot>
</div>