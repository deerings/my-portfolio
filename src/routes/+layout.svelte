<script>
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import '../style.css';

  const basePath = '/my-portfolio';
  
  // Theme switcher state - initialize with correct value from the start
  let colorScheme = 'light dark'; // Default fallback only if nothing is found
  let selectElement; // Reference to the select element

  // Check if localStorage is available
  const localStorageAvailable = typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

  // Initialize colorScheme immediately and synchronously if in browser
  if (typeof window !== 'undefined') {
      // First try the global variable set by app.html - this should always be correct
      if (window.__INITIAL_COLOR_SCHEME__) {
          colorScheme = window.__INITIAL_COLOR_SCHEME__;
      } else if (localStorageAvailable) {
          // Fallback to reading localStorage directly
          const storedScheme = localStorage.getItem('colorScheme');
          if (storedScheme) {
              colorScheme = storedScheme;
          }
      }
  }

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
              localStorage.setItem('colorScheme', scheme);
          }
      }
  }

  // Apply the initial color scheme on page load
  onMount(() => {
      // Verify that our pre-selected option is correct
      if (selectElement && selectElement.value !== colorScheme) {
          selectElement.value = colorScheme;
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

<!-- Color scheme selector - always visible with correct initial value -->
<label class="color-scheme">
  Theme:
  <select bind:this={selectElement} on:change={handleChange} aria-label="Select color scheme">
      <option value="light dark" selected={colorScheme === 'light dark'}>Automatic</option>
      <option value="light" selected={colorScheme === 'light'}>Light</option>
      <option value="dark" selected={colorScheme === 'dark'}>Dark</option>
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
