<script>
	import { page } from '$app/stores'

	const websiteName = 'Sveltekit Minimalist Template'
	export let title = ''

	if (title) {
		title = title.toString().trim() + ' | ' + websiteName
	} else {
		title = websiteName
	}

	export let description = 'A Sveltekit template for creating websites.'

	export let type = 'website'
	export let url = `https://skepticalgoose.com${$page.url.pathname}`

	export let image = undefined
	export let imageAlt = undefined
	export let imageWidth = 1200
	export let imageHeight = 630
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- OpenGraph -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:site_name" content={websiteName} />
	<meta property="og:determiner" content="" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />
	<meta property="og:image:alt" content={imageAlt} />
	<meta property="og:image:width" content={imageWidth} />
	<meta property="og:image:height" content={imageHeight} />

	<!-- Twitter / 𝕏 -->
	<meta property="twitter:card" content="summary" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:site" content={websiteName} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />
	<meta property="twitter:image:alt" content={imageAlt} />
	<meta property="twitter:image:width" content={imageWidth} />
	<meta property="twitter:image:height" content={imageHeight} />

	<!-- Pinterest -->
	<meta property="pin:media" content={image} />
	<meta property="pin:url" content={url} />
	<meta property="pin:description" content={description} />
</svelte:head>
