<!-- This is Vue component for main part of Home page-->
<template>
  <div class="container">
    <h2>Welcome to Mehdi's VLSI Research Group</h2>
    <div class="profile-container">
      <img src="/assets/Saligane.png" alt="Mehdi" class="profile-image">
      <div class="profile-info">
        <div class="biography">
          <!-- Modify text below to modify introduction part at the right of the image -->
          <p>Mehdi Saligane is a Research Scientist and Lecturer at the University of Michigan. He is also the Co-founder and CTO of Alea Biosciences.
          His current research interests include low-power and energy-efficient IC design, open-source EDA, and analog and mixed-signal IC design automation. He is the recipient of the Google Cloud Research Innovators Award and the Google Research Faculty Award in 2023 and 2021, respectively.
          Dr. Saligane currently serves as chair of the Analog Working Group, as a member of the Technical Steering Committee at CHIPS Alliance, and as a technical member of SSCS’ open source ecosystem. He is also the co-founder and organizer of the SSCS Code-a-Chip Notebook Competition at ISSCC and the SSCS Chipathon Design Contest.</p>
        </div>
      </div>
    </div>
    <div class="contributions-contact-container">
      <div class="open-source">
        <h4>Open Source Contributions</h4>
        <ul>
          <!-- Modify text below to modify open source contributions part below the image -->
          <li>Dr. Saligane is a Founding member of the  
            <a href="https://github.com/The-OpenROAD-Project" target="_blank">OpenROAD Project</a>, 
            an open-source digital flow.</li>
          <li>Dr. Saligane is now leading the 
            <a href="https://github.com/idea-fasoc/OpenFASOC" target="_blank">OpenFASOC Project</a>
            : Fully Open-Source Autonomous SoC Synthesis using Customizable Cell-Based Synthesizable Analog Circuits.</li>
         <li>
          Dr. Saligane is leading the 
          <a href="https://github.com/ReaLLMASIC" target="_blank">ReaLLMASIC project</a>, 
          an innovative hardware-software co-design initiative.
        </li>
        </ul>
      </div>
      <div class="contact-info">
        <h4>Contact Information</h4>
        <!-- Modify text below to modify contact information part below the image -->
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
  <!-- Modify text below to modify text in highlighted research part -->
  <!-- Modify the link to image below to modify images in highlighted research part -->
      <h4><i>Analog and Custom Circuits Automation</i></h4>
  <div class="research-content">

  <img src="/assets/OpenFASoc.png" alt="Research Graph" class="research-graph">
  <ul class="research-points">
    <li>GLayout is a Cloud-Based Automatic Analog Layout & Netlist Generator with a Reinforcement-Learning Optimizer.</li>
    <li>We demonstrated this framework with automated generation, evaluation, and optimization of a wide range of room-temperature and cryogenic OPAMPs.</li>
    <li>Taped-out in SKY130 – Nov 2023</li>
  </ul>
</div>
   <h4><i>Nanofabrication and Metrology Systems</i></h4>
  <div class="research-content">
 
  <img src="/assets/nanoTech.png" alt="Research Graph" class="research-graph">
  <ul class="research-points">
    <li>NIST Nanofab accelerator is an initiative aimed at creating an open-source active substrate for novel nano device fabrication and characterization.</li>
      <li>We submitted a large number of useful active elements ranging from signal generators, CV test structures, PLL, OPAMPs, and more.</li>
      <li>Taped-out in SKY130 - Nov 2023</li>
  </ul>
</div>
    <h4><i>Cryogenic Design</i></h4>
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
        <h4><i>Efficient & Secure Digital Computation</i></h4>
  <div class="research-content">

  <img src="/assets/Efficient.png" alt="Research Graph" class="research-graph">
  <ul class="research-points">
     <li>LLM Inference Accelerator SoC with Advanced Power management.</li>
  </ul>
</div>

</div>
<p class="instr_to_research"> A full list of projects please visit the <router-link to="/research">Research</router-link> page.</p>
<div class="funding-collaborations">
          <h4>Funding & Collaborations</h4>
          <p>Our research is supported by collaboration with and funding from notable institutions and industry leaders. We are proud to partner with Google Research, Fitbit, National Institute of Standards and Technology (NIST), KLA, and the U.S. Consulate in Japan. We also receive silicon donations from GlobalFoundries and Intel.</p>
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

.open-source {
  padding-bottom: 50px; /* Indent list items */
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

.instr_to_research {
  font-family: 'Quicksand', sans-serif;
  font-size: 1em;
  margin-top: 1em;
  margin-left:20px;
}

.funding-collaborations {
  padding: 20px; /* Adds padding of 20px on all sides */
  margin-top: 20px; /* Adds space above the section */
  border-radius: 5px; /* Rounds the corners of the section */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Subtle shadow for depth */
  font-size: 0.95em; /* Slightly smaller font size for aesthetic */
}

</style>
