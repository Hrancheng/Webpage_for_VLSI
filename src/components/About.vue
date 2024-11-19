
<template>
<!--This is for About page which has been deleted-->
  <HeaderBar />
  <div class="container">
    <h2>Welcome to Mehdi's VLSI Research Group</h2>
    <div class="profile-container">
      <img src="/assets/Saligane.png" alt="Mehdi" class="profile-image">
      <div class="profile-info">
        <div class="biography">
          
          <p>Welcome to my lab. My research focuses on low-power and energy-efficient IC design, applying Large Language Models in analog layout generation, Biosensors for DNA synthesis and sequencing,  Integrated laser-induced graphene Sensors, open-source EDA, and analog and mixed-signal IC design automation.
            If you are interested in this type of research, please email me a resume and give me an idea of potential topics you may like to work on (mehdi@umich.edu, mehdi_saligane@brown.edu)</p>
        </div>
      </div>
    </div>
    <div class="contributions-contact-container">
      <div class="open-source">
        <h4>Open Source Contributions</h4>
        <ul>
          <li>Dr. Saligane is a Founding member of the OpenROAD Project, an open-source digital flow.</li>
          <li>Dr. Saligane is now leading the nanoGPT Project, aimed at creating LLM single-chip accelerators.</li>
        </ul>
      </div>
      <div class="contact-info">
        <h4>Contact Information</h4>
        <p>Assistant Research Scientist, Intermittent Lecturer<br>
          @ ECE, University of Michigan, Ann Arbor</p>
        <p>Email: <a href="mailto:mehdi@umich.edu">mehdi@umich.edu</a><br>
          Phone: (734) 615-3499<br>
          Office: 2431 EECS, 1301 Beal Ave, Ann Arbor, MI 48109</p>
      </div>
    </div>
  </div>
  <div class="highlighted-research-container">
  <h3>Highlighted Research</h3>
  <div class="research-content">
  <img src="/assets/OpenFASoc.png" alt="Research Graph" class="research-graph">
  <ul class="research-points">
    <li>GLayout is a Cloud-Based Automatic Analog Layout & Netlist Generator with a Reinforcement-Learning Optimizer.</li>
    <li>We demonstrated this framework with automated generation, evaluation, and optimization of a wide range of room-temperature and cryogenic OPAMPs.</li>
    <li>Taped-out in SKY130 – Nov 2023</li>
  </ul>
</div>
  <div class="research-content">
  <img src="/assets/nanoTech.png" alt="Research Graph" class="research-graph">
  <ul class="research-points">
    <li>NIST Nanofab accelerator is an initiative aimed at creating an open-source active substrate for novel nano device fabrication and characterization.</li>
      <li>We submitted a large number of useful active elements ranging from signal generators, CV test structures, PLL, OPAMPs, and more.</li>
      <li>Taped-out in SKY130 - Nov 2023</li>
  </ul>
</div>
  <div class="research-content">
  <img src="/assets/Memristor.png" alt="Research Graph" class="research-graph">
  <ul class="research-points">
    <li>This project focuses on creating a memory array using phase-change devices like memristors.</li>
        <li>Taped-out in SKY130 - Nov 2023</li>
  </ul>
</div>
  <div class="research-content">
  <img src="/assets/FinFET.png" alt="Research Graph" class="research-graph">
  <ul class="research-points">
     <li>This is an array of test devices and signal generators in Intel 16nm FinFET process.</li>
      <li>The goal is to observe a quantum effect in FinFET transistors and pave the way for new circuit design techniques - Jul 2023</li>
  </ul>
</div>
  <div class="research-content">
  <img src="/assets/Cryogenic.png" alt="Research Graph" class="research-graph">
  <ul class="research-points">
    <li>This is an automatically generated switched-capacitor DCDC that maintains its characteristic across a very wide temperature range.</li>
      <li>The chip is fabricated and tested from 400K to 23K - Feb 2023</li>
  </ul>
</div>
  <div class="research-content">
  <img src="/assets/Efficient.png" alt="Research Graph" class="research-graph">
  <ul class="research-points">
     <li>LLM Inference Accelerator SoC with Advanced Power management.</li>
  </ul>
</div>

</div>
<p> A full list of projects please visit the <router-link to="/research">Research</router-link> page.</p>
</template>

<script>
export default {
  name: 'ResearchGroup',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}
.container {
  margin: 0 auto;
  padding-left: 20px; /* Adjust for left edge alignment */
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

.open-source {
  padding-bottom: 50px;
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

.open-source, .contact-info {
  flex: 1 4 200px;
  padding: 0 20px;
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




</style>
