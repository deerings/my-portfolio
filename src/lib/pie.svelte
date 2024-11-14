<script>
    import * as d3 from 'd3';
    export let selectedIndex = -1; // Initialize selectedIndex prop
  
    // Hardcoded pie data for demonstration
    let data = [
      { label: 'Category A', value: 40 },
      { label: 'Category B', value: 60 }
    ];
  
    // Define color scheme outside reactive statement
    let color = d3.schemeCategory10;
  
    // Reactive arc data based on the input data
    let arcs = [];
    $: {
      const arcGenerator = d3.arc().innerRadius(0).outerRadius(80); // Increased outer radius to 80
      const sliceGenerator = d3.pie().value(d => d.value);
      const arcData = sliceGenerator(data);
      arcs = arcData.map((d, i) => ({
        path: arcGenerator(d),
        label: d.data.label,
        value: d.data.value,
        color: $color[i % 10] // Corrected color assignment
      }));
    }
  
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
          d={arc.path}
          fill={arc.color}
          class:selected={selectedIndex === index}
          on:click={() => toggleWedge(index)}
          on:keydown={(e) => e.key === 'Enter' && toggleWedge(index)}
          role="button"
          tabindex="0"
          aria-label={arc.label + ' slice with value ' + arc.value}
        />
      {/each}
    </svg>
  
    <!-- Render the legend for the pie chart -->
    <ul class="legend">
      {#each arcs as arc, index}
        <li>
          <button
            type="button"
            class:selected={selectedIndex === index}
            on:click={() => toggleWedge(index)}
            on:keydown={(e) => e.key === 'Enter' && toggleWedge(index)}
          >
            <span class="swatch" style="background-color: {arc.color};"></span>
            {arc.label} ({arc.value})
          </button>
        </li>
      {/each}
    </ul>
  </div>
  
  <style>
    /* Flex container for pie chart and legend */
    .container {
      display: flex;
      align-items: center;
      gap: 1em;
    }
  
    /* Increased pie chart size */
    .pie-chart {
      max-width: 300px;
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
      border: 1px solid #ccc;
      border-radius: 8px;
      background-color: #f9f9f9;
    }
  
    .legend button {
      display: flex;
      align-items: center;
      gap: 0.5em;
      cursor: pointer;
    }
  
    .swatch {
      display: inline-block;
      width: 1em;
      height: 1em;
      border-radius: 50%;
    }
  
    path {
      transition: fill 300ms, transform 300ms;
      cursor: pointer;
    }
  
    .selected {
      --color: #ff6347 !important;
    }
  
    path:hover {
      opacity: 0.5;
    }
  </style>
  