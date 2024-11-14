<script>
  import Pie from './Pie.svelte'; // Or adjust this relative path based on your file structure
  import projects from './projects.json'; // Import project data
</script>

{#each projects as project}
  <article>
    <h2>{project.title}</h2>
    <img src={project.image} alt={project.title} />

    <div class="description-container">
      <p>{project.description}</p>
      <p class="year"><strong>Year:</strong> {project.year}</p>
    </div>

    <!-- Pass only metadata to Pie.svelte -->
    <Pie />
  </article>
{/each}

<style>
  article {
    margin-bottom: 20px;
    padding: 1em;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    text-align: center;
  }

  h2 {
    font-size: 1.5em;
    margin: 0.5em 0;
  }

  img {
    width: 100%;
    height: auto;
    max-height: 200px;
    object-fit: cover;
    border-radius: 5px;
    margin: 0.5em 0;
  }

  .description-container {
    margin-top: 1em;
  }

  .year {
    font-size: 0.9em;
    color: #666;
    margin-top: 0.5em;
  }
</style>
