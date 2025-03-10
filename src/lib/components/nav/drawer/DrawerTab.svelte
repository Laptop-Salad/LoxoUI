<script>
	export let href = '';
	export let icon = '';
	export let active = false;

	let hovering = false;
	let classes = '';

	if (active) {
		classes += ' font-bold';
	}

	function closeDrawer() {
		hovering = true;
	}
</script>

<div>
	<a
		href="{href}"
		class="{classes} w-16"
		on:mouseover={() => hovering = true}
		on:mouseout={() => hovering = false}
		on:focus={() => hovering = true}
		on:blur={() => hovering = false}
		on:click={() => closeDrawer()}
	>
		<div class="flex items-center space-x-4 p-2 hover:bg-gray-400/25 focus:bg-gray-400/25 rounded-lg">
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