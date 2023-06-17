<script>
	export let title = 'Minimalist Sveltekit Template'
	export let description =
		'A minimalist template for starting Sveltekit projects.'
	export let keywords = 'Sveltekit, Svelte, minimalist, template'
	export let author = 'Paul Williams'
</script>

<!-- 
	Metadata that is the same for all pages goes in src/app.html.
	Metadata that changes based on the page goes in here or added via custom
	<svelte:head> tags.
	
	Meta.svelte must be imported for each page or placed in +layout.svelte.
	Meta.svelte will add to <head>, not override stuff already there so
	be careful of how you set things up.
-->

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta name="author" content={author} />
</svelte:head>
