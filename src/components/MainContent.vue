<!-- This is Vue component for main part of Home page-->
<template>
  <div class="container">
    <h2>Welcome to Mehdi's VLSI Research Group</h2>
    <div class="profile-container">
      <div class="profile-info">
        <div class="biography">
          <!-- Modify text below to modify introduction part at the right of the image -->
          <p>Welcome to my lab. My research focuses on low-power and energy-efficient IC design, applying Large Language Models in analog layout generation, Biosensors for DNA synthesis and sequencing,  Integrated laser-induced graphene Sensors, open-source EDA, and analog and mixed-signal IC design automation.
            If you are interested in this type of research, please email me a resume and give me an idea of potential topics you may like to work on (mehdi@umich.edu, mehdi_saligane@brown.edu)</p>
        </div>
      </div>
    </div>
    <div class="contributions-contact-container">
  <div class="open-source">
    <h4>Example of recent work</h4>
    <ul>
      <li>
        <div class="work-item">
          <img src="/assets/GLayout.png" alt="GLayout Framework Graph" class="work-image" />
          <div class="work-text">
            <p><strong>Human Language to Analog Layout Using GLayout</strong></p>
            <p>
              The GLayout framework uses a Large Language Model (LLM) to translate analog layout into an expressive, technology-independent, compact text representation called StrictSyntax, allowing the LLM to understand analog layout through fine-tuning and in-context learning. The open source GLayout and evaluation set provide a starting point for future development of LLM-based analog layout automation.
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="work-item">
          <img src="/assets/GPIO.png" alt="OpenFASOC Project Graph" class="work-image" />
          <div class="work-text">
            <p><strong>Open se cura: an auditable and transparent hardware root-of-trust in 16 nm</strong></p>
            <p>
              Open Se Cura’s security subsystem, OpenTitan, was implemented on 16-nm technology using the OpenFASOC framework and OpenROAD tools, achieving reliable performance across a 0.4–1V supply and 1–350 MHz frequency range. This advancement in open-source platforms illustrates their growing impact in aligning secure AI hardware and software, showcasing the open-source community's potential to transform secure, scalable computing systems.
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="work-item">
          <img src="/assets/of.png" alt="ReaLLMASIC Project Graph" class="work-image" />
          <div class="work-text">
            <p><strong>Laser-Induced Graphene Sensors With Open-Source Silicon</strong></p>
            <p>
              This study presents a multifunctional wearable sensing system that combines flexible laser-induced graphene (LIG) sensors with an open-source analog front-end (AFE) chip, enabling temperature, humidity, and strain detection. Characterizations demonstrate the system's potential for affordable and flexible monitoring of body temperature, respiration, sweat, and gestures in personal healthcare applications.
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="work-item">
          <img src="/assets/Mchip_new.png" alt="ReaLLMASIC Project Graph" class="work-image" />
          <div class="work-text">
            <p><strong>Circuits for Quantum With Open Source Silicon</strong></p>
            <p>
              Our collaborative work in cryogenic silicon technology has yielded key advancements, including 4-K cryogenic models available on the NIST data repository, supporting quantum circuit research at extremely low temperatures. Using open-source tools like OpenFASOC, we are facilitating custom circuit generation and enabling broader access to cryogenic design resources, reducing barriers and costs in this field.
            </p>
          </div>
        </div>
      </li>
      <li>
        <div class="work-item">
          <img src="/assets/sscs.png" alt="ReaLLMASIC Project Graph" class="work-image" />
          <div class="work-text">
            <p><strong>SSCS PICO Chronicles: News From the Open Source Community</strong></p>
            <p>
              The IEEE Solid-State Circuits Society (SSCS) is advancing open-source chip design through its "Code-a-Chip" Travel Grant Awards program, which provides aspiring chip designers with collaborative learning opportunities and exposure to the entire chip design process. Now in its fourth round, the program enables winners to attend the VLSI Symposium 2024, fostering a global exchange of knowledge and best practices in IC design and open-source ecosystems.
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>

<div class="contact-section">
      <h4>Contact Information</h4>
      <p>
        Phone: (734) 615-3499<br />
        Office: 2431 EECS, 1301 Beal Ave, Ann Arbor, MI 48109
      </p>
      <div class="networks">
        <a href="mailto:mehdi@umich.edu" target="_blank">
          <img src="/assets/email.jpeg" alt="Email Icon" />
        </a>
        <a href="https://scholar.google.com/citations?user=u1UAQ2QAAAAJ&hl=en" target="_blank">
          <img src="/assets/gs.png" alt="Google Scholar Icon" />
        </a>
        <a href="https://github.com/msaligane" target="_blank">
          <img src="/assets/github.png" alt="GitHub Icon" />
        </a>
        <a href="https://www.linkedin.com/in/mehdi-saligane/" target="_blank">
          <img src="/assets/linkedin.png" alt="LinkedIn Icon" />
        </a>
        <a href="https://twitter.com/example" target="_blank">
          <img src="/assets/twitter.png" alt="Twitter Icon" />
        </a>
      </div>
      <p>Feel free to tweet me or drop a line via email.</p>
    </div>
  </div>
  <div class="funding-collaborations">
    <h4>Funding & Collaborations</h4>
    <p>
      Our research is supported by collaboration with and funding from notable institutions and industry leaders. We are proud to partner with Google Research, Fitbit, National Institute of Standards and Technology (NIST), KLA, and the U.S. Consulate in Japan. We also receive silicon donations from GlobalFoundries and Intel.
    </p>
    <div class="sponsor-logos">
      <img src="/assets/NIST.png" alt="Google Research Logo" />
      <img src="/assets/ONR.png" alt="Fitbit Logo" />
      <img src="/assets/CA.png" alt="NIST Logo" />
      <img src="/assets/OpenRoad.png" alt="KLA Logo" />
      <img src="/assets/google.png" alt="U.S. Consulate in Japan Logo" />
    </div>
  </div>
  
  
