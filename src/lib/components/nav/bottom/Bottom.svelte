<script>
	import ClassBuilder from "$lib/helpers/ClassBuilder.js";

	export let colour = "base";
	export let inverse = false;

	let classes = ClassBuilder
			.new()
			.setTextColour(colour)
			.setBgColour(colour)
			.setInverse(inverse)
			.getClasses();
</script>

<nav class="{classes} sticky bottom-0 muted-border border-t left-0 w-full py-1 px-2">
	<div class="flex justify-between">
		<slot></slot>
	</div>
</nav>
