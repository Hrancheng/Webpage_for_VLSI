<template>
<HeaderBar />
  <div class="container">
    <h2>Welcome to Mehdi's VLSI Research Group</h2>
    <div class="profile">
      <img src="/assets/Saligane.png" alt="Mehdi" class="profile-image">
      <div class="profile-text">
        <p>Welcome to my lab. My research focuses on open-source silicon development, mixed-signal computer-aided design, small form-factor microsystems, and cross-disciplinary application of integrated circuit design.</p>
        <p>If you are interested in this type of research, please email me a resume and give me an idea of potential topics you may like to work on <a href="mailto:mehdi@umich.edu">mehdi@umich.edu</a>.</p>
      </div>
    </div>
    <h2>Biography</h2>
    <p>Mehdi Saligane is a Research Scientist and Lecturer at the University of Michigan. He is also the Co-founder and CTO of Alea Biosciences.

His current research interests include low-power and energy-efficient IC design, open-source EDA, and analog and mixed-signal IC design automation. He is the recipient of the Google Cloud Research Innovators Award and the Google Research Faculty Award in 2023 and 2021, respectively.

Dr. Saligane currently serves as chair of the Analog Working Group, as a member of the Technical Steering Committee at CHIPS Alliance, and as a technical member of SSCS’ open source ecosystem. He is also the co-founder and organizer of the SSCS Code-a-Chip Notebook Competition at ISSCC and the SSCS Chipathon Design Contest.</p>
    <h4>Contact Information</h4>
    <p>Assistant Research Scientist, Intermittent Lecturer<br>
       @ ECE, University of Michigan, Ann Arbor</p>
    <p>Email: <a href="mailto:mehdi@umich.edu">mehdi@umich.edu</a><br>
       Phone: (734) 615-3499<br>
       Office: 2431 EECS, 1301 Beal Ave, Ann Arbor, MI 48109</p>
    <h4>Open Source Contributions</h4>
    <ul class="open-source">
      <li>Dr. Saligane is a Founding member of the OpenROAD Project, an open-source digital flow.</li>
      <li>Dr. Saligane is now leading the nanoGPT Project, aimed at creating LLM single-chip accelerators.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ResearchGroup',
  // You can add your Vue instance properties and methods here
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
  display: block; /* Stack image and text vertically */
  margin-bottom: 1em;
  padding: 1em;
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
}

.open-source {
  padding-bottom: 50px; /* Indent list items */
}

a {
  color: #0000EE; /* Typical email link color */
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
</style>
