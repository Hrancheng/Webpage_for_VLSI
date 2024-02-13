<template>
  <div class="project-container">
    <HeaderBar />
    <h1 class="title">OpenFASoC: An Open Source Framework for Fully Automated Mixed-Signal SoC Generation</h1>
    <img src="/assets/OpenFASoc.png" alt="Photo of student" class="student-photo" />
    <h2 class="subtitle">GLayout</h2>
    
    <div class="content">
      <p>GLayout is a Cloud-Based Automatic Analog Layout & Netlist Generator with a Reinforcement-Learning Optimizer. We demonstrated this framework with automated generation, evaluation, and optimization of a wide range of room-temperature and cryogenic OPAMPs. Taped-out in SKY130. – Nov 2023</p>
      <!-- Add images and diagrams as needed -->
    </div>

    <!-- You can add additional sections or diagrams here -->

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

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

.content {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.footer {
  font-size: 16px;
  text-align: right;
  margin-top: 20px;
}
</style>
