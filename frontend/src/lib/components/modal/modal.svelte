<script lang="ts">
	import { namespacesFile } from '$lib/assets/data';
	import { compactURI } from '$lib/utils';

	const id = crypto.randomUUID();
	export let value: string;
	export let title: string;
</script>

<a
	href={'#' + id}
	class="italic w-[200px] md:w-[260px] 2xl:w-[300px] inline-block align-middle"
	><p class="truncate">{value}</p></a
>
<div class="modal" {id}>
	<div class="modal-box">
		<h3 class="font-semibold text-lg whitespace-pre-wrap">{compactURI(title, namespacesFile)}</h3>
		<p class="py-4 whitespace-pre-wrap">
			{value}
		</p>
		<div class="modal-action">
			<a href={'#ontology-input'} class="btn">OK</a>
		</div>
	</div>
</div>
