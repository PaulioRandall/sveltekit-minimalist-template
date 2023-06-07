<script>
	import '$routes/styles.css'
	import Header from '$lib/Header.svelte'
</script>

<div class="page">
	<Header />

	<slot />
</div>

<style>
	.page {
		width: 100vw;
		min-height: 100vh;
	}
</style>
