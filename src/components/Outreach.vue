<template>
  <div class="outreach-page">
    <HeaderBar />
    <div class="spacer"></div>
    <div class="content-wrapper">
      <!-- Japan Collaboration Section -->
      <div class="section japan-collaboration">
        <h2>Japan Collaboration</h2>
        <p>
          The semiconductor industry faces many challenges related to supply chain shortages and over reliance on a small number of chip fabrication facilities. To enhance global economic security and prosperity, the American and Japanese governments are collaborating on a workforce training program with a specific focus on the semiconductor industry.

The first phase of this project is a 2-day online workshop , held December 5-6, 2023 (8-11:30am JST, 6-9:30pm EST), featuring experts in the field of integrated circuit design from both academia and industry. 

This Phase-1 workshop presents cutting-edge IC design technologies, with a focus on open-source IC design ecosystem; discussions on workforce development; and provides an opportunity for questions. It will be offered via zoom. The second phase of this program will be an in-person workshop to be held next year.

The ultimate goal is to explore, bridge, and accelerate U.S. -Japan collaborations regarding cutting-edge IC designs.
        </p>
        <div class="images-grid">
          <img src="/assets/japan.png" alt="Japan Collaboration Image 1" class="section-image" />
          <img src="/assets/Japan3.png" alt="Japan Collaboration Image 2" class="section-image" />
        </div>
        <p>
          <ul>
            <li> <a href="https://sites.google.com/cpc-lab.org/ic-design-ws-e" target="_blank">More details on the IC Design Workshop</a> </li>
          </ul>
        </p>
      </div>

      <div class="divider"></div>

      <!-- Chipathon Section -->
      <div class="section chipathon">
        <h2>IEEE SSCS - Chipathon & Code-a-Chip</h2>

        <p>
          The IEEE SSCS is committed to enhancing diversity, inclusion, and accessibility in integrated circuit (IC) design through initiatives such as the Platform for IC Design Outreach (PICO) program. In collaboration with the open-source community, PICO seeks to democratize IC design and foster global collaborative ecosystems by providing education, mentoring, and fabrication opportunities. Key initiatives include the annual Chipathon, Code-a-Chip travel grants, and an open-source IC design competition to encourage diverse participation and innovation. These efforts promote reproducible, accessible IC design, fostering the growth of a globally inclusive chip design community. Versions of the Code-a-Chip initiative have been presented and awarded at ISSCC and VLSI conferences since 2023.
        </p>

        <!-- Updated images layout -->
        <div class="images-grid">
          <img src="/assets/glayout_2.png" alt="Chipathon Image 1" class="section-image" />
          <img src="/assets/code_a_chip.png" alt="Chipathon Image 2" class="section-image" />
        </div>

        <ul>
          <li><a href="https://sscs.ieee.org/technical-committees/tc-ose/sscs-pico-design-contest/" target="_blank">SSCS PICO Design Contest</a></li>
          <li><a href="https://sscs.ieee.org/technical-committees/tc-ose/sscs-pico-program/" target="_blank">SSCS PICO Program</a></li>
          <li><a href="https://github.com/sscs-ose/sscs-ose-code-a-chip.github.io/blob/main/ISSCC23/README.md" target="_blank">Code-a-Chip Award Winners</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OutreachPage",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap");

/* General styling */
.spacer {
  margin-top: 20px; /* Adds space after the HeaderBar */
}

.content-wrapper {
  padding: 0 20px; /* Adds padding on the left and right */
  text-align: left;
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

p {
  font-size: 1em;
  line-height: 1;
  margin-bottom: 20px; /* Removed extra space between paragraphs */
}


ul {
  margin-top: 15px;
  margin-left: 20px;
}

ul li {
  font-size: 1em;
  margin-bottom: 10px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Section styling */
.section {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.japan-collaboration {
  background-color: #f0f8ff; /* Light blue background */
}

.chipathon {
  background-color: #f0f8ff; /* Light blue background */
}

/* Divider styling */
.divider {
  border-top: 2px solid #ddd;
  margin: 20px 0;
}

/* Image grid styling */
.images-grid {
  display: flex;
  flex-direction: row;
  gap: 0; /* No space between images */
  margin: 0;
  padding: 0;
}

.section-image {
  width: 50%;
  height: auto; /* Maintain aspect ratio */
  margin: 0;
  display: block;
  border-radius: 0; /* Remove rounded corners if desired */
  box-shadow: none; /* Remove shadow if desired */
}

/* Responsive design */
@media (max-width: 768px) {
  .content-wrapper {
    padding: 0 10px;
  }

  h2 {
    font-size: 1.5em;
  }

  p {
  font-size: 1em;
  line-height: 1; /* Adjusted line-height to reduce space between lines */
  margin-bottom: 0;
}

  ul li {
    font-size: 0.9em;
  }

  .images-grid {
    flex-direction: column;
  }

  .section-image {
    width: 100%;
  }
}
</style>


