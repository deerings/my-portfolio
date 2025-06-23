<script>
    import { onMount } from 'svelte';
  
    onMount(() => {
      let root = document.documentElement;
      
      // Check if localStorage is available before using it
      if (typeof localStorage !== 'undefined') {
        let colorScheme = localStorage.colorScheme ?? 'light dark';
        root.style.setProperty('color-scheme', colorScheme);
      }
  
      // Ensure querySelectorAll is available
      if (typeof document !== 'undefined') {
          const projects = Array.from(document.querySelectorAll('.projects > article')).map((a) => ({
            title: a.querySelector('h2')?.textContent, // Use optional chaining
            image: a.querySelector('img')?.getAttribute('src'), // Use optional chaining
            description: a.querySelector('p')?.textContent, // Use optional chaining
          }));
        
          console.log(projects); /* Log the extracted project data */
      }
    });
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
              <p>MS, Data Science <time datetime="2025">2025</time></p>
              <p>Areas of Concentration: Statistics, Machine Learning, Data Mining, Big Data Analytics, Data Visualization</p>
              <br>
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
        <ul class="presentation-list">
          <li>Scott J.V., Carruthers A., Beauchene C.E., Markwald R.R., LaGoy A.D., Kubala A.G., Deering S., Roma P.G., Crane M.K. Improving Schedule-Driven Fatigue Models with Wearables and Machine Learning. Military Health Services Research Symposium (Breakout Session, 2025).</li>  
          <li>Deering S., Roma P.G., LaGoy A.D., Kubala A.G., Uriarte J.E., Russell D.W., Markwald R.R. Effect of Sleep During Reduced Tempo Transition Periods On Readiness and Health During High-Stress Naval Operations. Associated Professional Sleep Societies (Poster, 2025). </li>  
          <li>Uriarte J.E., LaGoy A.D., Jameson J.T., Roma P.G., Kubala A.G., Deering S., Cuellar J., Russell D.W., Markwald R.R. Sleep Patterns, Lifestyle Behaviors, and Sleep-Related Daytime Impairments in U.S. Navy Shipboard Environments. Associated Professional Sleep Societies (Poster, 2025). </li>
          <li>Deering S., Kubala A.G., Jameson J.T., Roma P.G., Russell D.W., Markwald R.R., LaGoy A.D. Are you ready? An examination of wearable-estimated readiness and self-reported impairment in shipboard settings. Naval Health Research Center (Poster, 2024).</li>
          <li>Deering S., Kubala A.G., Jameson J.T., Roma P.G., Russell D.W., Markwald R.R., LaGoy A.D. Are you ready? An examination of wearable-estimated readiness and self-reported impairment in shipboard settings. Military Health Services Research Symposium (Poster, 2024).</li>
          <li>Martinez S., Sullivan J., Pasquale C., Amdur A., Clark B., Walsh L., Deering S., Malanga E., Stepnowsky C.J. Monitoring and Peer Support to Improve Treatment Adherence And Outcomes In Patients With Overlap Chronic Obstructive Pulmonary Disease And Sleep Apnea Via A Large PCORnet Collaboration (O2VERLAP). Washington Marriott Wardman Park, Washington, DC (Poster, 2019).</li>
          <li>McCleary K., Amdur J., Amdur A., Deering S., Stepnowsky C.J. Listening to the Patient Voice in Sleep Apnea: Daytime Functioning and Experience with Therapy. Henry B. Gonzalez Convention Center. San Antonio, Texas. (Poster, 2019).</li>
          <li>Deering S., Amdur A., Borelli J., Headapohl W., Stepnowsky C.J. A Three-Minute Mobile Version of The Psychomotor Vigilance Task. Baltimore Convention Center, Baltimore, MD (Poster, 2018).</li>
          <li>Deering S., Amdur A., Borelli J., Headapohl W., Drobnich D., Stepnowsky C.J. SleepHealth Mobile App Study: Bringing The Sleep Lab To You. Hynes Convention Center, Boston, MA (Poster, 2017).</li>
          <li>Deering S., Zamora T., Smales C., Sarmiento K., Stepnowsky C.J. Significant Changes In Sleep Architecture In OSA Patients Following Short-term Treatment With Positive Airway Pressure. Colorado Convention Center, Denver, CO (Poster, 2016).</li>
          <li>Deering S., Zamora T., Liu L., Sarmiento K., Hamilton J., Stepnowsky C.J. PAP Adherence Is Associated With Improved Vigilance In Moderate To Severe OSA Patients. Colorado Convention Center, Denver, CO (Poster, 2016).</li>
          <li>Zamora T., Deering S., Sarmiento K., Stepnowsky C.J. Obstructive Sleep Apnea Illness Perception Relative To Other Common Chronic Conditions. Colorado Convention Center, Denver, CO (Poster, 2016).</li>
          <li>Itthipuripat S., Ester E.F., Deering S., Serences J.T. When Simplicity Surpasses Complexity: Simple Sensory Gain Outperforms Efficient Selection Mechanisms In Predicting Attention-Related Behavioral Improvements. Salk Institute, La Jolla, CA (Talk, 2014).</li>
          <li>Itthipuripat S., Ester E.F., Deering S., Serences J.T. Focal Attention Improves Perceptual Decision Making By Enhancing Multiplicative Response Gain Of Cortical Activity In Humans. Vision Sciences Society, St. Pete Beach, FL (Poster, 2014).</li>
          <li>Itthipuripat S., Ester E.F., Deering S., Serences J.T. Attentional Enhancement Via Sensory Gain In Human Cortex. Department of Cognitive Science Talk, UCSD, La Jolla, CA (Talk, 2014).</li>
          <li>Deering S. & Vul E. Are Regular Players of First-person Shooter Video Games Better at Multiple Object Tracking? UCSD Annual Psychology Honors Poster Session. La Jolla, CA (Poster, 2012).</li>
          <li>Deering S. & Vul E. Enhanced Multiple Object Tracking Abilities in Regular Players of First-person Shooter Video Games. Annual California Cognitive Science Conference, Berkeley, CA (Poster, 2012).</li>
        </ul>
      </section>
      

      <section class="cv-section">
        <h2>Peer-Reviewed Publications</h2>
        <ul class="peer-reviewed-list">
            <li>LaGoy AD, Kubala AG, Deering S, Germain A, Markwald RR (2023). Dawn of a New Dawn: Advances in Sleep Health to Optimize Performance. Sleep Med Clin. <a href="https://doi.org/10.1016/j.jsmc.2023.05.010">[DOI]</a></li>
            <li>Martinez S, Sullivan J, Pasquale C, Clark B, Malanga E, Deering S, Liu L, Stepnowsky CJ. (2022). Effect of Two Interventional Strategies on Improving Continuous Positive Airway Pressure Adherence in Existing COPD and Obstructive Sleep Apnea Patients: The O2VERLAP Study. Chronic Obstr Pulm Dis. <a href="https://doi.org/10.15326/jcopdf.2022.0293">[DOI]</a></li>
            <li>Stepnowsky C, Malanga E, Martinez S, Sullivan J, Deering S, Pasquale C, Liu L. (2021). Comparing Two Methods to Improve CPAP Use among Patients with COPD and Obstructive Sleep Apnea — The O2VERLAP Study [Internet]. Patient-Centered Outcomes Research Institute (PCORI). <a href="https://doi.org/10.25302/09.2021.PPRND.150731666">[DOI]</a></li>
            <li>Deering S., Pratap A., Suver C., Borelli J., Amdur A., Headapohl W., Stepnowsky C.J. (2020). Real-world longitudinal data collected from the SleepHealth mobile app study. Nature Scientific Data. <a href="https://doi.org/10.1038/s41597-020-00753-2">[DOI]</a></li>
            <li>Itthipuripat S.*, Deering S.*, Serences J.T. (2019). When Conflict Cannot be Avoided: Relative Contributions of Early Selection and Frontal Executive Control In Mitigating Stroop Conflict. Cerebral Cortex. <a href="https://doi.org/10.1093/cercor/bhz042">[DOI]</a></li>
            <li>Deering S., Grade M.M., Uppal J.K., Foschini L, Juusola J., Amdur A.M., Stepnowsky C.J. (2019). Accelerating Research With Technology: Rapid Recruitment For A Large-Scale Web-Based Sleep Study. JMIR Research Protocols. <a href="https://doi.org/10.2196/10974">[DOI]</a></li>
            <li>Itthipuripat S. Cha K., Deering S., Salazar A.M., Serences J.T. (2018). Having More Choices Changes How Human Observes Weight Stable Sensory Evidence. Journal of Neuroscience. <a href="https://www.jneurosci.org/content/38/40/8635">[DOI]</a></li>
            <li>Deering S., Liu L., Zamora T., Hamilton J., Stepnowsky C.J. (2017). CPAP Adherence Is Associated With Attentional Improvements In A Group of Primarily Male Patients With Moderate To Severe OSA. Journal of Clinical Sleep Medicine. <a href="https://doi.org/10.5664/jcsm.6838">[DOI]</a></li>
            <li>Itthipuripat S., Ester E.F., Deering S., Serences J.T. (2014). Sensory Gain Outperforms Efficient Read-out Mechanisms In Predicting Attention Related Improvements In Behavior. Journal of Neuroscience. <a href="https://doi.org/10.1523/JNEUROSCI.2277-14.2014">[DOI]</a></li>
        </ul>
    </section>
    
      <section class="cv-section">
          <h2>Work Experience</h2>
          <article>
            <h3>Research Associate – Naval Health Research Center, Warfighter Performance (Leidos Contractor)</h3>
            <p><strong>Dec. 2021 – present</strong><br>Point Loma, CA</p>
            <p>Duties: Operational Research, data processing and cleaning. Support with technical projects. Co-writing scientific manuscripts</p>
        </article>

          <article>
              <h3>Research Associate – VA San Diego Healthcare System</h3>
              <p><strong>Jun. 2015 – Nov. 2021</strong><br>La Jolla, CA</p>
              <p>Duties: Participant recruitment/screening for sleep apnea research studies, administering standardized questionnaires, data processing and analysis.</p>
          </article>
  
          <article>
              <h3>Research Associate / IT – American Sleep Apnea Association</h3>
              <p><strong>Mar. 2016 – Oct. 2019</strong><br>Washington, DC (Remote)</p>
              <p>Duties: Data processing and analysis, technical support.</p>
          </article>
      </section>
  </main>