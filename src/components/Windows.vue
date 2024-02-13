<template>
  <v-window v-model="window" show-arrows class="window-slider">
    <v-window-item v-for="(n, index) in length" :key="n">
      <v-card class="slider-card">
        <!-- Dynamically bind img src to each image path -->
        <div class="content-container">
        <div class="images-container">
          <div class="image-container" v-if="index === 5">
            <img :src="file_path[index][0]" alt="Image Description" class="image" />
          </div>
          <div class="image-container2">
            <img :src="file_path[index][1]" alt="Image Description" class="image" />
          </div>
        </div>
        <!-- New paragraph for each picture -->

        <div class="description-container">
        <v-card-text class="slider-description">
          {{ descriptions[index] }}
        </v-card-text>
        </div>
        </div>
      </v-card>
    </v-window-item>
  </v-window>
</template>

<script>
export default {
  data() {
    return {
      length: 4,
      window: 0,
      file_path: [
        ["public/assets/New_wearable.png",
        "public/assets/New_wearable.png"],
        ["public/assets/Root_of_trust_1.png",
        "public/assets/Root_of_trust_2.png"],
        ["public/assets/Group_2.png",
        "spublic/assets/Group_1.png"],
        ["public/assets/Accelerating_sensor_1.png",
        "public/assets/Accelerating_sensor_2.png"]
        // Update the file names as necessary
      ],
      descriptions: [
        'Picture on the left is Strain Gauge for structure Bending/vibration monitoring. Picture on the right is Composite Electro-Chemical Sensor for Human Biometric Measurements. Those two are Intended Applications of the LIG Sensors.',
        'Those are FPGA emulation (left) and Silicon 22nm Implementation (right). ',
        'Cloud-generated OPAMP Layouts using Cryogenic Models and Open-Source Toolchain.',
        'Intel has provided us as well with their 16nm Shuttle where we used to built 3 fairly complicated testchips, one of them is a complete opentitan RoT with security blocks, noise injection circuits for power obfuscation and side channel attack mitigation techniques The 1st tapeout was in Nov. 2022 and last one was over last week which also include a 2.8GS/s TI ADC  (6.5bit ENOB by top posim)',
        'Description for Card 5',
        // ... add more descriptions if you have more than 5 cards
      ],
    }
  },
}
</script>

<style>
.window-slider {
  width: 100%; /* Set the width to take the full viewport width */
  max-height: calc(100vh - 100px); /* Adjust the height as needed */
}

.slider-card {
  height: auto; /* Adjust height to fit the content */
  max-height: calc(100vh - 100px); /* Same as window-slider to maintain consistency */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.slider-image {
  max-width: 100%; /* Make the image responsive */
  max-height: 90%; /* Adjust based on your requirement */
  margin-bottom: 1rem; /* Space between image and description */
}

.images-container {
  display: flex; /* Aligns children (image containers) in a row */
  justify-content: center;
  align-items: center;
  width: 100%; /* Full width to allow side-by-side placement */
}

.images-container {
  display: flex;
  justify-content: space-between; /* Positions one child at the start and the other at the end */
  align-items: center; /* Vertically centers the children in the container */
  width: 100%; /* Takes the full width of its parent to provide space for children */
}

.image-container, .image-container2 {
  flex: 1; /* Allows both containers to grow and take up equal space */
  display: flex;
  justify-content: center; /* Centers the image inside each container */
  align-items: center;
}

.image {
  max-width: 100%; /* Ensures the image does not overflow its container */
  max-height: 100%;
}


.slider-description {
  font-size: 1.2rem;
  padding: 0 1rem;
}
</style>
