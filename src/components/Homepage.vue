<template>
  <!-- This is Vue component for webpage Home. Modify MainContent.vue to modify Home page -->
    <div id="app">
      <!-- HeaderBar component -->
      <HeaderBar />
  
      <!-- MainContent component -->
      <div class="main-content">
        <MainContent />
      </div>
  
      <!-- Windows component -->
      <!--Windows -->
    </div>
  </template>
  
  <script>
  import HeaderBar from './HeaderBar.vue';
  import MainContent from './MainContent.vue';
  import Windows from './Windows.vue';
  
  export default {
    components: {
      HeaderBar,
      MainContent,
      //Windows,
    },
  };
  </script>
  
  <style>
  /* Add spacing before MainContent */
  .main-content {
    margin-top: 80px; /* Adjust this value to match the height of HeaderBar */
    padding: 1rem; /* Optional, adds some spacing within the MainContent */
  }
  </style>
  