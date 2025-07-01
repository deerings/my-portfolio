<script>
    import { onMount } from 'svelte';
    
    export let data;
  
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
    <title>{data.title}</title>
  </svelte:head>
  
  <header class="cv-header">
      <h1>Curriculum Vitae</h1>
  
      <p><strong>Sean Deering</strong><br>
      1106 2nd St. #273<br>
      Encinitas, CA 92024<br>
      <a href="mailto:deering.sean@gmail.com">deering.sean@gmail.com</a></p>
  </header>
  
  <main>
      <section class="cv-section">
          <h2>Education</h2>
          <article>
              <h3>Halıcıoğlu Data Science Institute - University of California, San Diego</h3>
              <p>Master of Data Science - <time datetime="2025">2025</time></p>
              <p>Areas of Concentration: Statistics, Machine Learning, Data Mining, Big Data Analytics, Data Visualization</p>
              <h3>University of California, San Diego</h3>
              <p>Bachelor of Science, Psychology (Department honors with distinction) - <time datetime="2012">2012</time></p>
              <p>Areas of Concentration: Cognitive Psychology & Cognitive Neuropsychology</p>
              <p>Honors Thesis: “Are regular players of first-person shooter video games better at multiple object tracking?”</p>
              <p>Advisor: Ed Vul, PhD</p>
          </article>
      </section>
  
      <section class="cv-section">
          <h2>Awards and Honors</h2>
              <p>Provost Honors (Winter & Spring quarters) <time datetime="2012">2012</time></p>
              <p>Psi Chi Distinguished Member <time datetime="2012">2012</time></p>
              <p>Phi Sigma Theta Honor Society <time datetime="2011-2012">2011 - 2012</time></p>
              <p>President’s Permanent Honor Roll <time datetime="2009">2009</time></p>
              <p>Phi Theta Kappa Honor Society <time datetime="2008-2009">2008 - 2009</time></p>
              <p>Dean’s List (All quarters) <time datetime="2007-2009">2007 - 2009</time></p>
      </section>
  
      <section class="cv-section">
          <h2>Volunteer Research Experience</h2>
  
          <article>
              <h3>Dept. of Psychology – University of California, San Diego</h3>
              <p><strong>Research Assistant – Perception and Cognition Lab</strong> <time datetime="2013-03">Mar. 2013</time> – <time datetime="2017-06">Jun. 2017</time></p>
              <p>Professor: John Serences, PhD</p>
          </article>
  
          <article>
              <p><strong>Research Assistant – Stuart Anstis Lab</strong> <time datetime="2012-03">Mar. 2012</time> – <time datetime="2012-06">Jun. 2012</time></p>
              <p>Professor: Stuart Anstis, PhD</p>
          </article>
  
          <article>
              <p><strong>Research Assistant – Cognition and Inference Lab</strong> <time datetime="2011-09">Sept. 2011</time> – <time datetime="2012-06">Jun. 2012</time></p>
              <p>Associate Professor: Ed Vul, PhD</p>
          </article>
      </section>
  
      <section class="cv-section">
        <h2>Presentations</h2>
          <p>Scott J.V., Carruthers A., Beauchene C.E., Markwald R.R., LaGoy A.D., Kubala A.G., <b>Deering S.</b>, Roma P.G., Crane M.K. <b>Improving Schedule-Driven Fatigue Models with Wearables and Machine Learning.</b> Military Health Services Research Symposium (Breakout Session, 2025).</p>  
          <p><b>Deering S.</b>, Roma P.G., LaGoy A.D., Kubala A.G., Uriarte J.E., Russell D.W., Markwald R.R. <b>Effect of Sleep During Reduced Tempo Transition Periods On Readiness and Health During High-Stress Naval Operations.</b> Associated Professional Sleep Societies (Poster, 2025).</p>  
          <p>Uriarte J.E., LaGoy A.D., Jameson J.T., Roma P.G., Kubala A.G., <b>Deering S.</b>, Cuellar J., Russell D.W., Markwald R.R. <b>Sleep Patterns, Lifestyle Behaviors, and Sleep-Related Daytime Impairments in U.S. Navy Shipboard Environments.</b> Associated Professional Sleep Societies (Poster, 2025).</p>
          <p><b>Deering S.</b>, Kubala A.G., Jameson J.T., Roma P.G., Russell D.W., Markwald R.R., LaGoy A.D. <b>Are you ready? An examination of wearable-estimated readiness and self-reported impairment in shipboard settings.</b> Naval Health Research Center (Poster, 2024).</p>
          <p><b>Deering S.</b>, Kubala A.G., Jameson J.T., Roma P.G., Russell D.W., Markwald R.R., LaGoy A.D. <b>Are you ready? An examination of wearable-estimated readiness and self-reported impairment in shipboard settings.</b> Military Health Services Research Symposium (Poster, 2024).</p>
          <p>Martinez S., Sullivan J., Pasquale C., Amdur A., Clark B., Walsh L., <b>Deering S.</b>, Malanga E., Stepnowsky C.J. <b>Monitoring and Peer Support to Improve Treatment Adherence And Outcomes In Patients With Overlap Chronic Obstructive Pulmonary Disease And Sleep Apnea Via A Large PCORnet Collaboration (O2VERLAP).</b> Washington Marriott Wardman Park, Washington, DC (Poster, 2019).</p>
          <p>McCleary K., Amdur J., Amdur A., <b>Deering S.</b>, Stepnowsky C.J. <b>Listening to the Patient Voice in Sleep Apnea: Daytime Functioning and Experience with Therapy.</b> Henry B. Gonzalez Convention Center. San Antonio, Texas. (Poster, 2019).</p>
          <p><b>Deering S.</b>, Amdur A., Borelli J., Headapohl W., Stepnowsky C.J. <b>A Three-Minute Mobile Version of The Psychomotor Vigilance Task.</b> Baltimore Convention Center, Baltimore, MD (Poster, 2018).</p>
          <p><b>Deering S.</b>, Amdur A., Borelli J., Headapohl W., Drobnich D., Stepnowsky C.J. <b>SleepHealth Mobile App Study: Bringing The Sleep Lab To You.</b> Hynes Convention Center, Boston, MA (Poster, 2017).</p>
          <p><b>Deering S.</b>, Zamora T., Smales C., Sarmiento K., Stepnowsky C.J. <b>Significant Changes In Sleep Architecture In OSA Patients Following Short-term Treatment With Positive Airway Pressure.</b> Colorado Convention Center, Denver, CO (Poster, 2016).</p>
          <p><b>Deering S.</b>, Zamora T., Liu L., Sarmiento K., Hamilton J., Stepnowsky C.J. <b>PAP Adherence Is Associated With Improved Vigilance In Moderate To Severe OSA Patients.</b> Colorado Convention Center, Denver, CO (Poster, 2016).</p>
          <p>Zamora T., <b>Deering S.</b>, Sarmiento K., Stepnowsky C.J. <b>Obstructive Sleep Apnea Illness Perception Relative To Other Common Chronic Conditions.</b> Colorado Convention Center, Denver, CO (Poster, 2016).</p>
          <p>Itthipuripat S., Ester E.F., <b>Deering S.</b>, Serences J.T. <b>When Simplicity Surpasses Complexity: Simple Sensory Gain Outperforms Efficient Selection Mechanisms In Predicting Attention-Related Behavioral Improvements.</b> Salk Institute, La Jolla, CA (Talk, 2014).</p>
          <p>Itthipuripat S., Ester E.F., <b>Deering S.</b>, Serences J.T. <b>Focal Attention Improves Perceptual Decision Making By Enhancing Multiplicative Response Gain Of Cortical Activity In Humans.</b> Vision Sciences Society, St. Pete Beach, FL (Poster, 2014).</p>
          <p>Itthipuripat S., Ester E.F., <b>Deering S.</b>, Serences J.T. <b>Attentional Enhancement Via Sensory Gain In Human Cortex.</b> Department of Cognitive Science Talk, UCSD, La Jolla, CA (Talk, 2014).</p>
          <p><b>Deering S.</b> & Vul E. <b>Are Regular Players of First-person Shooter Video Games Better at Multiple Object Tracking?</b> UCSD Annual Psychology Honors Poster Session. La Jolla, CA (Poster, 2012).</p>
          <p><b>Deering S.</b> & Vul E. <b>Enhanced Multiple Object Tracking Abilities in Regular Players of First-person Shooter Video Games.</b> Annual California Cognitive Science Conference, Berkeley, CA (Poster, 2012).</p>
      </section>
      

      <section class="cv-section">
        <h2>Peer-Reviewed Publications</h2>
            <p>LaGoy A.D., Kubala A.G., <b>Deering S.</b>, Germain A., Markwald R.R. (2023). <b>Dawn of a New Dawn: Advances in Sleep Health to Optimize Performance.</b> Sleep Med Clin. <a href="https://doi.org/10.1016/j.jsmc.2023.05.010" target="_blank">[DOI]</a></p>
            <p>Martinez S., Sullivan J., Pasquale C., Clark B., Malanga E., <b>Deering S.</b>, Liu L., Stepnowsky C.J. (2022). <b>Effect of Two Interventional Strategies on Improving Continuous Positive Airway Pressure Adherence in Existing COPD and Obstructive Sleep Apnea Patients: The O2VERLAP Study.</b> Chronic Obstr Pulm Dis. <a href="https://doi.org/10.15326/jcopdf.2022.0293" target="_blank">[DOI]</a></p>
            <p>Stepnowsky C., Malanga E., Martinez S., Sullivan J., <b>Deering S.</b>, Pasquale C., Liu L. (2021). <b>Comparing Two Methods to Improve CPAP Use among Patients with COPD and Obstructive Sleep Apnea — The O2VERLAP Study [Internet].</b> Patient-Centered Outcomes Research Institute (PCORI). <a href="https://doi.org/10.25302/09.2021.PPRND.150731666" target="_blank">[DOI]</a></p>
            <p><b>Deering S.</b>, Pratap A., Suver C., Borelli J., Amdur A., Headapohl W., Stepnowsky C.J. (2020). <b>Real-world longitudinal data collected from the SleepHealth mobile app study.</b> Nature Scientific Data. <a href="https://doi.org/10.1038/s41597-020-00753-2" target="_blank">[DOI]</a></p>
            <p>Itthipuripat S.*, <b>Deering S.</b>*, Serences J.T. (2019). <b>When Conflict Cannot be Avoided: Relative Contributions of Early Selection and Frontal Executive Control In Mitigating Stroop Conflict.</b> Cerebral Cortex. <a href="https://doi.org/10.1093/cercor/bhz042" target="_blank">[DOI]</a></p>
            <p><b>Deering S.</b>, Grade M.M., Uppal J.K., Foschini L., Juusola J., Amdur A.M., Stepnowsky C.J. (2019). <b>Accelerating Research With Technology: Rapid Recruitment For A Large-Scale Web-Based Sleep Study.</b> JMIR Research Protocols. <a href="https://doi.org/10.2196/10974" target="_blank">[DOI]</a></p>
            <p>Itthipuripat S. Cha K., <b>Deering S.</b>, Salazar A.M., Serences J.T. (2018). <b>Having More Choices Changes How Human Observes Weight Stable Sensory Evidence.</b> Journal of Neuroscience. <a href="https://www.jneurosci.org/content/38/40/8635" target="_blank">[DOI]</a></p>
            <p><b>Deering S.</b>, Liu L., Zamora T., Hamilton J., Stepnowsky C.J. (2017). <b>CPAP Adherence Is Associated With Attentional Improvements In A Group of Primarily Male Patients With Moderate To Severe OSA.</b> Journal of Clinical Sleep Medicine. <a href="https://doi.org/10.5664/jcsm.6838" target="_blank">[DOI]</a></p>
            <p>Itthipuripat S., Ester E.F., <b>Deering S.</b>, Serences J.T. (2014). <b>Sensory Gain Outperforms Efficient Read-out Mechanisms In Predicting Attention Related Improvements In Behavior.</b> Journal of Neuroscience. <a href="https://doi.org/10.1523/JNEUROSCI.2277-14.2014" target="_blank">[DOI]</a></p>
            <p>* = Denotes equal contributions.</p>
    </section>
    
      <section class="cv-section">
          <h2>Work Experience</h2>
          <article>
            <h3>Research Associate – Sleep, Tactical Efficiency, and Endurance Laboratory - Naval Health Research Center, Warfighter Performance Department (Contractor)</h3>
            <p><strong><time datetime="2021-12">Dec. 2021</time> – <span class="present">present</span></strong><br>Point Loma, CA</p>
        </article>

          <article>
              <h3>Research Associate – Sleep Apnea Program - Health Services Research & Development - VA San Diego Healthcare System</h3>
              <p><strong><time datetime="2015-06">Jun. 2015</time> – <time datetime="2021-11">Nov. 2021</time></strong><br>La Jolla, CA</p>
          </article>
  
          <article>
              <h3>Research Associate / IT Specialist – American Sleep Apnea Association (Contractor)</h3>
              <p><strong><time datetime="2016-03">Mar. 2016</time> – <time datetime="2019-10">Oct. 2019</time></strong><br>Washington, DC (Remote)</p>
          </article>
      </section>
  </main>