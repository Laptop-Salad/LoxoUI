<script>
	export let href = "";
	export let icon = "";
	export let active = false;

	let hovering = false;
	let classes = "";

	if (active) {
		classes += " font-bold";
	}
</script>

<div>
	<a
		href="{href}"
		class="{classes} pt-1.5 w-16 hover:font-bold"
		on:mouseover={() => hovering = true}
		on:mouseout={() => hovering = false}
		on:focus={() => hovering = true}
		on:blur={() => hovering = false}
		on:click={() => hovering = true}
	>
		<div class="flex items-center space-x-4">
			<i
				class:fa-solid={hovering || active}
				class:fa-regular={!hovering && !active}
				class="{icon}"
			></i>
			<p>
				<slot></slot>
			</p>
		</div>
	</a>
</div>