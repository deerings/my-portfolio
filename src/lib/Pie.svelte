<script>
  import * as d3 from 'd3';

  export let data = [];
  export let selectedIndices = []; // Export selectedIndices to allow binding from parent

  // Create the pie generator to calculate angles, with the .value() function to specify the 'value' key
  let sliceGenerator = d3.pie()
    .value((d) => d.value)
    .sort(null); // Disable sorting to preserve data order

  // Create the arc generator (no need to manually calculate angles)
  let arcGenerator = d3.arc()
      .innerRadius(0)      // Change to a positive value for a donut chart
      .outerRadius(50);    // Outer radius for the pie slices

  // Create a color scale using d3.schemeTableau10 for a set of distinct colors
  let colors = d3.scaleOrdinal(d3.schemeTableau10);

  // Reactive statement to update arcData whenever data changes
  let arcData = [];
  $: {
      arcData = sliceGenerator(data); // Recalculate arc data whenever 'data' changes
  }

  // Store the hovered slice index for opacity control
  let hoveredIndex = null;

  // Function to handle hover events
  function handleHover(index, isHovering) {
      hoveredIndex = isHovering ? index : null; // Set or clear the hovered index
  }

  // Function to handle click events for slice selection
  function handleClick(index, event) {
      if (event.shiftKey) {
          // Multi-select mode: toggle the index in the array
          if (selectedIndices.includes(index)) {
              selectedIndices = selectedIndices.filter(i => i !== index);
          } else {
              selectedIndices = [...selectedIndices, index];
          }
      } else {
          // Single select mode: replace selection
          selectedIndices = selectedIndices.includes(index) && selectedIndices.length === 1 
              ? [] 
              : [index];
      }
  }
</script>

<style>
  /* Container for the pie chart and legend, display them side by side */
  .container {
      display: flex;
      gap: 2em;  /* Adds space between the pie chart and legend */
      align-items: center;  /* Vertically centers the items */
      flex-wrap: wrap;  /* Allows wrapping on smaller screens */
  }

  /* SVG styling for the pie chart */
  svg {
      max-width: 20em;
      overflow: visible;
      flex-shrink: 0;  /* Prevents the SVG from shrinking */
      outline: none;  /* Remove focus outline */
  }

  path {
    transition: 300ms;
    cursor: pointer;
    outline: none;  /* Remove focus outline */
  }

  path:hover {
    filter: brightness(1.1);
  }

  path.selected {
    transform-origin: center;
  }

  /* Flexbox for vertical alignment of text and swatch */
  .legend {
      list-style: none;  /* Remove bullet points */
      padding-left: 0;   /* Remove default list padding */
  }

  .legend button {
      display: flex;
      align-items: center;
      gap: 0.5em;  /* Adds spacing between the swatch and the label */
      cursor: pointer;
      padding: 0.25em;
      border-radius: 4px;
      transition: background-color 200ms;
      border: none;
      background: transparent;
      font: inherit;
      text-align: left;
      width: 100%;
      color: var(--color-text-primary);
  }

  .legend button:hover {
      background-color: var(--color-bg-hover);
  }

  .legend button.selected {
      font-weight: bold;
      background-color: var(--color-bg-hover);
  }

  .legend button.selected .swatch {
      animation: blink-swatch 1s infinite;
  }

  @keyframes blink-swatch {
      0%, 50% {
          background-color: var(--color-bg-primary) !important;
          border: 2px solid var(--color);
      }
      51%, 100% {
          background-color: var(--color);
          border: 2px solid var(--color);
      }
  }

  .legend .swatch {
      width: 1em;
      height: 1em;
      background-color: var(--color);
      border-radius: 2px;
      border: 1px solid var(--color-border-light);
  }

  .legend em {
      font-style: normal;
      color: var(--color-text-muted);
  }
</style>

<div class="container">
  <svg viewBox="-50 -50 100 100" role="img" aria-labelledby="pieChartTitle">
      <title id="pieChartTitle">Pie chart representing the data distribution</title>
      <!-- Render each arc as a path element with colors assigned from the color scale -->
      {#each arcData as arc, i}
          <path
              d="{arcGenerator(arc)}"
              fill="{colors(i)}"
              class:selected="{selectedIndices.includes(i)}"
              transform="{selectedIndices.includes(i) ? `translate(${arcGenerator.centroid(arc).map(d => d * 0.1).join(',')})` : ''}"
              on:mouseenter="{() => handleHover(i, true)}"
              on:mouseleave="{() => handleHover(i, false)}"
              on:click="{(event) => handleClick(i, event)}"
              style="opacity: {hoveredIndex !== null && hoveredIndex !== i ? 0.5 : 1}"
              role="button"
              tabindex="0"
              aria-label="Slice for {arcData[i].data.label}, value: {arcData[i].data.value}. Click to filter projects by this year. Shift+click to select multiple years."
              on:keydown="{(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleClick(i, e); } }}"
          />
      {/each}
  </svg>

  <!-- Legend displaying data labels and corresponding color swatches -->
  <ul class="legend">
      {#each data as d, index}
          <li>
              <button 
                  style="--color: {colors(index)}"
                  class:selected="{selectedIndices.includes(index)}"
                  on:click="{(event) => handleClick(index, event)}"
                  aria-label="Filter by {d.label} ({d.value} projects). Shift+click to select multiple years."
              >
                  <span class="swatch"></span>
                  {d.label} <em>({d.value})</em>
              </button>
          </li>
      {/each}
  </ul>
</div>