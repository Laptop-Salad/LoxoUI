<script>
	// sm, base, lg, xl
	export let size = "base";
	export let colour = "base";
	export let inverse = false;

	let classes = "";

	let sizeClasses = "p-3 text-base";

	switch (size) {
		case "sm":
			sizeClasses = "p-2 text-sm";
			break;
		case "lg":
			sizeClasses = "p-4 text-lg";
			break;
		case "xl":
			sizeClasses = "p-5 text-xl";
			break;
	}

	if (inverse) {
		colour += ` inverse hover:${colour}`;
	} else {
		colour += ` hover:inverse`;
	}

	classes += ` ${sizeClasses}`;
</script>

<button
	on:click
	on:mouseover
	on:mouseenter
	on:mouseleave
	{...$$props}
	class="{classes} {colour} inline-flex rounded-lg cursor-pointer"
>
	<slot></slot>
</button>
