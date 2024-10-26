<script>
    import projects from '$lib/projects.json';
    import Project from '$lib/Project.svelte';
    export let hLevel = 2; // This variable can be used if needed for something else
</script>

<style>
    /* Navigation styles moved from global CSS */
    nav {
        background-color: #333;
        color: white;
        padding: 1rem;
    }

    nav a {
        color: white;
        text-decoration: none;
        margin: 0 1rem;
    }

    nav a:hover {
        text-decoration: underline;
    }
</style>

<slot /> <!-- This will render the content of the routed pages -->

<svelte:head>
    <title>Sean Deering</title>
</svelte:head>

<h1>Sean Deering</h1>
<p>Hi, I'm Sean. I work at Naval Health Research Center in San Diego, CA.<br><br>
    I'm a second-year graduate student in the Online Master of Data Science Program at the Halıcıoğlu Data Science Institute at UCSD.<br><br>
    I enjoy camping, ice hockey, sailing, and cooking (just to name a few).
</p>
<p style="text-align:center;">
    <img src="images/GB_chiefs_shrunk.jpg" alt="Me aboard the USS Green Bay during a data collection event in Australia." width="600" height="400">
</p>

<h2>Latest Projects</h2> <!-- Subheading for projects section -->
<div class="projects highlights"> <!-- Wrap projects in a div for styling -->
    {#each projects.slice(0, 3) as p} <!-- Display the first 3 projects -->
        <Project data={p} hLevel={3} />  <!-- Pass hLevel as a prop if needed -->
    {/each}
</div>
