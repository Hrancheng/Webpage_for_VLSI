<template>
  <div class="research-page">
    <HeaderBar />
    <!-- Scroll Menu -->
  
    <div class="content-wrapper">


 

  
      <!-- Section: Energy Efficient Computing Systems -->
      <div id="energy-efficient" class="section" style="margin-top: 40px;">
        <h2>Edge AI Accelerators @ software/hardware co-design</h2>
        <div class="section-content">
          <div class="two-column-layout">
            <div class="images-container">
              <img src="/assets/Research5/Consmax.png" alt="Energy Efficient Computing System" class="section-image" />
            </div>
            <div class="publications-container">
              <ul>
                <li>
                  ConSmax: Hardware-Friendly Alternative Softmax with Learnable Parameters. 
                  <a href="https://arxiv.org/pdf/2402.10930" target="_blank"><strong>arXiv’24</strong></a>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

 

<!-- Section: Academic Publications -->
<!--
<div id="academic-publications" class="section">
  <h2>Academic Publications</h2>
  <div class="section-content">
    <div class="publications-container">
      <ul>
        <li>
          SSCS PICO Chronicles: Code-a-Chip Travel Grant Awards at VLSI 2024. 
          <a href="https://ieeexplore.ieee.org/abstract/document/10752803" target="_blank"><strong>SSC-M’24</strong></a>.
        </li>
        <li>
          SSCS PICO Chronicles: News From the Open Source Community. 
          <a href="https://ieeexplore.ieee.org/abstract/document/10584346" target="_blank"><strong>SSC-M’24</strong></a>.
        </li>
        <li>
          SSCS PICO Chronicles: A μProcessor With a 5-GHz Radio. 
          <a href="https://ieeexplore.ieee.org/abstract/document/10024752" target="_blank"><strong>SSC-M’23</strong></a>.
        </li>
        <li>
          To Support Open Source Ecosystem Ramp-Up. 
          <a href="https://ieeexplore.ieee.org/abstract/document/9805638" target="_blank"><strong>SSC-M’22</strong></a>.
        </li>
      </ul>
    </div>
  </div>
</div>
-->

    </div>
  </div>
</template>

<script>
export default {
  name: "ResearchPage",
  data() {
    return {
      expandedSection: null, // Keeps track of the currently expanded section
      sections: {
  openfasoc: {
    publications: [
      {
        id: 1,
        title: "Human Language to Analog Layout Using GLayout Layout Automation Framework.",
        link: "https://dl.acm.org/doi/abs/10.1145/3670474.3685971",
        conference: "MLCAD’24",
      },
      {
        id: 2,
        title: "An open source compatible framework to fully autonomous digital LDO generation.",
        link: "https://ieeexplore.ieee.org/abstract/document/10181884",
        conference: "ISCAS’23",
      },
    ],
  },
  cryogenic: {
    publications: [
      {
        id: 1,
        title: "Unlocking Circuits for Quantum With Open Source Silicon at 4K.",
        link: "https://ieeexplore.ieee.org/abstract/document/10584405",
        conference: "SSC-M’24",
      },
      {
        id: 2,
        title: "CMOS Sky130 Primitives measured at cryogenic temperatures.",
        link: "https://doi.org/10.18434/mds2-2997",
        conference: "NIST’23",
      },
    ],
  },
  "energy-efficient": {
    publications: [
      {
        id: 1,
        title: "Open se cura: First silicon results of an auditable and transparent hardware root-of-trust system in 16 nm.",
        link: "https://ieeexplore.ieee.org/abstract/document/10584369",
        conference: "SSC-M’24",
      },
    ],
  },
  "bio-electrical": {
    publications: [
      {
        id: 1,
        title: "Rapid Prototyping of Laser-Induced Graphene Sensors With Open-Source Silicon.",
        link: "https://ieeexplore.ieee.org/abstract/document/10584418",
        conference: "SSC-M’24",
      },
    ],
  },
  "academic-publications": {
    publications: [
      {
        id: 1,
        title: "SSCS PICO Chronicles: Code-a-Chip Travel Grant Awards at VLSI 2024.",
        link: "https://ieeexplore.ieee.org/abstract/document/10752803",
        conference: "SSC-M’24",
      },
      {
        id: 2,
        title: "SSCS PICO Chronicles: News From the Open Source Community.",
        link: "https://ieeexplore.ieee.org/abstract/document/10584346",
        conference: "SSC-M’24",
      },
    ],
  },
},
    };
  },
  methods: {
    toggleAccordion(section) {
      this.expandedSection = this.expandedSection === section ? null : section;
    },
  },
};
</script>

