<template>
  <div id="app">
    <!-- HeaderBar component -->
    <HeaderBar />

    <!-- MainContent component -->
    <MainContent />

    <!-- Windows component -->
    <!--Windows -->
  </div>
</template>

<script>
// Import the components. This assumes the components are located in a directory named 'components'.
// Adjust the import paths according to your project's structure.
import HeaderBar from './HeaderBar.vue'
import MainContent from './MainContent.vue'
import Windows from './Windows.vue'

export default {


  components: {
    // Register the components for use in the template
    HeaderBar,
    MainContent,
    Windows,
  },
}
</script>

<style>
/* Add your CSS styling here */
</style>
