<!-- This is Vue component for people page -->
<template>
  <div class="people-section">
    <HeaderBar />
    <h1 class="phd-students-heading">Visiting Scholars</h1>
    <div class="student" v-for="student in VisitingScholars" :key="student.name">
      <img :src="student.image" alt="Photo of student" class="student-photo" />
      <div class="student-info">
        <h2>{{ student.name }}</h2>
        <div class="social-links">
          <a v-if="student.twitter" :href="`https://twitter.com/${student.twitter}`" target="_blank">
            <img src='/assets/twitter.png'>
          </a>
          <a v-if="student.email" :href="`mailto:${student.email}`">
            <img src="/assets/email.jpeg" alt="Email"/>
          </a>
        </div>
        <p>{{ student.description }}</p>
      </div>
    </div>
    <h1 class="phd-students-heading">Ph.D. Students(Sorted by Time of Joining, Newest First)</h1>
    <div class="student" v-for="student in phdStudents" :key="student.name">
      <img :src="student.image" alt="Photo of student" class="student-photo" />
      <div class="student-info">
        <h2>{{ student.name }}</h2>
        <div class="social-links">
          <a v-if="student.twitter" :href="`https://twitter.com/${student.twitter}`" target="_blank">
            <img src='/assets/twitter.png'>
          </a>
          <a v-if="student.email" :href="`mailto:${student.email}`">
            <img src="/assets/email.jpeg" alt="Email"/>
          </a>
        </div>
        <p>{{ student.description }}</p>
      </div>
    </div>
    <h1 class="phd-students-heading">Undergraduate Studnents/Master Students</h1>
    <div class="student" v-for="student in Undergraduate_Master_students" :key="student.name">
      <img :src="student.image" alt="Photo of student" class="student-photo" />
      <div class="student-info">
        <h2>{{ student.name }}</h2>
        <div class="social-links">
          <a v-if="student.twitter" :href="`https://twitter.com/${student.twitter}`" target="_blank">
            <img src='/assets/twitter.png'>
          </a>
          <a v-if="student.email" :href="`mailto:${student.email}`">
            <img src="/assets/email.jpeg" alt="Email"/>
          </a>
        </div>
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
          twitter: 'example',
          email:"example",
          image: '/assets/tao.png',
          description: 'Guanchen Tao received his bachelor\'s degree in Electrical Engineering at Zhejiang University. His research interests include Machine Learning hardware and hardware efficient algorithm. He is currently working on open-source PPA emulation platform for transformer hardware accelerator.'
        },
        {
          name: 'Hongyi Wu',
          twitter: 'example',
          email:"example",
          image: '/assets/wu.png', // Replace with the actual path
          description: 'Hongyi received his bachelor\'s degree in Applied Physics at the University of Science and Technology of China. He is now pursuing the M.S. degree in Electrical and Computer Engineering at University of Michigan. His research interests include analog/mixed-signal/digital integrated circuit design and related applications. He is now working on IC for DNA synthesis and biosensing.'
        },
        {
          name: 'Anhang Li',
          twitter: 'example',
          email:"example",
          image: '/assets/li.png', // Replace with the actual path
          description: 'Anhang Li received his bachelor\'s degree in Microelectronics at Sun Yat-Sen University, Guangzhou, China, and subsequently the M.S. degree with honor in Electrical Engineering at Columbia University, NY. His research interests include RF/MMIC, power-efficient circuits, and computer-aided mixed-signal design.'
        },
        {
          name: 'Ming-Hung Chen',
          twitter: 'example',
          email:"example",
          image: '/assets/chen.png', // Replace with the actual path
          description: ''
        },
        // ...other students
      ],
      VisitingScholars: [
        {
          name: 'Juan Sebastian Moya',
          twitter: 'example',
          email:"example",
          image: '/assets/Juan.png', // Replace with the actual path
          description: 'Juan Sebastián Moya Baquero received his bachelor\'s degree in Electronics Engineering at Universidad de Los Andes (Colombia), then he was part of the CI Brazil Program between 2012 and 2014, and subsequently, he received his M.S. degree in Electrical Engineering at Universidade Federal de Santa Catarina (Brazil). In 2023, he got his Ph.D. in Engineering, in the Electronics Engineering area, at the Universidad Industrial de Santander (Colombia). His research interests include analog and RF circuit design, and he is currently working on body coupling communication modeling and circuit design as an exchange visitor.'
        },
        // ...other students
      ],
      Undergraduate_Master_students: [
        {
          name: 'Nora Desmond',
          twitter: 'example',
          email:"example",
          image: '/assets/Nora.png', // Replace with the actual path
          description: ''
        },
        {
          name: 'Yifei Zou',
          twitter: 'example',
          email:"example",
          image: '/assets/Zou.png', // Replace with the actual path
          description: ''
        },
        {
          name: 'Ayushman Tripathi',
          twitter: 'example',
          email:"example",
          image: '/assets/Ayushman.png', // Replace with the actual path
          description: 'Ayushman is a 2nd year MS student in ECE (IC/VLSI) at University of Michigan, Ann Arbor. He received his bachelor\'s degree in Electrical Engineering at Indian Institute of Technology Gandhinagar. Prior to joining UMich, he was working on development of electro-optical image sensors at Indian Space Research Organization (ISRO). His areas of interest include Analog/RF and Low power IC design.'
        },
        {
          name: 'Madhulika Lingamguntla',
          twitter: 'example',
          email:"example",
          image: '/assets/Madhulika.png', // Replace with the actual path
          description: 'Madhulika received her bachelor\'s degree in Electrical Engineering from Indian Institute of Technology Gandhinagar and is currently pursuing Masters in Electrical and Computer Engineering at the University of Michigan. Prior to starting her Masters, she worked in the Indian Space Research Organization in the domain of electro-optical image sensors. Her research interests include mixed signal circuit design,bio-sensing circuits and design of low power, low noise amplifiers for various applications. Currently she is working on the design of residue amplifiers for low power pipeline ADC'
        },
        {
          name: 'Yiheng Fu',
          twitter: 'example',
          email:"example",
          image: '/assets/Fu.png', // Replace with the actual path
          description: 'Yiheng recevied his bachelor’s degree in University of Electronic Science and Technology of China. His research interests include high speed, high precision data converters, and image sensor.'
        },
        {
          name: 'Ali Hammoud',
          twitter: 'example',
          email:"example",
          image: '/assets/Ali.png', // Replace with the actual path
          description: ''
        },
        // ...other students
      ]
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}


.phd-students-heading {
  font-size: 2em;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  color: #333; /* Adjust the color as needed */
  text-align: center;
  margin-bottom: 30px;
  margin-top:20px;
}


.student {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 30px;
}

.student-photo {
  width: 100px; /* Reduce the width of the image */
  height: 100px; /* Reduce the height of the image */
  margin-right: 30px; /* Increase the right margin for more padding */
  object-fit: cover;
  border-radius: 50%;
}

.student-info h2 {
  font-family: 'Quicksand', sans-serif;
  margin: 0;
  font-size: 1.2em; /* Reduce the font size of the name */
}
.social-links a img {
  width: 24px; /* or any size you prefer */
  height: auto;
  vertical-align: middle;
  margin-right: 10px;
}
.student-info p {
  font-family: 'Quicksand', sans-serif;
  margin: 0;
  font-size: 0.9em; /* Reduce the font size of the description */
  line-height: 1.4;
  padding: 10px 20px 10px 0; /* Increase the right padding for more spacing */
}
</style>