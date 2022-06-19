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
	<!-- Education-->
	<section class="resume-section" id="education">
		<div class="resume-section-content">
			<h2 class="mb-5">Education</h2>
			<div class="d-flex flex-column flex-md-row justify-content-between mb-5">
				<div class="flex-grow-1">
					<h3 class="mb-0">University of Colorado Boulder</h3>
					<div class="subheading mb-3">Bachelor of Science</div>
					<div>Computer Science - Web Development Track</div>
					<p>GPA: 3.23</p>
				</div>
				<div class="flex-shrink-0">
					<span class="text-primary">August 2006 - May 2010</span>
				</div>
			</div>
			<div class="d-flex flex-column flex-md-row justify-content-between">
				<div class="flex-grow-1">
					<h3 class="mb-0">James Buchanan High School</h3>
					<div class="subheading mb-3">Technology Magnet Program</div>
					<p>GPA: 3.56</p>
				</div>
				<div class="flex-shrink-0">
					<span class="text-primary">August 2002 - May 2006</span>
				</div>
			</div>
		</div>
	</section>
	<hr class="m-0" />
	<!-- Interests-->

	<hr class="m-0" />
	<!-- Awards-->
	<section class="resume-section" id="awards">
		<div class="resume-section-content">
			<h2 class="mb-5">Awards & Certifications</h2>
			<ul class="fa-ul mb-0">
				<li>
					<span class="fa-li"><i class="fas fa-trophy text-warning" /></span>
					Google Analytics Certified Developer
				</li>
				<li>
					<span class="fa-li"><i class="fas fa-trophy text-warning" /></span>
					Mobile Web Specialist - Google Certification
				</li>
				<li>
					<span class="fa-li"><i class="fas fa-trophy text-warning" /></span>
					1
					<sup>st</sup>
					Place - University of Colorado Boulder - Emerging Tech Competition 2009
				</li>
				<li>
					<span class="fa-li"><i class="fas fa-trophy text-warning" /></span>
					1
					<sup>st</sup>
					Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)
				</li>
				<li>
					<span class="fa-li"><i class="fas fa-trophy text-warning" /></span>
					2
					<sup>nd</sup>
					Place - University of Colorado Boulder - Emerging Tech Competition 2008
				</li>
				<li>
					<span class="fa-li"><i class="fas fa-trophy text-warning" /></span>
					1
					<sup>st</sup>
					Place - James Buchanan High School - Hackathon 2006
				</li>
				<li>
					<span class="fa-li"><i class="fas fa-trophy text-warning" /></span>
					3
					<sup>rd</sup>
					Place - James Buchanan High School - Hackathon 2005
				</li>
			</ul>
		</div>
	</section>
</div>

<style>
.container-fluid{
	padding-left: 17rem;
	box-sizing: border-box;
}	
</style>
