<script>
	import ClassBuilder from "$lib/helpers/ClassBuilder.js";

	export let size = 'base';
	export let colour = 'base';
	export let inverse = false;

	let classes = ClassBuilder
			.new()
			.setSize(size)
			.setBgColour(colour)
			.setTextColour(colour)
			.setInverse(inverse)
			.getClasses();
</script>

<button
	on:click
	on:mouseover
	on:mouseenter
	on:mouseleave
	on:focus
	class="{classes} inline-flex rounded-lg cursor-pointer p-2"
>
	<slot></slot>
</button>
