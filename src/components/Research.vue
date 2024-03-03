<template>
  <div class="project-container">
    <HeaderBar />
    <h1 class="main-title">OpenFASoC: An Open Source Framework for Fully Automated Mixed-Signal SoC Generation</h1>
    
    <div class="project-section">
      <img src="/assets/OpenFASoc.png" alt="OpenFASoC Image" class="project-photo" />
      <ul class="project-description">
        <li>GLayout is a Cloud-Based Automatic Analog Layout & Netlist Generator with a Reinforcement-Learning Optimizer.</li>
        <li>We demonstrated this framework with automated generation, evaluation, and optimization of a wide range of room-temperature and cryogenic OPAMPs.</li>
        <li>Taped-out in SKY130 – Nov 2023</li>
      </ul>
    </div>
    
    <h1 class="main-title">Cryogenic / Nano Device Technology</h1>
    <div class="project-section">
      <img src="/assets/nanoTech.png" alt="Nano Technology Image" class="project-photo" />
      <ul class="project-description">
        <li>NIST Nanofab accelerator is an initiative aimed at creating an open-source active substrate for novel nano device fabrication and characterization.</li>
        <li>We submitted a large number of useful active elements ranging from signal generators, CV test structures, PLL, OPAMPs, and more.</li>
        <li>Taped-out in SKY130 - Nov 2023</li>
      </ul>
    </div>
    
    <div class="project-section">
      <img src="/assets/Memristor.png" alt="Memristor Image" class="project-photo" />
      <ul class="project-description">
        <li>This project focuses on creating a memory array using phase-change devices like memristors.</li>
        <li>Taped-out in SKY130 - Nov 2023</li>
      </ul>
    </div>
    
    <div class="project-section">
      <img src="/assets/FinFET.png" alt="FinFET Image" class="project-photo" />
      <ul class="project-description">
        <li>This is an array of test devices and signal generators in Intel 16nm FinFET process.</li>
        <li>The goal is to observe a quantum effect in FinFET transistors and pave the way for new circuit design techniques - Jul 2023</li>
      </ul>
    </div>
    
    <div class="project-section">
      <img src="/assets/Cryogenic.png" alt="Cryogenic DCDC Converters Image" class="project-photo" />
      <ul class="project-description">
        <li>This is an automatically generated switched-capacitor DCDC that maintains its characteristic across a very wide temperature range.</li>
        <li>The chip is fabricated and tested from 400K to 23K - Feb 2023</li>
      </ul>
    </div>
    
    <h1 class="main-title">Efficient & Secure Digital Computation</h1>
    <div class="project-section">
      <img src="/assets/Efficient.png" alt="Efficient Image" class="project-photo" />
      <ul class="project-description">
        <li>LLM Inference Accelerator SoC with Advanced Power management.</li>
      </ul>
    </div>
    
    <div class="project-section">
      <img src="/assets/OpenTitan.png" alt="OpenTitan Image" class="project-photo" />
      <ul class="project-description">
        <li>OpenTitan Root-of-Trust SoC with Clock Noise Injection.</li>
      </ul>
    </div>
    
    <h1 class="main-title">Miniature High-Performance Integrated Sensing Platforms</h1>
    <div class="project-section">
      <img src="/assets/Miniature.png" alt="Miniature Image" class="project-photo" />
      <ul class="project-description">
        <li>This is a mixed signal sensor platform fabricated in GF180 using opensource design tools - Sep 2023</li>
      </ul>
    </div>
    
    <div class="project-section">
      <img src="/assets/ADC.png" alt="ADC Image" class="project-photo" />
      <ul class="project-description">
        <li>This is a high performance, low power, small area, time-interleaved ADC capable of RF sampling in Intel 16nm process - Jul 2023</li>
      </ul>
    </div>
    
    <div class="project-section">
      <img src="/assets/Construction.png" alt="Human Body Communication Image" class="project-photo" />
      <ul class="project-description">
        <li>Human Body Communication.</li>
      </ul>
    </div>
    
    <h1 class="main-title">Bio-Electrical / Electro-Chemical Research</h1>
    <div class="project-section">
      <img src="/assets/Construction.png" alt="Active DNA Sequencing & Synthesis Array Image" class="project-photo" />
      <ul class="project-description">
        <li>Active DNA Sequencing & Synthesis Array.</li>
      </ul>
    </div>
    
    <div class="project-section">
      <img src="/assets/Construction.png" alt="Laser-Induced Graphene Sensor Platform Image" class="project-photo" />
      <ul class="project-description">
        <li>Laser-Induced Graphene Sensor Platform.</li>
      </ul>
    </div>
    
    <div class="footer">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  // You can add your Vue instance properties and methods here
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');
.main-title {
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  padding: 20px;
}

.project-section {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.project-photo {
  width: 36%;  /* Make the image smaller */
  height: auto;
  border-radius: 8px;
  margin-right: 20px;
  margin-bottom: 20px;  /* Add space between images */
}

.project-description {
  list-style-type: disc;
  padding-left: 20px;
  font-size: 16px;
  line-height: 1.6;
  font-family: 'Quicksand', sans-serif;
}

.footer {
  font-size: 16px;
  text-align: right;
  margin-top: 20px;
}
</style>