</template>

<script>
export default {
  name: 'HomePageContent',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}
.container {
  margin: 0 auto;
  padding-left: 20px;
  text-align: left; /* Align text to the left */
}

h1 {
  font-family: 'Quicksand', sans-serif;
  font-size: 2.5em; /* Enlarged title font size */
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.profile {
  font-family: 'Quicksand', sans-serif;
  display: flex; /* Use flexbox to arrange image and text side by side */
  align-items: center; /* Align items vertically */
  margin-bottom: 1em;
  padding: 1em;
}

.profile-text {
  padding-left: 20px; /* Add some space between the image and the text */
}

.profile-image {
  width: 300px; /* Adjust width for square image */
  height: 300px; /* Adjust height to match width for square aspect */
  border-radius: 20px; /* Rounded corners */
  margin-bottom: 1em; /* Space between image and text */
  object-fit: cover; /* Ensure the image covers the space without distortion */
  padding:10px;
}

.profile-text p {
  font-family: 'Quicksand', sans-serif;
  margin: 0;
  line-height: 1.5;
  max-width: 400px;
}

.bio-contact-container {
  display: flex; /* Arrange children side by side */
  align-items: flex-start; /* Align items at the top */
  margin-bottom: 1em;
  padding: 1em;
}

.biography {
  flex: 1; /* Each child takes equal width */
  padding-right: 20px; /* Add some padding for spacing */
  padding-top: 50px;

}

.contact-info {
  flex: 1; /* Each child takes equal width */
  padding: 0 20px; /* Add some padding for spacing */
}


a {
  color: #0000EE;
}

h2, h4 {
  font-family: 'Quicksand', sans-serif;
  font-size: 1.5em;
  margin-top: 1em;
}

p, li {
    font-family: 'Quicksand', sans-serif;
    line-height: 1.5;
    margin-top: 0.5em;
}

ul {
  list-style-type: disc; /* Bullet points for list items */
  padding-left: 20px; /* Indent list items */
}

.profile-container {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1em;
}

.profile-info {
  padding-left: 20px;
}

.contributions-contact-container {
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
}
.open-source ul {
  list-style-type: none; /* Remove default list styling */
  padding: 0; /* Remove default padding */
  margin: 0; /* Remove default margin */
}

.open-source li {
  margin-bottom: 20px; /* Add space between list items */
  margin-left: 20px;
  margin-right: 50px;
}

.work-item {
  display: flex; /* Align image and text horizontally */
  align-items: center; /* Center text vertically with the image */
  gap: 15px; /* Add consistent spacing between image and text */
}

.work-image {
  width: 300px; /* Set a fixed width for images */
  height: auto; /* Maintain aspect ratio */
  border-radius: 5px; /* Optional: rounded corners */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: subtle shadow for images */
}

.work-text {
  flex: 1; /* Allow the text to take up remaining space */
  display: flex; /* Use flexbox for vertical alignment within the text container */
  flex-direction: column; /* Ensure paragraphs are stacked */
  justify-content: center; /* Center the text vertically */
}

.work-text p {
  margin: 0 0 10px; /* Add some spacing below paragraphs */
  line-height: 1.6; /* Improve readability */
}


.highlighted-research-container {
  margin-top: 40px;
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom:40px;
}


.highlighted-research-container h3 {
  font-family: 'Quicksand', sans-serif;
  font-size: 1.5em;
  margin-bottom: 0.5em;
}

.highlighted-research-container p {
  font-family: 'Quicksand', sans-serif;
  line-height: 1.5;
  flex: 1; /* Take up remaining space */
  margin: 0; /* Adjust as necessary */
}

.research-content {
  display: flex;
  flex-direction: row; /* Stack items horizontally */
  align-items: center; /* Align items to the center of the flex container */
  margin-top: 20px;
}

.research-graph {
  width: 16%; /* Full width */
  height: auto; /* Maintain aspect ratio */
  margin-right: 20px; /* Space between the image and the bullet points */
}

.research-points {
  list-style-type: disc; /* Bullet points for list items */
  padding-left: 20px; /* Indent list items */
  width: 100%; /* Full width */
}

.instr_to_research {
  font-family: 'Quicksand', sans-serif;
  font-size: 1em;
  margin-top: 1em;
  margin-left:20px;
}

.funding-collaborations {
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 0.95em;
}

.sponsor-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
}

.sponsor-logos img {
  max-width: 150px;
  max-height: 100px;
  margin: 10px;
  object-fit: contain;
}






.networks img {
  width: 40px; /* Set icon width */
  height: 40px; /* Set icon height */
  object-fit: contain; /* Ensure images are properly fitted */
  border-radius: 50%; /* Circular icons */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); /* Subtle shadow for icons */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth animation for hover */
}

.networks img:hover {
  transform: scale(1.1); /* Slight zoom effect on hover */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); /* More prominent shadow on hover */
}

.contact-section a {
  text-decoration: none; /* Remove underline from links */
  color: #007BFF; /* Default link color */
}

.contact-section a:hover {
  text-decoration: underline; /* Underline on hover */
}

</style>
