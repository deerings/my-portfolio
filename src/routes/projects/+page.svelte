<script>
  import projects from '$lib/projects.json';
  import Project from '$lib/Project.svelte';
  import Pie from '$lib/Pie.svelte';
  import * as d3 from 'd3';

  export let data;

  let query = ''; // Initialize search query
  let selectedYearIndices = []; // Initialize selected year indices array

  // Reactive filtered projects based on search query
  let filteredProjects;
  $: filteredProjects = projects.filter((project) => {
    let values = Object.values(project).join('\n').toLowerCase();
    return values.includes(query.toLowerCase());
  });

  // Reactive pie data based on filtered projects
  let pieData;
  $: {
    let rolledData = d3.rollups(
      filteredProjects, // Make sure to use filteredProjects here
      (v) => v.length,
      (d) => d.year
    );

    pieData = rolledData
      .map(([year, count]) => {
        return { value: count, label: year };
      })
      .sort((a, b) => b.label - a.label); // Sort by year descending (2024 to earliest)
  }

  // Determine the selected years based on the selectedYearIndices
  let selectedYears;
  $: selectedYears = selectedYearIndices.length > 0 
    ? selectedYearIndices.map(index => pieData[index]?.label).filter(Boolean)
    : [];

  // Filter projects by the selected years if any years are selected
  let filteredByYear;
  $: filteredByYear = selectedYears.length > 0
    ? filteredProjects.filter((project) => selectedYears.includes(project.year))
    : filteredProjects;
</script>

<svelte:head>
    <title>{data.title}</title>
</svelte:head>

<h1>{filteredByYear.length} Project{filteredByYear.length === 1 ? '' : 's'}{selectedYears.length > 0 ? ` from ${selectedYears.join(', ')}` : ''}</h1>

<!-- Pie chart with reactive data and year selection binding -->
<Pie data={pieData} bind:selectedIndices={selectedYearIndices} />
<br>
<!-- Search input -->
<input
  type="search"
  bind:value="{query}"
  aria-label="Search projects"
  placeholder="🔍 Search projects…"
/>

<!-- Projects grid container showing only filtered projects by year and search query -->
<div class="projects">
  {#each filteredByYear as p (p.year + p.title)} <!-- Using a unique key here for proper rendering -->
    <Project data={p} />
  {/each}
</div>
