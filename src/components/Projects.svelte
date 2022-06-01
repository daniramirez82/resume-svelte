<script>
	import ProjectCard from '../UI/Project-card.svelte';
	import { dB } from '../data/dB';
</script>

<section class="resume-section" id="projects">
	<div class="resume-section-content">
		<h2 class="mb-5">Projects_</h2>

		<div class="projects-table">
			<div class="row row-cols-1 row-cols-md-2 g-4">
				{#each $dB.projects as p}
					<ProjectCard data={p} />
				{/each}

				<div />
			</div>
		</div>
	</div>
</section>
