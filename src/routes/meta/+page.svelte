<script>
    import { onMount } from 'svelte';
    import * as d3 from 'd3';
    import Pie from '$lib/Pie.svelte';

    let data = [];
    let commits = [];
    let width = 1000, height = 600, margin = { top: 20, right: 30, bottom: 40, left: 50 };
    let xScale, yScale, rScale, xAxis, yAxis, yAxisGridlines;
    let hoveredIndex = -1;
    let cursor = { x: 0, y: 0 };
    $: hoveredCommit = commits[hoveredIndex] ?? {};
    let brushSelection = null;
    let svg;

    onMount(async () => {
        try {
            data = await d3.csv('static/loc.csv', (row) => ({
                ...row,
                line: +row.line || 0,
                depth: +row.depth || 0,
                length: +row.length || 0,
                date: new Date(row.date + 'T00:00' + row.timezone),
                datetime: new Date(row.datetime),
                type: row.type // Using `type` instead of `language`
            }));
            commits = d3.groups(data, d => d.commit).map(([commit, lines]) => ({
                commit,
                datetime: new Date(lines[0].datetime),
                hourFrac: lines[0].datetime.getHours() + lines[0].datetime.getMinutes() / 60,
                url: `https://github.com/deerings/${commit}`,
                author: lines[0].author,
                linesEdited: lines.length,
                lines: lines.map(line => ({ type: line.type }))
            }));

            // Sort commits so smaller dots appear on top of larger ones
            commits = d3.sort(commits, d => -d.linesEdited);

            // Define scales
            xScale = d3.scaleTime()
                .domain(d3.extent(commits, d => d.datetime))
                .range([margin.left, width - margin.right])
                .nice();

            yScale = d3.scaleLinear()
                .domain([0, 24])
                .range([height - margin.bottom, margin.top]);

            const minRadius = 2, maxRadius = 30;
            rScale = d3.scaleSqrt()
                .domain(d3.extent(commits, d => d.linesEdited))
                .range([minRadius, maxRadius]);

            // Initialize brush
            d3.select(svg).call(d3.brush().on('start brush end', brushed));
        } catch (error) {
            console.error("Error loading or processing CSV data:", error);
        }
    });

    function brushed(event) {
        brushSelection = event.selection;
    }

    function isCommitSelected(commit) {
        if (!brushSelection) return false;
        const [x0, y0] = brushSelection[0];
        const [x1, y1] = brushSelection[1];
        const x = xScale(commit.datetime);
        const y = yScale(commit.hourFrac);
        return x >= x0 && x <= x1 && y >= y0 && y <= y1;
    }

    $: selectedCommits = brushSelection ? commits.filter(isCommitSelected) : commits;
    $: hasSelection = brushSelection && selectedCommits.length > 0;

    // Calculate selected lines and breakdown by `type`
    $: selectedLines = (hasSelection ? selectedCommits : commits).flatMap(d => d.lines || []);
    $: typeBreakdown = d3.rollup(
        selectedLines,
        lines => lines.length,
        line => line.type
    );

    // Prepare data for Pie chart
    $: pieData = Array.from(typeBreakdown, ([type, lines]) => ({
        label: type,
        value: lines
    }));

    $: {
        if (xScale && yScale) {
            d3.select(xAxis).call(d3.axisBottom(xScale));
            d3.select(yAxis).call(
                d3.axisLeft(yScale).tickFormat(d => `${String(d % 24).padStart(2, '0')}:00`)
            );
            d3.select(yAxisGridlines).call(
                d3.axisLeft(yScale).tickFormat('').tickSize(-width + margin.left + margin.right)
            );
        }
    }
</script>

<h2>Commits by time of day</h2>
<dl class="stats">
  <div class="stat-item">
    <dt>Total <abbr title="Lines of code">LOC</abbr></dt>
    <dd>{data.length || 0}</dd>
  </div>
  <div class="stat-item">
    <dt>Commits</dt>
    <dd>{commits.length || 0}</dd>
  </div>
  <div class="stat-item">
    <dt>Max Lines</dt>
    <dd>{data.length > 0 ? d3.max(data, d => d.line) : 0}</dd>
  </div>
  <div class="stat-item">
    <dt>Avg Lines</dt>
    <dd>{data.length > 0 ? d3.mean(data, d => d.length).toFixed(2) : 0}</dd>
  </div>
  <div class="stat-item">
    <dt>Number of Files</dt>
    <dd>{data.length > 0 ? d3.group(data, d => d.file).size : 0}</dd>
  </div>
  <div class="stat-item">
    <dt>Maximum Depth</dt>
    <dd>{data.length > 0 ? d3.max(data, d => d.depth) : 0}</dd>
  </div>
</dl>

<h2>Commits by Time of Day</h2>
<svg bind:this={svg} viewBox={`0 0 ${width} ${height}`}>
    <!-- Brush overlay -->
    <g class="brush" />

    <!-- Gridlines and Axes -->
    <g class="gridlines" transform="translate({margin.left}, 0)" bind:this={yAxisGridlines}>
        <line x1="0" x2="{width - margin.left - margin.right}" y1="0" y2="0"></line>
    </g>
    <g transform="translate(0, {height - margin.bottom})" bind:this={xAxis} />
    <g transform="translate({margin.left}, 0)" bind:this={yAxis} />

    <g class="dots">
        {#each commits as commit, index}
            <circle
                cx={xScale(commit.datetime)}
                cy={yScale(commit.hourFrac)}
                r={rScale(commit.linesEdited)}
                fill={isCommitSelected(commit) ? "orange" : "steelblue"}
                fill-opacity={hoveredIndex === index ? 1 : 0.6}
                on:mouseenter={(evt) => { hoveredIndex = index; cursor = { x: evt.clientX, y: evt.clientY }; }}
                on:mouseleave={() => hoveredIndex = -1}
                style="transform-origin: center; transform-box: fill-box"
                role="img"
            />
        {/each}
    </g>
</svg>

<p>{hasSelection ? `${selectedCommits.length} commits selected` : "No commits selected"}</p>

<!-- Display language breakdown as a pie chart below the scatterplot -->
<div class="language-breakdown">
    <Pie data={pieData} />
</div>

<style>
    .stats {
        display: flex;
        justify-content: space-around;
        gap: 1rem;
        text-align: center;
        margin-top: 2rem;
        flex-wrap: wrap;
    }

    .stat-item {
        min-width: 150px;
        flex: 1;
    }

    .stat-item dt {
        font-weight: bold;
        font-size: 0.8em;
        color: #666;
        text-transform: uppercase;
        margin-bottom: 0.5rem;
    }

    .stat-item dd {
        font-size: 2em;
        margin: 0;
        color: #333;
    }

    .stats abbr {
        text-decoration: underline;
        cursor: help;
    }

    svg {
        overflow: visible;
    }

    .gridlines {
        stroke-opacity: 0.2;
    }
    .gridlines line {
        stroke: #ccc;
    }


    circle {
        transition: transform 0.2s ease, fill-opacity 0.2s ease;
    }
    circle:hover {
        transform: scale(1.5);
    }

    /* Style for brush selection rectangle */
    :global(.selection) {
        fill-opacity: 0.2;
        stroke: black;
        stroke-opacity: 0.8;
        stroke-dasharray: 4 2;
    }

    /* Style for language breakdown section */
    .language-breakdown {
        margin-top: 1rem;
        text-align: center;
    }
</style>