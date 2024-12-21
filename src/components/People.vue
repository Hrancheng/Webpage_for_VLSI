<!-- This is Vue component for people page -->
<template>
  <div class="people-section">
    <HeaderBar />
    <div class="student">
      <img src="/assets/Saligane.png" alt="Photo of Salingane" class="student-photo" />
      <div class="student-info">
        <h2>Mehdi Saligane</h2>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/mehdi-saligane/" target="_blank">
            <img src='/assets/linkedin.png' alt="Twitter">
          </a>
          <a href="mailto:example@example.com">
            <img src="/assets/email.jpeg" alt="Email" />
          </a>
        </div>
        <p>Mehdi Saligane is a research scientist and lecturer at the University of Michigan, and will join Brown University in July 2025. He is also co-founder and CTO of Alea Biosciences.
His current research interests include low-power and energy-efficient IC design, open-source EDA, and analog and mixed-signal IC design automation. He received the Google Cloud Research Innovators Award and the Google Research Faculty Award in 2023 and 2021, respectively.
Dr. Saligane currently serves as the Chair of the Analog Working Group, a member of the CHIPS Alliance Technical Steering Committee, and a technical member of the SSCS open source ecosystem. He is also the co-founder and organizer of the SSCS Code-a-Chip Notebook Competition at ISSCC and the SSCS Chipathon Design Contest.
        </p>
      </div>
    </div>

    <h1 class="phd-students-heading">Ph.D. Students</h1>
    <div class="student" v-for="student in phdStudents" :key="student.name">
      <img :src="student.image" alt="Photo of student" class="student-photo" />
      <div class="student-info">
        <h2>{{ student.name }}</h2>
        <div class="social-links">
          <a v-if="student.twitter" :href="`https://linkedin.com/${student.twitter}`" target="_blank">
            <img src='/assets/linkedin.png'>
          </a>
          <a v-if="student.email" :href="`mailto:${student.email}`">
            <img src="/assets/email.jpeg" alt="Email"/>
          </a>
        </div>
        <p>{{ student.description }}</p>
      </div>
    </div>
    <h1 class="phd-students-heading">Undergraduate Students / Master Students</h1>
  <div class="undergrad-master-container">
    <!-- Undergraduate Students Column -->
    <div class="student-column">
      <h2 class="column-title">Undergraduate Students</h2>
      <div class="student" v-for="student in undergraduateStudents" :key="student.name">
        <img :src="student.image" alt="Photo of student" class="student-photo" />
        <div class="student-info">
          <h2>{{ student.name }}</h2>
          <div class="social-links">
            <a v-if="student.twitter" :href="`https://linkedin.com/${student.twitter}`" target="_blank">
              <img src="/assets/linkedin.png">
            </a>
            <a v-if="student.email" :href="`mailto:${student.email}`">
              <img src="/assets/email.jpeg" alt="Email"/>
            </a>
          </div>
          <p>{{ student.description }}</p>
        </div>
      </div>
    </div>

  <!-- Master Students Column -->
  <div class="student-column">
    <h2 class="column-title">Master Students</h2>
    <div class="student" v-for="student in masterStudents" :key="student.name">
      <img :src="student.image" alt="Photo of student" class="student-photo" />
      <div class="student-info">
        <h2>{{ student.name }}</h2>
        <div class="social-links">
          <a v-if="student.twitter" :href="`https://linkedin.com/${student.twitter}`" target="_blank">
            <img src="/assets/linkedin.png">
          </a>
          <a v-if="student.email" :href="`mailto:${student.email}`">
            <img src="/assets/email.jpeg" alt="Email"/>
          </a>
        </div>
        <p>{{ student.description }}</p>
      </div>
    </div>
  </div>
</div>

</div>

    <h1 class="phd-students-heading">Visiting Scholars</h1>
    <div class="student" v-for="student in VisitingScholars" :key="student.name">
      <img :src="student.image" alt="Photo of student" class="student-photo" />
      <div class="student-info">
        <h2>{{ student.name }}</h2>
        <div class="social-links">
          <a v-if="student.twitter" :href="`https://linkedin.com/${student.twitter}`" target="_blank">
            <img src='/assets/linkedin.png'>
          </a>
          <a v-if="student.email" :href="`mailto:${student.email}`">
            <img src="/assets/email.jpeg" alt="Email"/>
          </a>
        </div>
        <p>{{ student.description }}</p>
      </div>
    </div>

    <h1 class="phd-students-heading">Alumni</h1>
