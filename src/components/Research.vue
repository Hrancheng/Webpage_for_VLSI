<template>
  <div class="project-container">
    <HeaderBar />
      <h1 class="title">OpenFASoC: An Open Source Framework for Fully Automated Mixed-Signal SoC Generation</h1>
      <img src="/assets/OpenFASoc.png" alt="OpenFASoC Image" class="project-photo" />
      <div class="content">
        <h2 class="subtitle">GLayout</h2>
        <p>GLayout is a Cloud-Based Automatic Analog Layout & Netlist Generator with a Reinforcement-Learning Optimizer. We demonstrated this framework with automated generation, evaluation, and optimization of a wide range of room-temperature and cryogenic OPAMPs. Taped-out in SKY130. – Nov 2023</p>
      </div>
    <!-- Additional project cards can be added here -->
    <h1 class="title">Cryogenic / Nano Device Technology</h1>
      <img src="/assets/OpenFASoc.png" alt="OpenFASoC Image" class="project-photo" />
      <div class="content">
        <h2 class="subtitle">NIST Nanotechnology Accelerator</h2>
        <p>NIST Nanofab accelerator is an initiative aimed at creating an open-source active substrate for novel nano device fabrication and characterization. We submitted a large number of useful active elements ranging from signal generators, CV test structures, PLL, OPAMPs, and more. Taped-out in SKY130 - Nov 2023
      </p>
      </div>
      <h1 class="title">Memristor Characterization Array</h1>
      <img src="/assets/OpenFASoc.png" alt="OpenFASoC Image" class="project-photo" />
      <div class="content">
        <h2 class="subtitle">GLayout</h2>
        <p>This project focuses on creating a memory array using phase-change devices like memristors. Taped-out in SKY130 - Nov 2023</p>
      </div>
    <div class="footer">
      <p>– Nov 2023</p>
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
  font-size: 20px;  /* Adjust the font size to make the title slightly smaller */
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;  /* Center the title */
  margin-top: 30px;
}


.content {
  font-size: 14px;  /* Adjust the font size to make the description slightly smaller */
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
