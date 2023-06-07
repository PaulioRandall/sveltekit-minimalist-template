<script>
	import PageHeading from '$lib/PageHeading.svelte'
	import Paragraph from '$lib/Paragraph.svelte'

	const title = 'Minimalist Sveltekit Template'
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main>
	<PageHeading>{title}</PageHeading>
	<Paragraph>A paragraph...</Paragraph>
</main>
