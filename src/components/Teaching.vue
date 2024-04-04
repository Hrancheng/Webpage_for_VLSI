<template>
<HeaderBar />
  <div class="teaching-container">
    <h2 class="section-title">Teaching</h2>

    <div class="under-construction">
      
    </div>

    <div class="courses">
      <h3 class="term">Winter 2024:</h3>
      <ul class="course-list">
        <li>EECS427 VLSI Design I</li>
      </ul>

      <h3 class="term">2022:</h3>
      <ul class="course-list">
        <li>EECS627 VLSI Design II, Co-taught with Prof. Dennis Sylvester</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Teaching',
}
</script>

<style scoped>
.teaching-container {
  padding: 0px; /* Add padding to the overall container */
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  padding: 20px 20px;
  
}

.under-construction {
  margin-bottom: 30px;
  padding: 0 15px; /* Add horizontal padding to this section */
}

.under-construction img {
  max-width: 100%;
  height: auto;
  display: block; /* Ensures that the image is block-level for proper margin handling */
  margin: 0 auto; /* Center the image */
}

.courses {
  padding: 0 15px; /* Add horizontal padding to the courses section */
}

.courses .term {
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px; /* Increase space above the term */
  margin-bottom: 15px; /* Add space below the term */
}

.course-list {
  list-style-type: none;
  padding: 0;
  margin-left: 20px; /* Indent the course list slightly */
}

.course-list li {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 10px; /* Increase space between course list items */
  padding: 10px; /* Add padding to each list item */
  border-radius: 5px; /* Slightly round the corners of the list items */
}
</style>
