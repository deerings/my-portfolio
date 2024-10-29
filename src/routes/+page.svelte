<script>
    import { onMount } from 'svelte';
    import projects from '$lib/projects.json';
    import Project from '$lib/Project.svelte';

    let root = document.documentElement;
    let colorScheme;

    // User data initialization
    let userData;

    onMount(() => {
        colorScheme = localStorage.colorScheme ?? 'light dark';
        root.style.setProperty('color-scheme', colorScheme);

        // Fetch user data
        fetch("https://api.github.com/users/deerings")
            .then(response => response.json())
            .then(data => {
                userData = data;
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
            });
    });

    onMount(() => {
        // This block only runs in the browser - ADDED
        colorScheme = localStorage.colorScheme ?? 'light dark';
        if (typeof document !== 'undefined') {
            document.documentElement.style.setProperty('color-scheme', colorScheme);
        }
    });

    // Only run this code in the client environment
    onMount(() => {
        colorScheme = localStorage.colorScheme ?? 'light dark';
        document.documentElement.style.setProperty('color-scheme', colorScheme);

    });

    onMount(() => {
      // Code that relies on 'document'
      document.documentElement.style.setProperty('color-scheme', 'light dark');
      // other client-only logic here
  });
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<h1>Sean Deering</h1>
<p>Hi, I'm Sean. I work at Naval Health Research Center in San Diego, CA.<br><br>
    I'm a second-year graduate student in the Online Master of Data Science Program at the Halıcıoğlu Data Science Institute at UCSD.<br><br>
    I enjoy camping, ice hockey, sailing, and cooking (just to name a few).
</p>
<p style="text-align:center;">
    <img src="images/GB_chiefs_shrunk.jpg" alt="Me aboard the USS Green Bay during a data collection event in Australia." width="600" height="400">
</p>

{#if userData}
<section>
    <h2>My Github Stats</h2>
    <dl class="profile-stats">
        <dt>FOLLOWERS</dt>
        <dd>{userData.followers}</dd>
        <dt>FOLLOWING</dt>
        <dd>{userData.following}</dd>
        <dt>PUBLIC REPOSITORIES</dt>
        <dd>{userData.public_repos}</dd>
        <dt>PUBLIC GISTS</dt>
        <dd>{userData.public_gists}</dd>
    </dl>
</section>
{:else}
    <p>Loading user data...</p>
{/if}

<style>
    .profile-stats {
        display: grid;
        grid-template-columns: repeat(4, 1fr); /* Four equal columns */
        gap: 0.5rem; /* Space between items */
    }

    dt {
        grid-row: 1; /* Place dt elements in the first row */
        color: gray; /* Set color to gray */
        font-size: 0.9rem; /* Make font size smaller */
        font-weight: 300; /* Use a thinner font weight */
    } /* Closing brace for dt styles added */

    dd {
        grid-row: 2; /* Place dd elements in the second row */
        margin: 0; /* Remove default margin */
        font-size: 1.5rem; /* Increase font size for the numbers */
    }
</style>

<h2>Latest Projects</h2>
<div class="projects highlights">
    {#each projects.slice(0, 3) as p}
        <Project data={p} hLevel={3} />
    {/each}
</div>

<slot /> <!-- This will render the content of the routed pages -->
