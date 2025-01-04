<script>
  import projects from '$lib/projects.json';
  import Project from '$lib/Project.svelte';
  import Pie from '$lib/Pie.svelte';
  import * as d3 from 'd3';

  let query = ''; // Initialize search query
  let selectedYearIndex = -1; // Initialize selected year index

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

    pieData = rolledData.map(([year, count]) => {
      return { value: count, label: year };
    });
  }

  // Determine the selected year based on the selectedYearIndex
  let selectedYear;
  $: selectedYear = selectedYearIndex > -1 ? pieData[selectedYearIndex]?.label : null;

  // Filter projects by the selected year if a year is selected
  let filteredByYear;
  $: filteredByYear = selectedYear
    ? filteredProjects.filter((project) => project.year === selectedYear)
    : filteredProjects;
</script>

<h1>{filteredByYear.length} Projects</h1>

<!-- Pie chart with reactive data and year selection binding -->
<Pie data={pieData} bind:selectedIndex={selectedYearIndex} />

<!-- Search input -->
<input
  type="search"
  bind:value="{query}"
  aria-label="Search projects"
  placeholder="🔍 Search projects…"
/>

<p>Here is a showcase of my projects.</p>

<!-- Projects grid container showing only filtered projects by year and search query -->
<div class="projects">
  {#each filteredByYear as p (p.year + p.title)} <!-- Using a unique key here for proper rendering -->
    <Project data={p} />
  {/each}
</div>