<style scoped>
.scroll-menu {
  background-color: #f8f9fa;
  padding: 0px 40px; /* Reduced padding for a smaller appearance */
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
}

.scroll-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.scroll-menu > ul > li {
  margin-bottom: 1px; /* Less spacing between items */
}

.scroll-menu a {
  text-decoration: none;
  font-size: 0.9em; /* Slightly smaller font size */
  font-weight: bold;
  color: #007bff;
  cursor: pointer;
}

.scroll-menu a:hover {
  color: #0056b3; /* Darker blue on hover */
}

.publication-list {
  padding: 0;
  list-style-type: disc;
}

.publication-list li {
  margin-bottom: 1px; /* Reduced spacing between publication items */
}

.publication-list a {
  font-size: 0.9em;
  color: #040e17;
  text-decoration: none;
}

.publication-list a:hover {
  text-decoration: underline;
}

.content-wrapper {
  padding: 0 40px; /* Add left and right padding */
  margin-top: 130px;
}

h1 {
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 30px;
}

h2 {
  font-size: 1.8em;
  margin-bottom: 15px;
}

.section {
  margin-bottom: 40px; /* Space between sections */
}

.section-content {
  margin-top: 15px; /* Space between section title and content */
}

.two-column-layout {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.images-container {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.section-image {
  width: calc(50% - 10px); /* Two images per row */
  border-radius: 8px;
}

.publications-container {
  flex: 1;
  overflow-y: auto;
}

ul {
  font-size: 1em;
  line-height: 1.2;
  margin: 0; /* Remove default UL padding */
  padding: 0; /* Remove default UL margin */
  list-style-position: inside; /* Keep bullets inside the container */
}

li {
  margin-bottom: 10px; /* Add space between list items */
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Specific styling for the "Secure Edge AI and Hardware Security" section */
#energy-efficient .section-image {
  width: 100%; /* Make the image take the full width of its container */
  max-width: 600px; /* Set a maximum width for the image */
  height: auto; /* Maintain aspect ratio */
  display: block; /* Ensure proper centering inside flex or grid */
  margin: 0 auto; /* Center the image horizontally */
  border-radius: 8px; /* Optional: Add rounded corners */
}
/* Specific styling for the "Secure Edge AI and Hardware Security" section */
#bio-electrical .section-image {
  width: 50%; /* Make the image take the full width of its container */
  max-width: 600px; /* Set a maximum width for the image */
  height: auto; /* Maintain aspect ratio */
  display: block; /* Ensure proper centering inside flex or grid */
  margin: 0 auto; /* Center the image horizontally */
  border-radius: 8px; /* Optional: Add rounded corners */
}

/* Section-Specific Styles */
#accelerating-chipdesign .single-column-layout {
  display: flex;
  flex-direction: column; /* Stack the sentence above the images */
  align-items: center; /* Center-align both sentence and images */
  gap: 30px; /* Add spacing between the sentence and the images */
}

/* Text Container Styling */
#accelerating-chipdesign .text-container {
  font-size: 1.2em;
  color: #333;
  line-height: 1.5;
  text-align: center; /* Center-align the sentence */
  max-width: 800px; /* Optional: Limit the width for readability */
  margin-bottom: 20px; /* Additional space below the sentence if needed */
}

/* Images Container Styling */
#accelerating-chipdesign .images-container {
  display: flex;
  justify-content: center;
  gap: 20px; /* Space between the two images */
}

#accelerating-chipdesign .section-image {
  width: calc(50% - 10px); /* Two images side by side */
  border-radius: 8px;
  object-fit: cover;
}

/* Responsive Design */
@media (max-width: 768px) {
  #accelerating-chipdesign .images-container {
    flex-direction: column; /* Stack images vertically */
  }

  #accelerating-chipdesign .section-image {
    width: 100%; /* Full width for smaller screens */
  }
  .scroll-menu {
    padding: 30px 20px; /* Reduce padding */
  }

  .scroll-menu ul {
    flex-direction: column; /* Stack menu items vertically */
    align-items: flex-start;
  }

  .scroll-menu li {
    margin-right: 0; /* No right margin for vertical stacking */
    margin-bottom: 10px; /* Add spacing between items */
  }


  h1 {
    font-size: 2em; /* Reduce font size */
  }

  h2 {
    font-size: 1.5em; /* Reduce font size */
  }

  .two-column-layout {
    flex-direction: column; /* Stack columns vertically */
    gap: 15px;
  }

  .images-container {
    flex-wrap: wrap;
    gap: 10px;
  }

  .section-image {
    width: 100%; /* Full width for smaller screens */
  }
}
</style>

