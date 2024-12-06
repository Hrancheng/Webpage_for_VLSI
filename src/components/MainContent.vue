<!-- This is Vue component for main part of Home page-->
<template>
  <div class="container">
    <div class="animation-section">
      <transition name="fade" mode="out-in">
        <img
          :src="images[currentImageIndex]"
          :key="images[currentImageIndex]"
          class="animated-image"
          alt="Research Image"
        />
      </transition>
    </div>
    <div class="profile-container">
      <div class="profile-info">
        <div class="biography">
          <!-- Modify text below to modify introduction part at the right of the image -->
          <div class="bio-content">
        <img src="/assets/Saligane.png" alt="Profile Picture" class="profile-picture" />
        <p>
          Welcome to my lab. I'm a tenure-track professor at Brown University. My research focuses on low-power and energy-efficient IC design, applying AI in analog layout generation, Biosensors for DNA synthesis and sequencing, Integrated laser-induced graphene Sensors, open-source EDA, and analog and mixed-signal IC design automation.
          If you are interested in this type of research, please email me a resume and give me an idea of potential topics you may like to work on (mehdi@umich.edu, mehdi_saligane@brown.edu).
        </p>
      </div>
        </div>
      </div>
    </div>
    <div class="contributions-contact-container">

      <div class="news-section">
  <h4>News & Publications</h4>
  <ul>
    <li>
      <strong>(11/2024)</strong>  SSCS PICO Chronicles: SSCS PICO Chronicles: News From the Open Source Community. [Society News]. 
      <a href="https://ieeexplore.ieee.org/abstract/document/10584346" target="_blank">Read More</a>
    </li>
    <li>
      <strong>(09/2024)</strong>  Human Language to Analog Layout Using GLayout Layout Automation Framework, presented by Ali Hammond at MLCAD. 
      <a href="https://dl.acm.org/doi/abs/10.1145/3670474.3685971" target="_blank">Read More</a>
    </li>
    <li>
      <strong>(07/2024)</strong>  Unlocking Circuits for Quantum With Open Source Silicon: A first look at measured open source silicon results at 4 K, presented by Anhang Li at SSC-M.
      <a href="https://ieeexplore.ieee.org/document/10584418" target="_blank">Read More</a>
    </li>
    <li>
      <strong>(07/2024)</strong>  Rapid Prototyping of Laser-Induced Graphene Sensors With Open-Source Silicon: Paving the Way for Low-Cost and Robust Flexible Wearable Sensing, presented by Anhang Li and Hongyi Wu at SSC-M. 
      <a href="https://ieeexplore.ieee.org/abstract/document/10584405" target="_blank">Read More</a>
    </li>
    <li>
      <strong>(07/2024)</strong>  Open Se Cura: First silicon results of an auditable and transparent hardware root-of-trust system using open electronic design automation in 16 nm, presented by Guancheng Tao at SSC-M. 
      <a href="https://ieeexplore.ieee.org/abstract/document/10584346" target="_blank">Read More</a>
    </li>
    <li>
      <strong>(06/2024)</strong>  Fully integrated multifunctional sensor and open-source ASIC for flexible wearables, presented by Anhang Li and Hongyi Wu at SSC-M. 
      <a href="https://ieeexplore.ieee.org/abstract/document/10584346" target="_blank">Read More</a>
    </li>
    <li>
      <strong>(05/2024)</strong>  LIG-OSS: Integrated Laser-Induced-Graphene Sensor and Open-Source Silicon Chip for an Affordable and Robust Wearable Sensing System with Precise Temperature, Humidity, and Strain Sensing Capability, presented by Anhang Li, Hongyi Wu and Gregory Kielian at NEMS. 
      <a href="https://ieeexplore.ieee.org/abstract/document/10584346" target="_blank">Read More</a>
    </li>
    <li>
      <strong>(04/2024)</strong>  Quantum Circuit Simulation with Fast Tensor Decision Diagram, presented by Qirui Zhang at ISQED. 
      <a href="https://ieeexplore.ieee.org/abstract/document/10584346" target="_blank">Read More</a>
    </li>
    <li>
      <strong>(03/2024)</strong>  Disrupting Conventional Chip Design through the Open Source EDA Ecosystem, presented by Chetanya Goyal at EDTM. 
      <a href="https://ieeexplore.ieee.org/abstract/document/10584346" target="_blank">Read More</a>
    </li>
    <li>
      <strong>(03/2024)</strong>  CMOS Sky130 Primitives measured at cryogenic temperatures, presented by Akin Akturk and Anhang Li at NIST. 
      <a href="https://ieeexplore.ieee.org/abstract/document/10584346" target="_blank">Read More</a>
    </li>
    <li>
      <strong>(01/2024)</strong>  ConSmax: Hardware-Friendly Alternative Softmax with Learnable Parameters, presented by Shiwei Liu at ICCAD. 
      <a href="https://ieeexplore.ieee.org/abstract/document/10584346" target="_blank">Read More</a>
    </li>
    <li>
      <strong>(01/2024)</strong>  A Fully Integrated, Automatically Generated DC–DC Converter Maintaining >75% Efficiency From 398 K Down to 23 K Across Wide Load Ranges in 12-nm FinFET, presented by Anhang Li at SSC-L. 
      <a href="https://ieeexplore.ieee.org/abstract/document/10584346" target="_blank">Read More</a>
    </li>
  </ul>
</div>


 
</div>





