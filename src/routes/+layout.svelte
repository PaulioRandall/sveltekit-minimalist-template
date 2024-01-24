<script>
	import Header from './Header.svelte'
	import '../app.css'
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
