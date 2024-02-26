<template>
  <div class="people-section">
    <HeaderBar />
    <h1 class="phd-students-heading">Ph.D. Students(Sorted by Time of Joining, Newest First)</h1>
    <div class="student" v-for="student in phdStudents" :key="student.name">
      <img :src="student.image" alt="Photo of student" class="student-photo" />
      <div class="student-info">
        <h2>{{ student.name }}</h2>
        <p>{{ student.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phdStudents: [
        {
          name: 'Guanchen Tao',
          image: '/assets/tao.png', // Replace with the actual path
          description: 'Guanchen Tao received his bachelor\'s degree in Electrical Engineering at Zhejiang University. His research interests include Machine Learning hardware and hardware efficient algorithm. He is currently working on open-source PPA emulation platform for transformer hardware accelerator.'
        },
        {
          name: 'Hongyi Wu',
          image: '/assets/wu.png', // Replace with the actual path
          description: 'Hongyi received his bachelor\'s degree in Applied Physics at the University of Science and Technology of China. He is now pursuing the M.S. degree in Electrical and Computer Engineering at University of Michigan. His research interests include analog/mixed-signal/digital integrated circuit design and related applications. He is now working on IC for DNA synthesis and biosensing.'
        },
        {
          name: 'Anhang Li',
          image: '/assets/li.png', // Replace with the actual path
          description: 'Anhang Li received his bachelor\'s degree in Microelectronics at Sun Yat-Sen University, Guangzhou, China, and subsequently the M.S. degree with honor in Electrical Engineering at Columbia University, NY. His research interests include RF/MMIC, power-efficient circuits, and computer-aided mixed-signal design.'
        },
        {
          name: 'Ming-Hung Chen',
          image: '/assets/chen.png', // Replace with the actual path
          description: ''
        },
        // ...other students
      ]
    };
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

/* This is just a guess of your header-bar class. Adjust according to your actual HeaderBar component's styles */

.phd-students-heading {
  font-size: 2em;
  font-weight: bold;
  color: #333; /* Adjust the color as needed */
  text-align: center;
  margin-bottom: 30px;
}


.student {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.student-photo {
  width: 150px;
  height: 150px;
  margin-right: 20px;
  object-fit: cover; /* Ensures the image covers the area without distortion */
  border-radius: 50%; /* Makes the image circular */
}

.student-info h2 {
  margin: 0;
  font-size: 1.5em;
}

.student-info p {
  margin: 0;
  font-size: 1em;
  line-height: 1.4;
}
</style>
