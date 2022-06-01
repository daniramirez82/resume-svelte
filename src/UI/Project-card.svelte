<script>
	export let data;
</script>

<div class="col">
	<div class="card h-100 ">
		<img src={data.image} class="card-img-top img" alt={data.title} />
		<div class="card-body ">
			<div class="card-body-cont">
				<span class="sub-title text-primary">{data.subTitle}</span>
				<h5 class="card-title subheading">{data.title}</h5>
				<p class="card-text">
					{data.content}
				</p>
			</div>
		</div>
		<div class="card-footer">
			<div class="tech-logos">
				{#each data.techs as tech}
					<img class="img-tech" src="img/{tech}.svg" alt={tech} />
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.img {
		/* max-width: 25vw; */
		height: 400px;
		object-fit: cover;
	}

	.tech-logos {
		display: flex;
		justify-content: space-around;
	}

	.img-tech {
		width: 32px;
	}

	@media (min-width: 992px) {
		.img {
			height: 400px;
		}
	}
	.sub-title {
		margin-top: 15px;
		color: gray;

	}
    .card-body-cont{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .card-title{
        color: #495057;
        font-size: 3rem;
        font-weight: 600;
        margin-bottom: 30px;
    }

</style>
