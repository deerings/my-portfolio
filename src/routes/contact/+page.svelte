<script>
  import { onMount } from 'svelte';

  export let data;
  let currentTimezone = '';
  let currentTime = '';

  function updateTimezone() {
    const now = new Date();
    
    // Get timezone info for Pacific Time
    const pacificTime = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Los_Angeles',
      timeZoneName: 'short'
    }).formatToParts(now);
    
    const timezonePart = pacificTime.find(part => part.type === 'timeZoneName');
    currentTimezone = timezonePart ? timezonePart.value : 'PST/PDT';
    
    // Format current time in Pacific timezone
    currentTime = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Los_Angeles',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(now);
  }

  onMount(() => {
    // Now this code only runs in the browser after mount
    let root = document.documentElement;

    // Check for localStorage before trying to access it
    if (typeof localStorage !== 'undefined') {
      let colorScheme = localStorage.colorScheme ?? 'light dark';
      root.style.setProperty('color-scheme', colorScheme);
    }

    // Update timezone and time
    updateTimezone();
    
    // Update time every minute
    const interval = setInterval(updateTimezone, 60000);
    
    // Cleanup interval on component destroy
    return () => clearInterval(interval);
  });
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<h1>Contact</h1>

<div class="contact-container">
  <div class="contact-intro">
    <p>I'm always interested in discussing data science opportunities, research collaborations, or connecting with fellow professionals in the field.</p>
  </div>

  <div class="contact-methods">
    <a href="mailto:deering.sean@gmail.com" class="contact-card">
      <div class="contact-icon">📧</div>
      <h3>Email</h3>
      <span class="contact-link">deering.sean@gmail.com</span>
      <p>Best for professional inquiries and detailed discussions.</p>
    </a>

    <a href="https://www.linkedin.com/in/deerings/" target="_blank" class="contact-card">
      <div class="contact-icon">💼</div>
      <h3>LinkedIn</h3>
      <span class="contact-link">Connect on LinkedIn</span>
      <p>Professional networking and career opportunities.</p>
    </a>

    <a href="https://blinq.me/XBhjnnumqQz3" target="_blank" class="contact-card">
      <div class="contact-icon">💳</div>
      <h3>Digital Card</h3>
      <span class="contact-link">View Digital Business Card</span>
      <p>Quick contact info and social links.</p>
    </a>

    <a href="https://github.com/deerings" target="_blank" class="contact-card">
      <div class="contact-icon">🐙</div>
      <h3>GitHub</h3>
      <span class="contact-link">View Projects</span>
      <p>Code repositories and open source contributions.</p>
    </a>
  </div>

  <div class="contact-info">
    <div class="info-section">
      <h3>📍 Location</h3>
      <p>San Diego, CA<br>
        {#if currentTimezone}
          {currentTimezone} ({currentTime})
        {:else}
          Pacific Time Zone
        {/if}
      </p>
    </div>
    
    <div class="info-section">
      <h3>⏰ Response Time</h3>
      <p>I typically respond to emails within 1-2 business days.</p>
    </div>
  </div>
</div>
    