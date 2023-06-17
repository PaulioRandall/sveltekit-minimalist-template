<script>
	import { page } from '$app/stores'

	import Title from '$lib/Title.svelte'
	import Paragraph from '$lib/Paragraph.svelte'
	import Meta from '$lib/Meta.svelte'
</script>

<Meta title="Error: {$page.status}" />

<main>
	<Title>{$page.status}</Title>
	<Paragraph>
		{$page.error.message}
	</Paragraph>
</main>
