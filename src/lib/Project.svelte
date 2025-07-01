<script>
  export let data; 
  
  // Extract potential tags/technologies from the description
  function extractTags(description) {
    const techKeywords = [
      'EEG', 'CPAP', 'OSA', 'COPD', 'Mobile App', 'Web-based', 'Machine Learning', 
      'ML', 'Visualization', 'Data', 'Sleep', 'Research', 'Study', 'Analysis',
      'Stroop', 'Attention', 'Neural', 'Cognitive', 'Psychophysics', 'Statistical'
    ];
    
    return techKeywords.filter(keyword => 
      description.toLowerCase().includes(keyword.toLowerCase())
    ).slice(0, 3); // Limit to 3 tags
  }
  
  $: tags = extractTags(data.description);
</script>

<article class="project-card">
  <div class="card-header">
    <div class="year-badge">{data.year}</div>
    {#if tags.length > 0}
      <div class="tags">
        {#each tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    {/if}
  </div>
  
  {#if data.image}
    <div class="image-container">
      <img
        src={data.image}
        alt={data.title}
        loading="lazy"
        class="project-image"
      />
    </div>
  {/if}

  <div class="card-content">
    <h2 class="project-title">{data.title}</h2>
    
    <div class="description-container">
      <p class="description">{data.description}</p>
    </div>
  </div>
</article>

<style>
  .project-card {
    background-color: var(--color-bg-secondary);
    border: 1px solid var(--color-border-light);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px oklch(0% 0% 0 / 0.15);
    border-color: var(--color-accent);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0.75rem 0.75rem 0.5rem;
    gap: 0.5rem;
  }

  .year-badge {
    background: oklch(25% 0% 0);
    color: oklch(100% 0% 0);
    padding: 0.2rem 0.6rem;
    border-radius: 16px;
    font-size: 0.75rem;
    font-weight: 600;
    flex-shrink: 0;
    box-shadow: 0 2px 4px oklch(0% 0% 0 / 0.1);
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    flex: 1;
    justify-content: flex-end;
  }

  .tag {
    background-color: var(--color-bg-hover);
    color: var(--color-text-secondary);
    padding: 0.2rem 0.5rem;
    border-radius: 12px;
    font-size: 0.7rem;
    font-weight: 500;
    border: 1px solid var(--color-border-light);
  }

  .image-container {
    position: relative;
    overflow: hidden;
    margin: 0 0.75rem;
    border-radius: 6px;
    aspect-ratio: 2/1;
  }

  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .project-card:hover .project-image {
    transform: scale(1.05);
  }

  .card-content {
    padding: 0.5rem 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .project-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--color-text-primary);
    margin: 0;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .description-container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .description {
    color: var(--color-text-secondary);
    line-height: 1.5;
    margin: 0;
    font-size: 0.9rem;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .card-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }
    
    .tags {
      justify-content: flex-start;
    }
    
    .project-title {
      font-size: 1.1rem;
    }
  }

  /* Loading skeleton animation */
  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: calc(200px + 100%) 0; }
  }
  
  .project-image[src=""] {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%);
    background-size: 400px 100%;
    animation: shimmer 1.5s ease-in-out infinite;
  }
</style>