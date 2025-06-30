<script>
  export let data; 
  import Pie from '$lib/Pie.svelte';
</script>

<article class="project-card">
  <h2>{data.title}</h2>
  
  {#if data.image}
    <img
      src={data.image}
      alt={data.title}
      loading="lazy"
      class="project-image"
    />
  {/if}

  <div class="content">
    <p class="description">{data.description}</p>
    <p class="year">
      <strong>Year:</strong> {data.year}
    </p>
  </div>

  <Pie {data} />
</article>

<style>
  .project-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid var(--color-border-light);
  }
</style>