<script>
	export let href = "";
	export let icon = "";
	export let active = false;

	let hovering = false;
	let classes = "";

	if (active) {
		classes += " font-bold bg-slate-200/50 rounded-lg";
	}
</script>

<a
	href="{href}"
	class="{classes} pt-1.5 w-16 hover:font-bold"
	on:mouseover={() => hovering = true}
	on:mouseout={() => hovering = false}
	on:focus={() => hovering = true}
	on:blur={() => hovering = false}
	on:click={() => hovering = true}
>
	<div class="flex flex-col items-center">
		<i
			class:fa-solid={hovering || active}
			class:fa-regular={!hovering && !active}
			class="{icon}"
		></i>
		<div class="text-[10px] mt-2">
			<slot></slot>
		</div>
	</div>
</a>