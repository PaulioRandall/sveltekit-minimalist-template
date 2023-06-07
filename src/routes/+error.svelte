<script>
	import { page } from '$app/stores'

	import PageHeading from '$lib/PageHeading.svelte'
	import Paragraph from '$lib/Paragraph.svelte'
</script>

<svelte:head>
	<title>Error: {$page.status}</title>
</svelte:head>

<main>
	<PageHeading>{$page.status}</PageHeading>
	<Paragraph>
		{$page.error.message}
	</Paragraph>
</main>
