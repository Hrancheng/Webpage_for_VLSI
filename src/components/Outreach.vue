<template>
    <div class="outreach-page">
      <HeaderBar />
      <div class="spacer"></div>
      <div class="content-wrapper">
        <div class="section">
          <h2>IEEE SSCS - Chipathon & Code-a-Chip</h2>
          <p>
            Dr. Mehdi Saligane, a leader in the open-source chip design community, was among the
            first researchers to fabricate a successful chip through Google’s multi-project wafer
            program. He is a member of the Technical Committee on the Open Source Ecosystem
            (TC-OSE) under the IEEE Solid-State Circuits Society (SSCS), chaired by Boris Murmann.
          </p>
          <p>
            The IEEE SSCS is committed to enhancing diversity, inclusion, and
            accessibility in integrated circuit (IC) design through initiatives such as the Platform for
            IC Design Outreach (PICO) program. In collaboration with the open-source community,
            PICO seeks to democratize IC design and foster global collaborative ecosystems by
            providing education, mentoring, and fabrication opportunities.
          </p>
          <p>
            Key initiatives include the annual Chipathon, Code-a-Chip travel grants, and an open-source IC design
            competition to encourage diverse participation and innovation. These efforts promote
            reproducible, accessible IC design, fostering the growth of a globally inclusive chip
            design community. Versions of the Code-a-Chip initiative have been presented and
            awarded at ISSCC and VLSI conferences since 2023.
          </p>
          <img src="/assets/outreach.png" alt="Chipathon and Code-a-Chip" class="section-image" />
          <ul>
            <li><a href="https://sscs.ieee.org/technical-committees/tc-ose/sscs-pico-design-contest/" target="_blank">SSCS PICO Design Contest</a></li>
            <li><a href="https://sscs.ieee.org/technical-committees/tc-ose/sscs-pico-program/" target="_blank">SSCS PICO Program</a></li>
            <li><a href="https://github.com/sscs-ose/sscs-ose-code-a-chip.github.io/blob/main/ISSCC23/README.md" target="_blank">Code-a-Chip Award Winners</a></li>
          </ul>
        </div>
        <div class="section">
          <h2>Japan Collaboration</h2>
          <img src="/assets/japan.png" alt="Chipathon and Code-a-Chip" class="section-image" />
          <p>
            Dr. Mehdi is currently leading an effort in collaboration with the Kyushu Region and
            Universities, which is supported by the U.S. Consulate in Japan, to train a high-tech labor
            workforce. This initiative builds upon the work developed in this project and aims to enhance
            IC design skills globally.
          </p>
          <p>
            The semiconductor industry faces many challenges related to supply chain shortages and over reliance on a small number of chip fabrication facilities. To enhance global economic security and prosperity, the American and Japanese governments are collaborating on a workforce training program with a specific focus on the semiconductor industry.
          </p>
          <p>
            <a href="https://sites.google.com/cpc-lab.org/ic-design-ws-e" target="_blank">More details on the IC Design Workshop</a>
          </p>
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
    line-height: 1.6;
    margin-bottom: 20px;
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
  
  /* Image styling */
  .section-image {
    display: block;
    margin: 20px auto;
    width: 800px; /* Set the image width */
    height: auto; /* Maintain aspect ratio */
    border-radius: 8px; /* Optional: rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: subtle shadow */
  }

  .section {
    margin: 20px 20px;
  }
  </style>
  