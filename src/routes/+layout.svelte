<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import '../style.css';

  const basePath = '/my-portfolio';
  
  // Initialize with the value that should already be applied by app.html
  let colorScheme = 'light dark';

  // Ensure localStorage is available in the client
  const localStorageAvailable = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

  // Apply and save the color scheme
  function setColorScheme(scheme) {
      if (typeof document !== 'undefined') {
          // Remove existing theme classes
          document.documentElement.classList.remove('theme-light', 'theme-dark', 'theme-auto');
          
          // Set the appropriate class
          if (scheme === 'light') {
              document.documentElement.classList.add('theme-light');
          } else if (scheme === 'dark') {
              document.documentElement.classList.add('theme-dark');
          } else {
              document.documentElement.classList.add('theme-auto');
          }
          
          // Also set the CSS color-scheme property for browser UI
          document.documentElement.style.setProperty('color-scheme', scheme);
          
          if (localStorageAvailable) {
              globalThis.localStorage.setItem('colorScheme', scheme);
          }
      }
  }

  // Apply the initial color scheme on page load
  onMount(() => {
      // Sync with what's already in localStorage (set by app.html)
      if (localStorageAvailable) {
          const storedScheme = globalThis.localStorage?.getItem('colorScheme') || 'light dark';
          colorScheme = storedScheme;
          // Don't call setColorScheme here since app.html already applied it
      }
      
      // Enable smooth transitions after initial load to prevent flash
      setTimeout(() => {
          document.documentElement.classList.add('theme-transitions');
      }, 100);
  });

  // Function to handle the change event and toggle the theme
  function handleChange(event) {
      colorScheme = event.target.value;
      setColorScheme(colorScheme);
  }
</script>

<!-- Color scheme selector with bind:value to colorScheme -->
<label class="color-scheme">
  Theme:
  <select bind:value={colorScheme} on:change={handleChange} aria-label="Select color scheme">
      <option value="light dark">Automatic</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
  </select>
</label>

<nav>
    <a href="{base}/" class={$page.url.pathname === `${base}/` ? 'active' : ''}>Home</a>
    <a href="{base}/projects" class={$page.url.pathname === `${base}/projects` ? 'active' : ''}>Projects</a>
    <a href="{base}/cv" class={$page.url.pathname === `${base}/cv` ? 'active' : ''}>CV</a>
    <a href="{base}/contact" class={$page.url.pathname === `${base}/contact` ? 'active' : ''}>Contact</a>
    <a href="https://www.github.com/deerings" target="_blank" rel="noopener noreferrer">Github</a>
  </nav>

<slot></slot> <!-- Render child components/pages -->
