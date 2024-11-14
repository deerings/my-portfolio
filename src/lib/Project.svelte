<script>
  export let data = {};
</script>

<article>
  <h2>{data.title}</h2>
  <img src={data.image} alt={data.title} />

  <!-- Wrapper div for description and year -->
  <div class="description-container">
    <p>{data.description}</p>
    <p class="year"><strong>Year:</strong> {data.year}</p>
  </div>
</article>

<style>
  article {
    margin-bottom: 20px;
    padding: 1em;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    text-align: center;
  }
  
  h2 {
    font-size: 1.5em;
    margin: 0.5em 0;
  }

  img {
    width: 100%;
    height: auto;
    max-height: 200px;
    object-fit: cover;
    border-radius: 5px;
    margin: 0.5em 0;
  }

  .description-container {
    margin-top: 1em;
  }

  .year {
    font-size: 0.9em;
    color: #666;
    margin-top: 0.5em;
  }
</style>
