<script>
	import Skills from '../components/Skills.svelte';

	import About from '../components/About.svelte';
	import Nav from '../components/Nav.svelte';
	import Projects from '../components/Projects.svelte';
	import Interest from '../components/Interest.svelte';
</script>

<Nav />
<div class="container-fluid">
	<About />
	<hr class="m-0" />
	<Skills />
	<hr class="m-0" />
	<Projects />
	<hr class="m-0" />
	<Interest />
</div>

<style>
	.container-fluid {
		padding-left: 17rem;
		box-sizing: border-box;
	}

	@media (max-width: 992px) {
		.container-fluid {
			padding-left: 0;
		}
	}
</style>
