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

import HeaderBar from './HeaderBar.vue'
import MainContent from './MainContent.vue'
import Windows from './Windows.vue'

export default {


  components: {
    HeaderBar,
    MainContent,
    Windows,
  },
}
</script>

<style>

</style>
