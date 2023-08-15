<script>
	import Header from '$lib/Header.svelte'
	import './styles.css'
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
