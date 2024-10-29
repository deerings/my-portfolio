<script>
  let root = document.documentElement;
  let colorScheme = localStorage.colorScheme ?? 'light dark'; 
  root.style.setProperty('color-scheme', colorScheme);

  import projects from '$lib/projects.json';
  import Project from '$lib/Project.svelte';
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<h1>Projects</h1>
<div class="projects">
  {#if projects.length > 0}
    {#each projects as p}
      <Project data={p} />  
    {/each}
  {:else}
    <p>No projects found.</p>
  {/if}
</div>
