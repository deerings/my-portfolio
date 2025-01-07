<script>
    import projects from '$lib/projects.json';
    import Project from '$lib/Project.svelte';
    import { onMount } from 'svelte';

    let colorScheme;
    let userData;

    onMount(() => {
        // Set color scheme based on localStorage (only runs on the client side)
        let root = document.documentElement;
        colorScheme = localStorage.colorScheme ?? 'light dark';
        root.style.setProperty('color-scheme', colorScheme);

        // Fetch user data from GitHub
        fetch("https://api.github.com/users/deerings")
            .then(response => response.json())
            .then(data => {
                userData = data;
            })
            .catch(error => {
                console.error("Error fetching user data:", error);
            });
    });
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<h1>Sean Deering</h1>
<p>Hi, I'm Sean. That's me in the green shirt. I do operational research at Naval Health Research Center in San Diego, CA. I mainly work with active-duty Navy.<br><br>
    I'm a second-year graduate student in the Online Master of Data Science Program at the Halıcıoğlu Data Science Institute at UCSD.<br><br>
    I enjoy camping, ice hockey, sailing, and cooking (just to name a few things).
    <p style="text-align: center;">
        <img src="images/GB_chiefs_shrunk.jpg" 
             alt="Me aboard the USS Green Bay during a data collection event in Australia." 
             class="responsive-image">
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
    }

    dd {
        grid-row: 2; /* Place dd elements in the second row */
        margin: 0; /* Remove default margin */
        font-size: 1.5rem; /* Increase font size for the numbers */
    }
</style>

<h2>Latest Projects</h2>
<div class="projects highlights">
    {#each projects.slice(0, 3) as project}
        <Project data={project} hLevel={3} />
    {/each}
</div>




