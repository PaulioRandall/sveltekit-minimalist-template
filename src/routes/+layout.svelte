<script>
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

	:global(:root) {
		/* https://utopia.fyi/ */
		--font-size-md: clamp(1.06rem, calc(0.98rem + 0.39vw), 1.38rem);
		--font-size-xl: clamp(2.59rem, calc(2.32rem + 1.34vw), 3.66rem);
	}

	@media (prefers-color-scheme: light) {
		:global(:root) {
			--background-color: rgb(255, 255, 255);
			--text-color: rgb(11, 19, 43);
			--link-color: rgb(20, 20, 255);
		}
	}

	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--background-color: rgb(5, 10, 35);
			--text-color: rgb(231, 245, 255);
			--link-color: rgb(255, 145, 145);
		}
	}

	:global(*),
	:global(::before),
	:global(::after) {
		box-sizing: border-box;
		border: 0 solid transparent;
	}

	:global(body) {
		background-color: var(--background-color);

		padding: 0;
		margin: 0;

		color: var(--text-color);
		font-size: var(--font-size-md);
		text-size-adjust: 100%;
		tab-size: 2;
	}

	:global(main) {
		padding: 0 1rem;
	}

	:global(a:link),
	:global(a:hover),
	:global(a:active),
	:global(a:visited) {
		color: var(--link-color);
		text-decoration: none;
	}

	:global(a:hover) {
		cursor: pointer;
		text-decoration: underline;
	}
</style>
