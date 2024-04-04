<!-- This is Vue component for main part of Publication page -->
<template>
<HeaderBar />
  <div class="research-container">
    <h2 class="section-title">Publications</h2>
    <p class="google-scholar">
      Please also visit my <a href="https://scholar.google.com/citations?hl=en&user=u1UAQ2QAAAAJ&view_op=list_works&sortby=pubdate" target="_blank" rel="noopener noreferrer" class="scholar-link">Google Scholar page</a> for an updated catalogue. This is a list of recent publications from my research:
    </p>
    <div class="publications">
      <!-- 2024 Publications -->
      <div class="year-group">
        <h3 class="year">2024</h3>
        <ul class="publication-list">
          <li class="publication">
            A Li, J Lee, P Mukim, BD. Hoskins, P Shrestha, DD Wentzloff, D Blaauw, D Sylvester, M Saligane, A fully integrated, automatically generated DC-DC converter maintaining > 75% efficiency from 398 K down to 23 K across wide load ranges in 12 nm FinFET, IEEE Solid-State Circuits Letters (under review)
          </li>
          <!-- Additional publications for 2024 if any -->
        </ul>
      </div>
      
      <!-- 2023 Publications -->
      <div class="year-group">
        <h3 class="year">2023</h3>
        <ul class="publication-list">
          <!-- Fill in the publications for 2023 here -->
          <li class="publication">
            <a href="https://ieeexplore.ieee.org/document/10310944" target="_blank" rel="noopener noreferrer">
            A Akturk, A Tripathi, M Saligane, Cryogenic Modeling for Open-Source Process Design Kit Technology, IEEE BCICTS
            </a>
          </li>
          <li class="publication">
            <a href="https://ieeexplore.ieee.org/document/10153547?denied=" target="_blank" rel="noopener noreferrer">
            A Hammoud, V Shankar, R Mains, J Matres, T Ansell, M Saligane, OpenFASOC: An Open Platform Towards Analog and Mixed-Signal Automation and Acceleration of Chip Design, 2023 International Symposium on Devices, Circuits and Systems (ISDCS) 1, 01-04
            </a>
          </li>
          <li class="publication">
            <a href="https://ieeexplore.ieee.org/document/10181884" target="_blank" rel="noopener noreferrer">
            YK Cherivirala, M Saligane, DD Wentzloff, An Open Source Compatible Framework to Fully Autonomous Digital LDO Generation, 2023 IEEE International Symposium on Circuits and Systems (ISCAS), 1-5
            </a>
          </li>
          <li class="publication">
            <a href="https://ieeexplore.ieee.org/document/10024752?denied=" target="_blank" rel="noopener noreferrer">
            A Li, W Zhang, M Saligane, SCS PICO Chronicles: A μProcessor With a 5-GHz Radio [Society News], IEEE Solid-State Circuits Magazine
            </a>
          </li>
        </ul>
      </div>
      
      <!-- 2022 Publications -->
      <div class="year-group">
        <h3 class="year">2022</h3>
        <ul class="publication-list">
          <!-- Fill in the publications for 2022 here -->
          <li class="publication">
            <a href="https://ieeexplore.ieee.org/document/9816083" target="_blank" rel="noopener noreferrer">
            Q Zhang, W Duan, T Edwards, T Ansell, D Blaauw, D Sylvester, M Saligane, An Open-Source and Autonomous Temperature Sensor Generator Verified With 64 Instances in SkyWater 130 nm for Comprehensive Design Space Exploration, IEEE Solid-State Circuits Letters
            </a>
          </li>
          <li class="publication">
            <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9805638" target="_blank" rel="noopener noreferrer">
            M. Saligane, V-M Mirjana, to Support Open Source Ecosystem Ramp-Up, IEEE Solid-State Circuits Magazine
            </a>
          </li>
           
        </ul>
      </div>
      
      <!-- 2021 Publications -->
      <div class="year-group">
        <h3 class="year">2021</h3>
        <ul class="publication-list">
          <!-- Fill in the publications for 2021 here -->
          <li class="publication">
            <a href="https://ieeexplore.ieee.org/document/9431508?denied=" target="_blank" rel="noopener noreferrer">
            L Xu, J Lee, M Saligane, D Blaauw, D Sylvester, Design techniques of integrated power management circuits for low power edge devices, 2021 IEEE Custom Integrated Circuits Conference (CICC), 1-4
            </a>
          </li>
        </ul>
      </div>
      
      <!-- 2020 Publications -->
      <div class="year-group">
        <h3 class="year">2020</h3>
        <ul class="publication-list">
          <!-- Fill in the publications for 2020 here -->
          <li class="publication">
            J Lee, M Saligane, D Blaauw, D Sylvester, A 0.3-V to 1.8–3.3-V Leakage-Biased Synchronous Level Converter for ULP SoCs, SSCL
          </li>
          <li class="publication">
            <a href="https://web.eecs.umich.edu/~fayazi/New/PDFs/FASoC_Book.pdf" target="_blank" rel="noopener noreferrer">
            T Ajayi, S Kamineni, M Fayazi, YK Cherivirala, K Kwon, S Gupta, W Duan, J Lee, C-H Chen, M Saligane, D Sylvester, D Blaauw, R Dreslinski Jr, B Calhoun, DD Wentzloff, Fully-Autonomous SoC Synthesis Using Customizable Cell-Based Analog and Mixed-Signal Circuits Generation, VLSI-SoC
            </a>
          </li>
          <li class="publication">
            T Ansell, M Saligane, The Missing Pieces of Open Design Enablement: A Recent History of Google Efforts, ICCAD Invited Talk
          </li>
        </ul>
      </div>
    </div>
  </div>
  <h2 class="patent-section-title">Patents</h2>
    <ul class="patents-list">
      <li class="patent">
        “DNA Synthesis, RNA Synthesis, and Cell Engineering On-A-Chip”, Submitted with Alea Biosciences Inc.
      </li>
      <li class="patent">
        “CPU performance monitor”, EU Patent with STMicroelectronics
      </li>
      <li class="patent">
        “Level Converter Circuitry”, Patent US 10,326,449 B2
      </li>
      <!-- Additional patents can be added here -->
    </ul>
