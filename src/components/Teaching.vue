<template>
  <div class="teaching-container">
    <HeaderBar />
    <h2 class="section-title">Teaching</h2>

    <div class="under-construction">
      <!-- Replace 'under-construction.jpg' with the path to your actual under construction image -->
      
    </div>

    <div class="courses">
      <h3 class="term">Winter 2024:</h3>
      <ul class="course-list">
        <li>EECS427 VLSI Design I</li>
      </ul>

      <h3 class="term">2022:</h3>
      <ul class="course-list">
        <li>EECS627 VLSI Design II, Co-taught with prof. Dennis Sylvester</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Teaching',
  // You can add your Vue instance properties and methods here
}
</script>

<style scoped>

.section-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.under-construction {
  margin-bottom: 20px;
}

.under-construction img {
  max-width: 100%;
  height: auto;
}

.courses .term {
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
}

.course-list {
  list-style-type: none;
  padding-left: 20px;
}

.course-list li {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 5px;
}
</style>
