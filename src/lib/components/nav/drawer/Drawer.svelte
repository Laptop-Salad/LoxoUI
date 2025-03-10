<script>
	import Button from '$lib/components/button/Button.svelte';
	import ClassBuilder from "$lib/helpers/ClassBuilder.js";

	export let colour = "base";
	export let inverse = false;
	export let show = false;

	let classes = ClassBuilder
			.new()
			.setTextColour(colour)
			.setBgColour(colour)
			.setInverse(inverse)
			.getClasses();

	function toggleShow() {
		show = !show;
	}
</script>

<div>
	<Button on:click="{toggleShow}">
		<i class="fa-solid fa-bars"></i>
	</Button>

	<div
		class:absolute={show}
		class:hidden={!show}
		class="top-0 left-0 w-full h-full bg-black/25 z-20"
	>
		<nav
			class="{classes} top-0 left-0 h-screen w-[80vw] p-2"
		>
			<Button on:click="{toggleShow}">
				<i class="fa-solid fa-xmark"></i>
			</Button>

			<div class="space-y-2 mt-4">
				<slot></slot>
			</div>
		</nav>
	</div>
</div>