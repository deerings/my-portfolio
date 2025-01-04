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