</template>

<script>
import HeaderBar from './HeaderBar.vue';
export default {
  components: { HeaderBar },
  name: 'Research',
  // The rest of the script stays the same
}
</script>

<style scoped>
.research-container {
  padding: 20px; /* Add padding to the container */
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  padding-left: 0px; /* Add padding to the title */
}

.google-scholar {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
  padding-left: 0px; /* Add padding to the Google Scholar link paragraph */
}

.scholar-link {
  color: #1a0dab;
  text-decoration: none;
}

.scholar-link:hover {
  text-decoration: underline;
}

.year-group {
  margin-bottom: 30px; /* Increase space between each year group */
}

.year {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px; /* Add space below the
year /
padding-left: 10px; / Add padding to the year heading */
}

.publication-list {
list-style-type: none; /* Remove default list style /
padding: 0;
margin-left: 20px; / Add indentation to the list */
}

.publication {
font-size: 16px;
line-height: 1.6;
margin-bottom: 10px; /* Add space between publications /
text-align: left; / Align text to the left /
position: relative; / Needed for custom bullet /
padding-left: 20px; / Space for bullet */
}

.publication::before {
content: '•'; /* Custom bullet /
color: #333; / Bullet color /
font-weight: bold; / Make bullet bold /
display: inline-block; / Needed to position the bullet correctly /
width: 20px; / Bullet width /
margin-left: -20px; / Align bullet outside the text block /
position: absolute; / Position the bullet absolutely within the relative parent */
left: 0;
}

/* Style adjustments for responsive design or specific elements can be added here */
.patents-list {
  list-style-type: none; /* Remove default list style */
  padding: 0;
  margin-left: 20px; /* Add indentation to the list */
}

.patent {
  font-size: 16px;
line-height: 1.6;
margin-bottom: 10px; /* Add space between publications /
text-align: left; / Align text to the left /
position: relative; / Needed for custom bullet /
padding-left: 20px; / Space for bullet */
}

.patent::before {
  content: '•'; /* Custom bullet /
color: #333; / Bullet color /
font-weight: bold; / Make bullet bold /
display: inline-block; / Needed to position the bullet correctly /
width: 20px; / Bullet width /
margin-left: -20px; / Align bullet outside the text block /
position: absolute; / Position the bullet absolutely within the relative parent */
left: 0;
}

.patent-section-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  padding-left: 20px; /* Add padding to the title */
}
</style>