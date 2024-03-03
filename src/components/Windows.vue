<template>
  <v-window v-model="window" show-arrows class="window-slider">
    <v-window-item v-for="(n, index) in length" :key="n">
      <v-card class="slider-card">
        <div class="content-container">
          <div class="image-container">
            <img :src="file_path[index][1]" alt="Image Description" class="image" />
          </div>
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
        ["/assets/New_wearable.png", "/assets/New_wearable.png"],
        ["/assets/Root_of_trust_1.png", "/assets/Root_of_trust_2.png"],
        ["/assets/Group_2.png", "/assets/Group_1.png"],
        ["/assets/Accelerating_sensor_2.png", "/assets/Accelerating_sensor_1.png"]
      ],
      descriptions: [
        'Picture on the left is Strain Gauge for structure Bending/vibration monitoring. Picture on the right is Composite Electro-Chemical Sensor for Human Biometric Measurements. Those two are Intended Applications of the LIG Sensors.',
        'FPGA emulation (left) and Silicon 22nm Implementation (right).',
        'Cloud-generated OPAMP Layouts using Cryogenic Models and Open-Source Toolchain.',
        'Intel has provided us as well with their 16nm Shuttle where we used to built 3 fairly complicated testchips, one of them is a complete opentitan RoT with security blocks, noise injection circuits for power obfuscation and side channel attack mitigation techniques The 1st tapeout was in Nov. 2022 and last one was over last week which also include a 2.8GS/s TI ADC  (6.5bit ENOB by top posim)'
      ],
    }
  },
}
</script>

<style>
.window-slider {
  width: 100%;
  max-height: calc(100vh - 50px); /* Reduce the top margin to lower the slider */
  margin-top: 50px; /* Add margin-top to position the slider lower */
}

.slider-card {
  height: auto;
  max-height: calc(100vh - 50px); /* Adjust max-height to enlarge the slider */
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px; /* Adjust padding to enlarge the image */
}

.image {
  max-width: 100%; /* Increase the max-width to enlarge the image */
  max-height: 100%;
  padding:10px 0px 10px 120px;
}

.description-container {
  max-width: 90%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1px 0 15px;  /* Adjust padding to enlarge the description */
}

.slider-description {
  font-size: 1.4rem; /* Enlarge the font size */
  max-width: 80%;
  height: 95%; /* Enlarge the description */
}

</style>
