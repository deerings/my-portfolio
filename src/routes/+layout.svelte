<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import '../style.css';

  const basePath = '/my-portfolio';
  let colorScheme;

  // Ensure localStorage is available in the client
  const localStorageAvailable = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

  // Apply and save the color scheme
  function setColorScheme(scheme) {
      if (typeof document !== 'undefined') {
          document.documentElement.style.setProperty('color-scheme', scheme);
          if (localStorageAvailable) {
              globalThis.localStorage.setItem('colorScheme', scheme);
          }
      }
  }

  // Apply the initial color scheme on page load
  onMount(() => {
      if (localStorageAvailable) {
          colorScheme = globalThis.localStorage?.getItem('colorScheme') || 'light dark';
      } else {
          colorScheme = 'light dark'; // Default if localStorage is not available
      }
      setColorScheme(colorScheme);
  });

  // Function to handle the change event and toggle the theme
  function handleChange(event) {
      colorScheme = event.target.value; // Holds the selected value
      setColorScheme(colorScheme);
  }
</script>

<!-- Color scheme selector with bind:value to colorScheme -->
<label class="color-scheme" style="position: absolute; top: 1rem; right: 1rem; font-size: 80%;">
  Theme:
  <select bind:value={colorScheme} on:change={handleChange} aria-label="Select color scheme">
      <option value="light dark">Automatic</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
  </select>
</label>

<nav>
  <a href="https://deerings.github.io/my-portfolio/" class={$page.url.pathname === '/' ? 'active' : ''}>Home</a>
  <a href="https://deerings.github.io/my-portfolio/projects" class={$page.url.pathname === '/projects' ? 'active' : ''}>Projects</a>
  <a href="https://deerings.github.io/my-portfolio/contact" class={$page.url.pathname === '/contact' ? 'active' : ''}>Contact</a>
  <a href="https://deerings.github.io/my-portfolio/meta" class={$page.url.pathname === '/meta' ? 'active' : ''}>Meta</a>
  <a href="https://deerings.github.io/my-portfolio/cv" class={$page.url.pathname === '/cv' ? 'active' : ''}>CV</a>
  <a href="https://www.github.com/deerings" target="_blank" rel="noopener noreferrer">Github</a>
</nav>

<style>
  .active {
      font-weight: bold;
      color: gray; /* Customize as needed */
  }
</style>

<slot></slot> <!-- Render child components/pages -->
