<template>
  <main class="main-content">
    <section class="intro">
      <h1>Saligane's VLSI Research Group @ University of Michigan</h1>
      <p><!-- ...content here --></p>
    </section>
    <section class="group-photo">
      <!-- Vue Slick Carousel -->
      <p>Welcome to my lab. My research focuses on open-source silicon development, mixed-signal computer-aided design, small form-factor microsystems and cross-disciplinary application of integrated circuit design.
If you are interested in this type of research, please email me a resume and give me an idea of potential topics you may like to work on (mehdi@umich.edu).</p>
    </section>

    <!-- ...other sections here -->
  </main>
</template>

<script>
  export default {
    data: () => ({
      length: 3,
      window: 0,
    }),
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');
.main-content {
  max-width: 1200px; /* Set maximum width of the content */
  margin: 0 auto; /* Center the content */
  padding: 20px; /* Add some padding around the content */
  font-family: 'Quicksand', sans-serif;
}

.intro h1 {
  color: #2c3e50; /* Dark blue color for the headline */
  font-size: 2.5rem; /* Larger font size for the headline */
  font-weight: 300; /* Lighter font weight for a modern look */
  margin-bottom: 1rem; /* Add some space below the headline */
  text-align: center; /* Center align the text */
}

.group-photo img {
  max-width: 100%;
  height: auto;
}

/* Add additional styles for the carousel here if needed */
.vue-slick-carousel {
  margin-bottom: 20px; /* Example style */
}
</style>
