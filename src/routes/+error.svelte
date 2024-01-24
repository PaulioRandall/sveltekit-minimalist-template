<script>
	import { page } from '$app/stores'

	import PageMetadata from '$lib/PageMetadata.svelte'
</script>

<PageMetadata title="Error: {$page.status}" />

<main>
	<h1>{$page.status}</h1>
	<p class="center">
		{$page.error.message}
	</p>
</main>

<style>
	.center {
		text-align: center;
	}
</style>
