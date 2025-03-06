<script>
	import Button from '../../Button.svelte';

	export let colour = "base";
	export let inverse = false;

	let show = false;

	let classes = ` ${colour}`;

	if (inverse) { classes += " inverse"; }

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
		class="top-0 left-0 w-full h-full bg-black/25"
	>
		<nav
			class="{classes} top-0 left-0 h-screen w-[80vw] p-2"
		>
			<Button on:click="{toggleShow}">
				<i class="fa-solid fa-xmark"></i>
			</Button>

			<div class="space-y-4 p-3">
				<slot></slot>
			</div>
		</nav>
	</div>
</div>