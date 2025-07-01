<script>
    import projects from '$lib/projects.json';
    import Project from '$lib/Project.svelte';
    import { onMount } from 'svelte';

    export let data;

    let userData;
    let projectsContainer;
    let showProjects = true; // Changed to true to prevent initial flash

    onMount(() => {
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
    <title>{data.title}</title>
</svelte:head>

<h1>Home</h1>
<p>Hi, I'm Sean. <br>That's me in the green shirt (aboard the USS Green Bay in Sydney, Australia during Exercise Talisman Sabre 2023).<br> 
    I'm part of Sleep, Tactical Efficiency, and Endurance Laboratory (STEEL) at Naval Health Research Center in Point Loma, CA. <br>
    I mainly work with active-duty Navy, measuring sleep in shipboard environments.<br><br>
    When I'm not working, I enjoy camping, ice hockey, music, sailing, and cooking (just to name a few things).
</p>
<p style="text-align: center;">
    <img src="images/GB_chiefs_shrunk.jpg" 
         alt="Me aboard the USS Green Bay during a data collection event in Australia." 
         class="responsive-image"
         width="800"
         height="600"
         style="max-width: 100%; height: auto; display: block; margin: 0 auto;">
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
    <section class="github-stats-loading">
        <h2>My Github Stats</h2>
        <dl class="profile-stats">
            <dt>FOLLOWERS</dt>
            <dd class="loading-placeholder">•••</dd>
            <dt>FOLLOWING</dt>
            <dd class="loading-placeholder">•••</dd>
            <dt>PUBLIC REPOSITORIES</dt>
            <dd class="loading-placeholder">•••</dd>
            <dt>PUBLIC GISTS</dt>
            <dd class="loading-placeholder">•••</dd>
        </dl>
    </section>
{/if}

<style>
    /* Prevent layout shifts */
    section {
        min-height: fit-content;
    }
    
    .profile-stats {
        display: grid;
        grid-template-columns: repeat(4, 1fr); /* Four equal columns */
        gap: 0.5rem; /* Space between items */
        min-height: 4rem; /* Reserve space to prevent layout shift */
    }

    dt {
        grid-row: 1; /* Place dt elements in the first row */
        color: var(--color-text-muted); /* Set color to muted text */
        font-size: 0.9rem; /* Make font size smaller */
        font-weight: 300; /* Use a thinner font weight */
    }

    dd {
        grid-row: 2; /* Place dd elements in the second row */
        margin: 0; /* Remove default margin */
        font-size: 1.5rem; /* Increase font size for the numbers */
    }

    /* Loading placeholder styles */
    .loading-placeholder {
        opacity: 0.6;
        animation: pulse 1.5s ease-in-out infinite;
    }

    @keyframes pulse {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 0.3; }
    }

    /* Ensure consistent spacing and prevent jumps */
    h1, h2 {
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    /* Prevent any possible content shifting */
    body, main {
        overflow-x: hidden;
    }

    /* Ensure stable image rendering */
    .responsive-image {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
        /* Prevent any layout shift during load */
        aspect-ratio: 4/3;
        object-fit: cover;
    }

    /* Force content to render in order */
    section, h2, div {
        contain: layout style;
    }

    /* Prevent any floating or positioning issues */
    * {
        box-sizing: border-box;
    }
</style>

<h2>My Latest Projects</h2>
<div class="projects highlights">
    {#each projects.slice(0, 3) as project}
        <Project data={project} hLevel={3} />
    {/each}
</div>




