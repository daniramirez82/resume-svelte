<script>
	// import bootstrap from 'bootstrap';
	import { onMount } from 'svelte';

	let sideNav;
    

	onMount( () => {    
		// Activate Bootstrap scrollspy on the main nav element
		if (sideNav) {
			console.log(sideNav);
			new bootstrap.ScrollSpy(document.body, {
				target: '#sideNav',
				offset: 74
			});
		}

		// Collapse responsive navbar when toggler is visible
		const navbarToggler = document.body.querySelector('.navbar-toggler');
		const responsiveNavItems = [].slice.call(
			document.querySelectorAll('#navbarResponsive .nav-link')
		);
		responsiveNavItems.map(function (responsiveNavItem) {
			responsiveNavItem.addEventListener('click', () => {
				if (window.getComputedStyle(navbarToggler).display !== 'none') {
					navbarToggler.click();
				}
			});
		});
	});
</script>

<nav bind:this={sideNav} class="navbar navbar-expand-lg navbar-dark gray fixed-top" id="sideNav">
	<a class="navbar-brand js-scroll-trigger" href="#page-top">
		<span class="d-block d-lg-none">Daniel Ramírez</span>
		<span class="d-none d-lg-block"
			><img
				class="img-fluid img-profile rounded-circle mx-auto mb-2"
				src="../../img/profile.jpg"
				alt="profile"
			/></span
		>
	</a>
	<button
		class="navbar-toggler"
		type="button"
		data-bs-toggle="collapse"
		data-bs-target="#navbarResponsive"
		aria-controls="navbarResponsive"
		aria-expanded="false"
		aria-label="Toggle navigation"
	>
		<span class="navbar-toggler-icon" />
	</button>
	<div class="collapse navbar-collapse" id="navbarResponsive">
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link js-scroll-trigger" href="#about">About</a>
			</li>
			<li class="nav-item">
				<a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
			</li>
			<li class="nav-item">
				<a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
			</li>
			<li class="nav-item">
				<a class="nav-link js-scroll-trigger" href="#education">Education</a>
			</li>
			<li class="nav-item">
				<a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
			</li>
			<li class="nav-item">
				<a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
			</li>
		</ul>
	</div>
</nav>

<style>
	.gray {
		background-color: gray;
	}
	.nav-link {
		font-family: Muli, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial,
			sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
	}
</style>
