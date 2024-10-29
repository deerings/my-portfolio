<script>
    let root = document.documentElement;
    let colorScheme = localStorage.colorScheme ?? 'dark';
    root.style.setProperty('color-scheme', colorScheme);

    const projects = Array.from(document.querySelectorAll('.projects > article')).map((a) => ({
      title: a.querySelector('h2').textContent,
      image: a.querySelector('img').getAttribute('src'),
      description: a.querySelector('p').textContent,
    }));
  
    console.log(projects); /* This will log the extracted project data */
</script>

<svelte:head>
  <title>Curriculum Vitae</title>
</svelte:head>

<header class="cv-header">
    <h1>Curriculum Vitae</h1>

    <p><strong>SEAN DEERING</strong><br>
    1106 2nd St. #273<br>
    Encinitas, CA 92024<br>
    <a href="mailto:deering.sean@gmail.com">deering.sean@gmail.com</a></p>
</header>

<main>
    <section class="cv-section">
        <h2>Education</h2>
        <article>
            <h3>University of California, San Diego</h3>
            <p>BS, Psychology (Department honors with distinction) <time datetime="2012">2012</time></p>
            <p>Areas of Concentration: Cognitive Psychology & Cognitive Neuropsychology</p>
            <p>Honors Thesis: “Are regular players of first-person shooter video games better at multiple object tracking?”</p>
            <p>Advisor: Ed Vul, PhD</p>
        </article>
    </section>

    <section class="cv-section">
        <h2>Awards and Honors</h2>
        <ul>
            <li>Provost Honors (Winter & Spring quarters) <time datetime="2012">2012</time></li>
            <li>Psi Chi Distinguished Member <time datetime="2012">2012</time></li>
            <li>Phi Sigma Theta Honor Society <time datetime="2011-2012">2011 - 2012</time></li>
            <li>President’s Permanent Honor Roll <time datetime="2009">2009</time></li>
            <li>Phi Theta Kappa Honor Society <time datetime="2008-2009">2008 - 2009</time></li>
            <li>Dean’s List (All quarters) <time datetime="2007-2009">2007 - 2009</time></li>
        </ul>
    </section>

    <section class="cv-section">
        <h2>Volunteer Research Experience</h2>

        <article>
            <h3>Dept. of Psychology – University of California, San Diego</h3>
            <p><strong>Research Assistant – Perception and Cognition Lab</strong> <time datetime="2013-03">Mar. 2013</time> – <time datetime="2017-06">Jun. 2017</time></p>
            <p>Professor: John Serences, PhD</p>
            <p>Duties: Collecting and assisting with preprocessing and analysis of EEG and psychophysical data using BioSemi ActiveTwo electrode system and MATLAB, and co-writing manuscripts.</p>
            <h4>Main Projects:</h4>
            <ol>
                <li>Testing competing models of attention using a combination of computational modeling and simultaneously recorded EEG and psychophysical data.</li>
                <li>Investigating sensory processes underlying the Stroop effect using EEG and MATLAB.</li>
                <li>Testing whether the contribution of sensory gain as enhanced by attention is sufficient to account for improvements in behavior.</li>
            </ol>
        </article>

        <article>
            <h3>Research Assistant – Stuart Anstis Lab</h3>
            <p><strong>Research Assistant</strong> <time datetime="2012-03">Mar. 2012</time> – <time datetime="2012-06">Jun. 2012</time></p>
            <p>Professor: Stuart Anstis, PhD</p>
            <p>Duties: Running participants on various psychophysics experiments and analyzing resulting data in Excel.</p>
        </article>

        <article>
            <h3>Research Assistant – Cognition and Inference Lab</h3>
            <p><strong>Research Assistant</strong> <time datetime="2011-09">Sept. 2011</time> – <time datetime="2012-06">Jun. 2012</time></p>
            <p>Associate Professor: Ed Vul, PhD</p>
            <p>Duties: Running participants on computer-based experiments related to intuitive physics and multiple object tracking.</p>
        </article>
    </section>

    <section class="cv-section">
        <h2>Presentations</h2>
        <ul>
            <li>Martinez S. et al. (2019). Monitoring and Peer Support to Improve Treatment Adherence and Outcomes... (Poster)</li>
            <li>McCleary K. et al. (2019). Listening to the Patient Voice in Sleep Apnea... (Poster)</li>
            <li>Deering S. et al. (2018). A Three-Minute Mobile Version of The Psychomotor Vigilance Task... (Poster)</li>
            <li>Deering S. et al. (2017). SleepHealth Mobile App Study: Bringing The Sleep Lab To You... (Poster)</li>
        </ul>
    </section>

    <section class="cv-section">
        <h2>Peer-Reviewed Publications</h2>
        <ul>
            <li>Itthipuripat S., Deering S., Serences J.T. (2019). When Conflict Cannot be Avoided... <a href="https://doi.org/10.1093/cercor/bhz042">[DOI]</a></li>
            <li>Deering S. et al. (2019). Accelerating Research With Technology... <a href="https://doi.org/10.2196/10974">[DOI]</a></li>
            <li>Itthipuripat S. et al. (2018). Having More Choices Changes How Human Observes Weight Stable Sensory Evidence... <a href="https://www.jneurosci.org/content/38/40/8635">[DOI]</a></li>
        </ul>
    </section>

    <section class="cv-section">
        <h2>Work Experience</h2>
        <article>
            <h3>Research Associate – VA San Diego Healthcare System</h3>
            <p><strong>Jun. 2015 – present</strong><br>La Jolla, CA</p>
            <p>Duties: Participant recruitment/screening for sleep apnea research studies, administering standardized questionnaires, data processing and analysis.</p>
        </article>

        <article>
            <h3>Research Associate / IT – American Sleep Apnea Association</h3>
            <p><strong>Mar. 2016 – Oct. 2019</strong><br>Washington, DC (Remote)</p>
            <p>Duties: Data processing and analysis, technical support.</p>
        </article>
    </section>
</main>