<script>
	// sm, base, lg, xl
	export let size = 'base';
	export let colour = 'base';
	export let inverse = false;

	let classes = "";

	classes += colour + '-text-inverse ' + colour + '-bg';

	switch (size) {
		case "sm":
			classes += " p-2 text-sm";
			break;
		case "lg":
			classes += "p-4 text-lg";
			break;
		case "xl":
			classes += "p-5 text-xl";
			break;
	}

	if (inverse) {
		classes += ` inverse`;
	}

	classes += ` ${colour}`;
</script>

<button
	on:click
	on:mouseover
	on:mouseenter
	on:mouseleave
	{...$$props}
	class="{classes} inline-flex rounded-lg cursor-pointer p-2"
>
	<slot></slot>
</button>
