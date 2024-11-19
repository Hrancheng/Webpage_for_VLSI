<template>
  <div class="research-page">
    <HeaderBar />
    <div class="spacer"></div>
    <div class="content-wrapper">
      <h1>Research and Publications</h1>
      
      <!-- Section: OpenFASoC -->
      <div class="section">
        <h2>OpenFASoC</h2>
        <ul>
          <li>
            Hammoud, A., Goyal, C., Pathen, S., Dai, A., Li, A., Kielian, G., & Saligane, M. (2024, September).
            <a href="https://dl.acm.org/doi/abs/10.1145/3670474.3685971" target="_blank">
              Human Language to Analog Layout Using GLayout Layout Automation Framework
            </a>.
          </li>
          <li>
            Goyal, C., Khandeparkar, H., Charan, S., Baquero, J. S., Li, A., Euphrosine, J., & Saligane, M. (2024, March).
            <a href="https://ieeexplore.ieee.org/abstract/document/10511336" target="_blank">
              Disrupting Conventional Chip Design through the Open Source EDA Ecosystem
            </a>.
          </li>
          <li>
            Hammoud, A., Shankar, V., Mains, R., Ansell, T., Matres, J., & Saligane, M. (2023, May).
            <a href="https://ieeexplore.ieee.org/abstract/document/10153547" target="_blank">
              Openfasoc: An open platform towards analog and mixed-signal automation and acceleration of chip design
            </a>.
          </li>
          <li>
            Cherivirala, Y. K., Saligane, M., & Wentzloff, D. D. (2023, May).
            <a href="https://ieeexplore.ieee.org/abstract/document/10181884" target="_blank">
              An open source compatible framework to fully autonomous digital LDO generation
            </a>.
          </li>
        </ul>
      </div>

      <!-- Section: Cryogenic / Nano Device Technology -->
      <div class="section">
        <h2>Cryogenic / Nano Device Technology</h2>
        <ul>
          <li>
            Li, A., Zeng, T., Zhang, L., Riem, J., Adam, G. C., Fleischer, D. L., & Saligane, M. (2024).
            <a href="https://ieeexplore.ieee.org/abstract/document/10584405" target="_blank">
              Unlocking Circuits for Quantum With Open Source Silicon
            </a>.
          </li>
          <li>
            Akturk, A., Tripathi, A., & Saligane, M. (2023, October).
            <a href="https://ieeexplore.ieee.org/abstract/document/10310944" target="_blank">
              Cryogenic Modeling for Open-Source Process Design Kit Technology
            </a>.
          </li>
        </ul>
      </div>

      <!-- Section: Energy Efficient Computing Systems and Hardware Security -->
      <div class="section">
        <h2>Energy Efficient Computing Systems and Hardware Security</h2>
        <ul>
          <li>
            Tao, G., Chen, M. H., Kielian, G., Pan, B., Yick, K., Sylvester, D., & Saligane, M. (2024).
            <a href="https://ieeexplore.ieee.org/abstract/document/10584369" target="_blank">
              Open Secura: First silicon results of an auditable and transparent hardware root-of-trust system using open electronic design automation in 16 nm
            </a>.
          </li>
        </ul>
      </div>

      <!-- Section: Miniature High-Performance Integrated Sensing Platforms -->
      <div class="section">
        <h2>Miniature High-Performance Integrated Sensing Platforms</h2>
        <ul>
          <li>
            Li, A., Wu, H., Fadila, A. A., Kye, C., Balijepalli, A., Euphrosine, J., & Saligane, M. (2024).
            <a href="https://www.nist.gov/publications/fully-integrated-multifunctional-sensor-and-open-source-asic-flexible-wearables" target="_blank">
              Fully integrated multifunctional sensor and open-source ASIC for flexible wearables
            </a>.
          </li>
        </ul>
      </div>

      <!-- Section: Bio-Electrical / Electro-Chemical / Biometrics Research -->
      <div class="section">
        <h2>Bio-Electrical / Electro-Chemical / Biometrics Research</h2>
        <ul>
          <li>
            Li, A., Wu, H., Lingamguntla, M., Fadila, A. A., Kye, C. H., Balijepalli, A., & Saligane, M. (2024).
            <a href="https://ieeexplore.ieee.org/abstract/document/10584418" target="_blank">
              Rapid Prototyping of Laser-Induced Graphene Sensors With Open-Source Silicon
            </a>.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResearchPage",
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

p,
ul {
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 20px;
}

ul {
  margin-left: 20px;
}

ul li {
  margin-bottom: 10px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