<div class="contact-section">
      <h4>Contact Information</h4>
      <p>
        Phone: (734) 272-5288<br />
        Email: mehdi@umich.edu, mehdi_saligane@brown.edu<br />
        OpenFASOC: https://github.com/idea-fasoc/OpenFASOC
      </p>
      <div class="networks">
        <a href="https://scholar.google.com/citations?user=u1UAQ2QAAAAJ&hl=en" target="_blank">
          <img src="/assets/gs.png" alt="Google Scholar Icon" />
        </a>
        <a href="https://github.com/msaligane" target="_blank">
          <img src="/assets/github.png" alt="GitHub Icon" />
        </a>
        <a href="https://www.linkedin.com/in/mehdi-saligane/" target="_blank">
          <img src="/assets/linkedin.png" alt="LinkedIn Icon" />
        </a>
      </div>
    </div>
  </div>
  <div class="funding-collaborations">
    <h4>Funding & Collaborations</h4>
    <p>
      Our research is supported by collaboration with and funding from notable institutions and industry leaders. We are proud to partner with Google Research, Fitbit, National Institute of Standards and Technology (NIST), KLA, and the U.S. Consulate in Japan. We also receive silicon donations from GlobalFoundries and Intel.
    </p>
    <div class="sponsor-logos">
      <img src="/assets/KLA.png" alt="Google Research Logo" />
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
  name: "HomePageContent",
  data() {
    return {
      images: [
        "/assets/animation/1.jpg",
        "/assets/animation/2.png",
        "/assets/animation/3.png",
        "/assets/animation/4.jpg",
        "/assets/animation/5.jpg",
        "/assets/animation/6.png",
        "/assets/animation/7.jpg",
        "/assets/animation/8.jpg",
        "/assets/animation/9.png",
        "/assets/animation/10.png",
      ],
      currentImageIndex: 0,
    };
  },
  mounted() {
    this.startImageCycle();
  },
  methods: {
    startImageCycle() {
      setInterval(() => {
        this.currentImageIndex =
          (this.currentImageIndex + 1) % this.images.length;
      }, 3000); // Change image every 3 seconds
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}
.container {
  margin: 20px auto;
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

.bio-content {
  display: flex; /* Align image and text side by side */
  align-items: center; /* Vertically align the text with the image */
  gap: 20px; /* Space between image and text */
}

/* Profile Picture Styling */
.profile-picture {
  width: 150px; /* Set width for the profile picture */
  height: 150px; /* Set height for the profile picture */
  border-radius: 50%; /* Make the image circular */
  object-fit: cover; /* Ensure the image maintains aspect ratio */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add subtle shadow */
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
  padding-right: 50px; /* Add some padding for spacing */
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
  margin-left: 40px;
  margin-right: 40px;
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
  margin-right: 100px;
  margin-left: 80px;
  border-radius: 5px;
  font-size: 0.95em;
}

.sponsor-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  margin-right: 120px;
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

.contact-section {
  margin-right: 100px;
  margin-left: 60px;
}

.contact-section a {
  text-decoration: none; /* Remove underline from links */
  color: #007BFF; /* Default link color */
}

.contact-section a:hover {
  text-decoration: underline; /* Underline on hover */
}


.news-section {
  margin-top: 40px;
  margin-right: 100px;
  margin-left: 60px;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.news-section h4 {
  font-family: 'Quicksand', sans-serif;
  font-size: 1.5em;
  margin-bottom: 1em;
}

.news-section ul {
  list-style-type: none;
  padding: 0;
}

.news-section li {
  margin-bottom: 10px;
  margin-left: 3px;
  margin-right: 40px;
  line-height: 1.6;
}

.news-section a {
  color: #007BFF;
  text-decoration: none;
}

.news-section a:hover {
  text-decoration: underline;
}

/* Animation Section Styling */
.animation-section {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  margin: 40px auto; /* Add vertical margin and center horizontally */
  width: 60%; /* Fixed width for the image container */
  height: 400px; /* Fixed height for the image container */
  position: relative; /* Positioning for absolute images */
  border-radius: 10px; /* Rounded corners for the section */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for the section */
  overflow: hidden; /* Ensure images don't overflow the container */
  background-color: #f9f9f9; /* Optional: Add a background color to fill gaps */
}

.animated-image {
  width: 100%; /* Force the image to scale to the container width */
  height: 100%; /* Force the image to scale to the container height */
  object-fit: cover; /* Crop the image to fill the container while maintaining aspect ratio */
  object-position: center; /* Center the image within the container */
  border-radius: 10px; /* Keep the rounded corners for the image */
  transition: opacity 1s ease-in-out;
}


/* Fade Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s;
}

.fade-enter, 
.fade-leave-to {
  opacity: 0;
}


/* Mobile-specific styles */
@media (max-width: 768px) {
  .profile-container {
    flex-direction: column; /* Stack vertically */
    align-items: center; /* Center align for mobile */
    gap: 20px; /* Add spacing between items */
  }

  .profile-image {
    width: 200px;
    height: 200px; /* Smaller image size for mobile */
  }

  .profile-info p {
    font-size: 1em; /* Adjust font size for readability */
    text-align: center; /* Center align text for smaller screens */
  }

  .news-section, .contact-section, .funding-collaborations {
    margin: 20px; /* Reduce horizontal margins */
  }

  .animation-section {
    height: 300px; /* Adjust height for smaller screens */
  }

  .animated-image {
    height: 100%; /* Adjust height dynamically */
  }

  .sponsor-logos img {
    max-width: 100px;
    max-height: 70px;
  }
}

@media (max-width: 480px) {
  .profile-image {
    width: 150px;
    height: 150px; /* Further reduce image size for extra small screens */
  }

  .profile-info p {
    font-size: 0.9em; /* Slightly smaller text for compact screens */
  }

  .news-section ul, .contact-section ul {
    padding-left: 10px; /* Reduce padding for compact view */
  }

  .sponsor-logos img {
    max-width: 80px;
    max-height: 60px; /* Smaller sponsor logos */
  }
}
</style>

