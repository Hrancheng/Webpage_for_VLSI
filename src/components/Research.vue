<template>
  <div class="project-container">
    <HeaderBar />
      <h1 class="main-title">OpenFASoC: An Open Source Framework for Fully Automated Mixed-Signal SoC Generation</h1>
      <h1 class="title">GLayout</h1>
      <img src="/assets/OpenFASoc.png" alt="OpenFASoC Image" class="project-photo" />
      <div class="content">
        <p>GLayout is a Cloud-Based Automatic Analog Layout & Netlist Generator with a Reinforcement-Learning Optimizer. We demonstrated this framework with automated generation, evaluation, and optimization of a wide range of room-temperature and cryogenic OPAMPs. Taped-out in SKY130. – Nov 2023</p>
      </div>
    <!-- Additional project cards can be added here -->
    <h1 class="main-title">Cryogenic / Nano Device Technology</h1>
    <h1 class="title">NIST Nanotechnology Accelerator</h1>
      <img src="/assets/nanoTech.png" alt="OpenFASoC Image" class="project-photo" />
      <div class="content">
        <p>NIST Nanofab accelerator is an initiative aimed at creating an open-source active substrate for novel nano device fabrication and characterization. We submitted a large number of useful active elements ranging from signal generators, CV test structures, PLL, OPAMPs, and more. Taped-out in SKY130 - Nov 2023
      </p>
      </div>
      <h1 class="title">Memristor Characterization Array</h1>
      <img src="/assets/Memristor.png" alt="OpenFASoC Image" class="project-photo" />
      <div class="content">
        <p>This project focuses on creating a memory array using phase-change devices like memristors. Taped-out in SKY130 - Nov 2023</p>
      </div>
      <h1 class="title">Novel Quantum FinFET Device Research</h1>
      <img src="/assets/FinFET.png" alt="OpenFASoC Image" class="project-photo" />
      <div class="content">
        <h2 class="subtitle"></h2>
        <p>This is an array of test devices and signal generators in Intel 16nm FinFET process. The goal is to observe a quantum effect in FinFET transistors and pave the way for new circuit design techniques - Jul 2023</p>
      </div>
      <h1 class="title">Cryogenic DCDC Converters</h1>
      <img src="/assets/Cryogenic.png" alt="OpenFASoC Image" class="project-photo" />
      <div class="content">
        <h2 class="subtitle"></h2>
        <p>GThis is an automatically generated switched-capacitor DCDC that maintains its characteristic across a very wide temperature range. The chip is fabricated and tested from 400K to 23K - Feb 2023</p>
      </div>
      <h1 class="main-title">Efficient & Secure Digital Computation</h1>
      <h1 class="title">LLM Inference Accelerator SoC with Advanced Power management</h1>
      <img src="/assets/Efficient.png" alt="OpenFASoC Image" class="project-photo" />
      <div class="content">
        <h2 class="subtitle"></h2>
        <p></p>
      </div>
      <h1 class="title">OpenTitan Root-of-Trust SoC with Clock Noise Injection</h1>
      <img src="/assets/OpenTitan.png" alt="OpenFASoC Image" class="project-photo" />
      <div class="content">
        <h2 class="subtitle"></h2>
        <p></p>
      </div>
      <h1 class="main-title">Miniature High-Performance Integrated Sensing Platforms</h1>
      <h1 class="title">GF180 AMS Sensor AFE Test Chip</h1>
      <img src="/assets/Miniature.png" alt="OpenFASoC Image" class="project-photo" />
      <div class="content">
        <h2 class="subtitle"></h2>
        <p>GThis is a mixed signal sensor platform fabricated in GF180 using opensource design tools - Sep 2023</p>
      </div>
      <h1 class="title">High Performance Interleaved Charge-Injection ADC</h1>
      <img src="/assets/ADC.png" alt="OpenFASoC Image" class="project-photo" />
      <div class="content">
        <h2 class="subtitle"></h2>
        <p>This is a high performance, low power, small area, time-interleaved ADC capable of RF sampling in Intel 16nm process - Jul 2023</p>
      </div>
      <h1 class="title">Human Body Communication</h1>
      <img src="/assets/Construction.png" alt="OpenFASoC Image" class="project-photo" />
      <div class="content">
        <h2 class="subtitle"></h2>
      </div>
      <h1 class="main-title">Bio-Electrical / Electro-Chemical Research</h1>
      <h1 class="title">Active DNA Sequencing & Synthesis Array</h1>
      <img src="/assets/Construction.png" alt="OpenFASoC Image" class="project-photo" />
      <div class="content">
        <h2 class="subtitle"></h2>
      </div>
      <h1 class="title">Laser-Induced Graphene Sensor Platform</h1>
      <img src="/assets/Construction.png" alt="OpenFASoC Image" class="project-photo" />
      <div class="content">
        <h2 class="subtitle"></h2>
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

.project-card {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}

.project-photo {
  width: 50%;  /* Adjust the width to make the picture smaller */
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  margin-top: 30px;
  color: lightblue;  /* Change the color to light blue */
  font-family: 'Quicksand', sans-serif;
}



.content {
  font-size: 16px;  /* Adjust the font size to make the description slightly smaller */
  line-height: 1.6;
  margin-bottom: 20px;
  margin-left: 20px;  /* Add left margin */
  margin-right: 20px;  /* Add right margin */
}

.subtitle {
  font-size: 18px;  /* Adjust the font size to make the subtitle slightly smaller */
  color: #333;
  margin-bottom: 10px;
}

.footer {
  font-size: 16px;
  text-align: right;
  margin-top: 20px;
  margin-left: 20px;  /* Add left margin */
  margin-right: 20px;  /* Add right margin */
}
</style>
