<script>
	import Button from '../../button/Button.svelte';

	export let colour = "base";
	export let inverse = false;
	export let show = false;

	let classes = '';

	classes += colour + '-text-inverse ' + colour + '-bg';

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

			<div class="space-y-2 mt-4">
				<slot></slot>
			</div>
		</nav>
	</div>
</div>