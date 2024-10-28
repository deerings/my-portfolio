<script>
  let root = document.documentElement;
  let colorScheme = localStorage.colorScheme ?? 'light dark';
  root.style.setProperty('color-scheme', colorScheme);
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<h1>Contact</h1>
<div class="contact-form">
<form id ="contactform" action="mailto:sdeering@ucsd.edu" method="GET">
    <label for="subject">Subject:</label>
    <input type="text" id="subject" name="subject" required>
    
    <label for="body">Body:</label>
    <textarea id="body" name="body" required></textarea>
    
    <button type="submit">Send</button>
</form>
</div>

<p>Also, here is my <a href="https://blinq.me/XBhjnnumqQz3" target="_blank">digital business card</a>.</p>
    