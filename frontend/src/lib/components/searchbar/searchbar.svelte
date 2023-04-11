<script lang="ts">
	export let searchQuery: string;
	export let title: string;
</script>

<form on:submit={(e) => e.preventDefault()} class="container p-10">
	<h2 class="text-2xl font-semibold py-2 px-2 text-primary">{title}</h2>
	<slot name="search-options" />
	<div class="mb-4 flex items-center input input-bordered w-full max-w-x  rounded-lg shadow">
		<div class="pl-2">
			<svg class="fill-current  w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path
					class="heroicon-ui"
					d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
				/>
			</svg>
		</div>
		<input
			data-testid="search-input"
			id="search"
			class="w-full focus:outline-none py-2 px-2"
			type="text"
			tabindex="0"
			bind:value={searchQuery}
			placeholder={title}
			autocomplete="off"
		/>
	</div>
	<slot name="search-results" />
</form>
