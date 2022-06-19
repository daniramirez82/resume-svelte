<script>
	// import bootstrap from 'bootstrap';
	import { onMount } from 'svelte';

	let sideNav;
	let navbarToggler;

	onMount(() => {
		// Activate Bootstrap scrollspy on the main nav element
		if (sideNav) {
			console.log(sideNav);
			new bootstrap.ScrollSpy(document.body, {
				target: '#sideNav',
				offset: 74
			});
		}

		// Collapse responsive navbar when toggler is visible

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
		bind:this={navbarToggler}
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
	<div class="collapse navbar-collapse show" id="navbarResponsive">
		<ul class="navbar-nav">
			<li class="nav-item">
				<a class="nav-link js-scroll-trigger" href="#about">About</a>
			</li>
			<li class="nav-item">
				<a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
			</li>
			<li class="nav-item">
				<a class="nav-link js-scroll-trigger" href="#projects">Projects</a>
			</li>
			<li class="nav-item">
				<a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
			</li>
			<li class="nav-item">
				<a class="nav-link js-scroll-trigger" href="#education">Education</a>
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

	#sideNav {
		padding-left: 1rem;
		padding-right: 1rem;
	}
	#sideNav .navbar-nav .nav-item .nav-link {
		font-weight: 800;
		letter-spacing: 0.05rem;
		text-transform: uppercase;
	}
	#sideNav .navbar-toggler:focus {
		outline-color: #d48a6e;
	}

	@media (min-width: 992px) {
		#sideNav {
			padding-left: 0;
			padding-right: 0;
			text-align: center;
			position: fixed;
			top: 0;
			/* left: 0; */
			display: flex;
			flex-direction: column;
			width: 17rem;
			height: 100vh;
		}
		#sideNav .navbar-brand {
			display: flex;
			margin: auto auto 0;
			padding: 0.5rem;
		}
		#sideNav .navbar-brand .img-profile {
			max-width: 10rem;
			max-height: 10rem;
			border: 0.5rem solid rgba(245, 223, 78, 0.5);
		}
		#sideNav .navbar-collapse {
			display: flex;
			align-items: flex-start;
			flex-grow: 0;
			width: 100%;
			margin-bottom: auto;
		}
		#sideNav .navbar-collapse .navbar-nav {
			flex-direction: column;
			width: 100%;
		}
		#sideNav .navbar-collapse .navbar-nav .nav-item {
			display: block;
		}
		#sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
			display: block;
		}
		.fixed-top{
			position: relative;
			left: auto;
			right: auto;
		}
	}

	.show {
		display: none;
		transition:cubic-bezier(0.55, 0.055, 0.675, 0.19);
	}
</style>
