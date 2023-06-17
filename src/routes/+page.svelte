<script>
	import Title from '$lib/Title.svelte'
	import Meta from '$lib/Meta.svelte'
	import Paragraph from '$lib/Paragraph.svelte'

	const title = 'Minimalist Sveltekit Template'
</script>

<Meta {title} />

<main>
	<Title>{title}</Title>
	<Paragraph>A paragraph...</Paragraph>
</main>
