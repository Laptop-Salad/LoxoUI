<script>
	export let colour = "base";
	export let inverse = false;

	let classes = ` ${colour}`;

	if (inverse) { classes += " inverse"; }
</script>

<nav class="{classes} fixed bottom-0 left-0 w-full py-1 px-2">
	<div class="flex justify-between">
		<slot></slot>
	</div>
</nav>