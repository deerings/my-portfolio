<script>
    import { page } from '$app/stores';

    let pages = [
        { url: './', title: 'Home' },
        { url: 'projects', title: 'Projects' },
        { url: 'contact', title: 'Contact' },
        { url: 'cv', title: 'CV' },
        { url: 'https://www.github.com/deerings', title: 'Github' },
    ];
</script>

<nav>
    {#each pages as p}
      <a href={p.url} class={ $page.url.pathname === p.url ? 'active' : '' }>
        {p.title}
      </a>
    {/each}
</nav>

<style>
  .active {
      font-weight: bold;
      color: blue; /* Customize as needed */
  }
</style>

<slot></slot> <!-- Render child components/pages -->
