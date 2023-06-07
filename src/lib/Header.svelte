<script>
	const navLinks = [
		{
			href: '/',
			text: 'Home',
		},
		{
			href: '/copyright',
			text: 'Copyright',
		},
		{
			href: '/error',
			text: 'Error',
		},
	]
</script>

<header id="header" class="header">
	<nav class="nav">
		{#each navLinks as { href, text }}
			<a class="link" {href} sveltekit:noscroll sveltekit:prefetch>
				{text}
			</a>
		{/each}
	</nav>
</header>

<style>
	.header {
		width: 100%;
		padding-top: 1rem;
	}

	.nav {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		gap: 0.6rem;

		padding: 1rem 0;
	}

	@media only screen and (min-width: 500px) {
		.nav {
			flex-direction: row;
			gap: 1rem;
		}
	}
</style>
