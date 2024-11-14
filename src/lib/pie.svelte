<script>
    import * as d3 from 'd3';
    export let data = []; // Accepts pieData as a prop
    export let selectedIndex = -1; // Initialize selectedIndex prop
  
    // Define color scheme outside reactive statement
    const color = d3.schemeCategory10;

    // Reactive arc data based on the input data
    let arcs;
    $: arcs = (() => {
        const arcGenerator = d3.arc().innerRadius(0).outerRadius(80); // Increased outer radius to 80
        const sliceGenerator = d3.pie().value(d => d.value);
        const arcData = sliceGenerator(data);
        return arcData.map((d, i) => ({
          path: arcGenerator(d),
          label: d.data.label,
          value: d.data.value,
          color: $color[i % 10]
        }));
    })();
  
    // Function to toggle selection
    function toggleWedge(index) {
      selectedIndex = selectedIndex === index ? -1 : index; // Toggle selection
    }
  </script>
  
  <!-- Container to hold pie chart and legend side by side -->
  <div class="container">
    <!-- Render the pie chart -->
    <svg viewBox="-100 -100 200 200" class="pie-chart">
      {#each arcs as arc, index}
        <path
          d="{arc.path}"
          fill="{arc.color}"
          class:selected="{selectedIndex === index}"
          on:click="{() => toggleWedge(index)}"
          on:keydown="{(e) => e.key === 'Enter' && toggleWedge(index)}"
          role="button"
          tabindex="0"
        />
      {/each}
    </svg>
  
    <!-- Render the legend for the pie chart -->
    <ul class="legend">
      {#each arcs as arc, index}
        <button
          type="button"
          class:selected="{selectedIndex === index}"
          on:click="{() => toggleWedge(index)}"
          on:keydown="{(e) => e.key === 'Enter' && toggleWedge(index)}"
        >
          <span class="swatch" style="background-color: {arc.color};"></span>
          {arc.label} ({arc.value})
        </button>
      {/each}
    </ul>
  </div>
  
  <style>
    /* Flex container for pie chart and legend */
    .container {
      display: flex;
      align-items: center;
      gap: 1em; /* Space between pie chart and legend */
    }
  
    /* Increased pie chart size */
    .pie-chart {
      max-width: 300px; /* Set the maximum width to make the pie chart larger */
      margin: 1em 0;
    }
  
    /* Legend styling */
    .legend {
      list-style: none;
      padding: 1em;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      border: 1px solid #ccc; /* Border around the legend */
      border-radius: 8px;
      background-color: #f9f9f9; /* Optional background color */
    }
  
    /* Styling for individual legend items */
    .legend button {
      display: flex;
      align-items: center;
      gap: 0.5em;
      cursor: pointer;
    }
  
    /* Swatch styling */
    .swatch {
      display: inline-block;
      width: 1em;
      height: 1em;
      border-radius: 50%;
    }
  
    /* Path styling */
    path {
      transition: 300ms;
      cursor: pointer;
    }
  
    /* Highlight selected wedge and legend item */
    .selected {
      --color: #ff6347 !important;
  
      &:is(path) {
        fill: var(--color);
        transform: scale(1.1); /* Slightly enlarge the selected wedge */
      }
  
    }
  
    /* Hover effect for fading other wedges */
    svg:has(path:hover) {
      path:not(:hover) {
        opacity: 50%;
      }
    }
  </style>
  