<div class="student" v-for="alumnus in alumni" :key="alumnus.name">
  <img :src="alumnus.image" alt="Photo of alumnus" class="student-photo" />
  <div class="student-info">
    <h2>{{ alumnus.name }}</h2>
    <div class="social-links">
      <!-- LinkedIn Link -->
      <a v-if="alumnus.twitter" :href="`https://linkedin.com/${alumnus.twitter}`" target="_blank">
            <img src='/assets/linkedin.png'>
          </a>
      <!-- Email Link -->
      <a v-if="alumnus.email" :href="`mailto:${alumnus.email}`">
        <img src="/assets/email.jpeg" alt="Email" />
      </a>
    </div>
    <p>{{ alumnus.description }}</p>
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
          twitter: 'in/guanchentao/',
          email:"example",
          image: '/assets/tao.png',
          description: 'Guanchen Tao received his bachelor\'s degree in Electrical Engineering at Zhejiang University. His research interests include Machine Learning hardware and hardware efficient algorithm. He is currently working on open-source PPA emulation platform for transformer hardware accelerator.'
        },
        {
          name: 'Hongyi Wu',
          twitter: 'in/hongyi-wu-947336261/',
          email:"example",
          image: '/assets/wu.png', // Replace with the actual path
          description: 'Hongyi received his bachelor\'s degree in Applied Physics at the University of Science and Technology of China. He is now pursuing the M.S. degree in Electrical and Computer Engineering at University of Michigan. His research interests include analog/mixed-signal/digital integrated circuit design and related applications. He is now working on IC for DNA synthesis and biosensing.'
        },
        {
          name: 'Anhang Li',
          twitter: 'example',
          email:"example",
          image: '/assets/li.png', // Replace with the actual path
          description: 'Anhang Li received his bachelor\'s degree in Microelectronics at Sun Yat-Sen University, Guangzhou, China, and subsequently the M.S. degree in Electrical Engineering at Columbia University, NY in 2022. He is currently pursuing a Ph.D. degree in Electrical and Computer Engineering at the University of Michigan, Ann Arbor, MI, 48109. His research interests include computer-aided mixed-signal design, SoC, and RF/MMIC circuit design.'
        },
        {
          name: ' Ashbir Aviat Fadila',
          twitter: 'example',
          email:"fadila@ssc.pe.titech.ac.jp",
          image: '/assets/people.png', // Replace with the actual path
          description: ''
        },
        // ...other students
      ],
      VisitingScholars: [
        {
          name: 'Juan Sebastian Moya',
          twitter: 'in/juan-sebastian-moya/',
          email:"example",
          image: '/assets/Juan.png', // Replace with the actual path
          description: 'Juan Sebastián Moya Baquero received his bachelor\'s degree in Electronics Engineering at Universidad de Los Andes (Colombia), then he was part of the CI Brazil Program between 2012 and 2014, and subsequently, he received his M.S. degree in Electrical Engineering at Universidade Federal de Santa Catarina (Brazil). In 2023, he got his Ph.D. in Engineering, in the Electronics Engineering area, at the Universidad Industrial de Santander (Colombia). His research interests include analog and RF circuit design, and he is currently working on body coupling communication modeling and circuit design as an exchange visitor.'
        },
        {
          name: 'Max Ladabaum',
          twitter: 'example',
          email:"example",
          image: '/assets/people.png', // Replace with the actual path
          description: ''
        },
        // ...other students
      ],
      alumni: [
      {
          name: 'Chanho Kye',
          twitter: 'example',
          email:"chanho.kye@suwon.ac.kr",
          image: '/assets/people.png', // Replace with the actual path
          description: 'He is currently an assistant professor at University of Suwon.'
        },
        {
          name: 'Wenbo Duan',
          twitter: 'example',
          email:"wbduan@umich.edu",
          image: '/assets/people.png', // Replace with the actual path
          description: 'He is currently working at Nvidia.'
        },
        {
          name: 'Ming-Hung Chen',
          twitter: 'example',
          email:"example",
          image: '/assets/chen.png', // Replace with the actual path
          description: ''
        },
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
          description: 'Currently pursing PhD at Northeastern University.',
        },
        {
          name: 'Ayushman Tripathi',
          twitter: 'in/ayushmantripathi/',
          email:"example",
          image: '/assets/Ayushman.png', // Replace with the actual path
          description: 'Ayushman is a 2nd year MS student in ECE (IC/VLSI) at University of Michigan, Ann Arbor. He received his bachelor\'s degree in Electrical Engineering at Indian Institute of Technology Gandhinagar. Prior to joining UMich, he was working on development of electro-optical image sensors at Indian Space Research Organization (ISRO). His areas of interest include Analog/RF and Low power IC design. He is currently working at Texas Instruments.'
        },
        {
          name: 'Madhulika Lingamguntla',
          twitter: 'in/lingamguntla-madhulika-799511115/',
          email:"example",
          image: '/assets/Madhulika.png', // Replace with the actual path
          description: 'Madhulika received her bachelor\'s degree in Electrical Engineering from Indian Institute of Technology Gandhinagar and is working at Apple. Prior to starting her Masters, she worked in the Indian Space Research Organization in the domain of electro-optical image sensors. Her research interests include mixed signal circuit design,bio-sensing circuits and design of low power, low noise amplifiers for various applications. Currently she is working on the design of residue amplifiers for low power pipeline ADC.'
        },
        {
          name: 'Yiheng Fu',
          twitter: 'example',
          email:"yiheng.fu@epfl.ch",
          image: '/assets/Fu.png', // Replace with the actual path
          description: 'Yiheng recevied his bachelor’s degree in University of Electronic Science and Technology of China. His research interests include high speed, high precision data converters, and image sensor. He is currently pursing PhD degree at EPFL.'
        },
        {
          name: 'Bowen Li',
          twitter: 'example',
          email:"example",
          image: '/assets/people.png', // Replace with the actual path
          description: 'Bowen Li received his Master’s degree at University of Michigan and bachelor’s degree at Tamkang University. His research interests include Delay Locked Loop and MRAM.'
        },
        {
          name: 'Guanru Wang',
          twitter: 'example',
          email:"wguanru@umich.edu",
          image: '/assets/guanru.png', // Replace with the actual path
          description: 'He is currently an ASIC Engineer at Cisco.'
        },
        // More alumni data...
      ],
      undergraduateStudents: [
        {
          name: 'Ali Hammoud',
          twitter: 'in/ali-billal-hammoud/',
          email:"example",
          image: '/assets/Ali.png',
          description: 'Ali Hammoud is a student at the University of Michigan studying computer engineering, based in Ann Arbor Michigan. He is currently doing research in Professor Mehdi Saligane’s group at Michigan. He is interested in exploring novel analog automation approaches—using reinforcement learning and large language models to automate analog layout and sizing—and codesign of hardware with AI architectures.'
        },
        {
          name: 'Arlene Dai',
          twitter: 'in/arlene-d/',
          email:"example",
          image: '/assets/Arlene.jpg',
          description: 'Arlene is a third year student studying electrical engineering. She is currently conducting research in Dr Mehdi Saligane’s group exploring how LLMs can be used to generate analog layout.'
        },
        // Add more undergraduate students here
      ],
      masterStudents: [
        {
          name: 'Junyi Luo',
          twitter: 'in/junyi-luo-875185277/',
          email:"example",
          image: '/assets/Luo.jpg',
          description: 'Junyi Luo is a MS student studying ECE in University of Michigan now. He is interested in VLSI, FPGA and AI. He received his B.E. degree from the School of Microelectronics, Southern University of Science and Technology，Shenzhen, China, in 2023.'
        },
        {
          name: 'Ruichen Qi',
          twitter: 'example',
          email:"example",
          image: '/assets/people.png',
          description: ''
        },
        {
          name: 'Stoke Song',
          twitter: 'example',
          email:"example",
          image: '/assets/song.jpg',
          description: 'Situo(Stoke) Song is a master’s student in ECE department at University of Michigan, Ann Arbor. His research focuses on Digital/Analog circuit design and AI. Currently, he is working on Physical Unclonable Function(PUF). Holding a bachelor’s degree in EE from Huazhong University of Science and Technology, Situo Song brings a solid foundation in lithography, system verilog, Cadence and python programming.'
        },
        // Add more master students here
      ]
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');

/* General styling */
* {
  box-sizing: border-box;
}

/* Add space under the header */
.people-section {
  padding-top: 130px; /* Adjust this value to match the height of the header */
}

/* Heading Styling */
.phd-students-heading {
  font-size: 2em;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 20px;
}

/* Shared Student Card Style */
.student {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Photo Styling */
.student-photo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
}

/* Student Info */
.student-info h2 {
  font-size: 1.3em;
  color: #333;
  margin-bottom: 8px;
}

.student-info p {
  font-size: 0.9em;
  color: #555;
  line-height: 1.5;
  margin: 0;
}

/* Social Links */
.social-links img {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

/* Undergraduate / Master Students Section */
.undergrad-master-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  gap: 20px; /* Space between columns */
  margin: 20px 0;
}

/* Columns Styling */
.student-column {
  padding: 15px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.column-title {
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .undergrad-master-container {
    grid-template-columns: 1fr; /* Stack columns vertically on smaller screens */
  }
  .student {
    flex-direction: column;
    text-align: center;
  }
  .student-photo {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>
