<!-- This is Vue component for main part of News page. -->
<template>
<HeaderBar />
  <div class="news-container">
    <h1 class="title">{{ currentArticle.title }}</h1>
    <p class="author-date" v-if="currentArticle.title !== 'Coming Soon'">written by {{ currentArticle.author }} on {{ currentArticle.date }}</p>
    <div class="content-container">
      <p class="content" v-html="currentArticle.content">
        
      </p>
    </div>
    <div class="workshop-homepage"  v-if="currentArticle.title !== 'Coming Soon'">
      Workshop Homepage: <a :href="currentArticle.homepageLinkEnglish" class="link" target="_blank" rel="noopener noreferrer">English</a>
      <span v-if="currentArticle.homepageLinkJapanese"> | 
      <a :href="currentArticle.homepageLinkJapanese" class="link" target="_blank" rel="noopener noreferrer">日本語</a>
  </span>
    </div>
    <div class="button-container">
      <button @click="goToPrevious" :disabled="currentArticleIndex === 0">Previous</button>
      <button @click="goToNext" :disabled="currentArticleIndex === newsArticles.length - 1">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  data() {
    return {
      currentArticleIndex: 0,
      newsArticles: [
        {
          title: "Hosting A USA–Japan Collaborative Workshop in Fukuoka, Japan",
          author: "Mehdi Saligane",
          date: "2023-11-09",
          content: "The semiconductor industry faces many challenges related to supply chain shortages and over reliance on a small number of chip fabrication facilities. To enhance global economic security and prosperity, the American and Japanese governments are collaborating on a workforce training program with a specific focus on the semiconductor industry.<br><br> The first phase of this project is a 2-day online workshop , held December 5-6, 2023 (8-11:30am JST, 6-9:30pm EST), featuring experts in the field of integrated circuit design from both academia and industry.",
          homepageLinkEnglish: "https://sites.google.com/cpc-lab.org/ic-design-ws-e",
          homepageLinkJapanese: "https://sites.google.com/cpc-lab.org/ic-design-ws-j"
        },
        {
          title: "CMOS Sky130 Primitives measured at cryogenic temperatures",
          author: "Akin Akturk, Anhang Li, Mehdi Saligane, Joseph Riem, Gina Adam, Brian D Hoskins, Pragya Shrestha ",
          date: "2024-03-27",
          content: "Sky130 is an open source complimentary metal oxide semiconductor (CMOS) technology manufactured by Skywater Technology in its facility in Bloomington, Minnesota. Since it is an open source technology, there are no legal restrictions on it's characterization, unlike in typical foundry semiconductor technologies. To facilitate the development of cryogenic electronics, this data set includes measurements of devices manufactured in Sky130 at low temperatures.",
          homepageLinkEnglish: "https://data.nist.gov/od/id/mds2-2997",
          homepageLinkJapanese: ""
        },
        {
          title: "Coming Soon",
          author: "",
          date: "",
          content: "",
          homepageLinkEnglish: "https://sites.google.com/cpc-lab.org/ic-design-ws-e",
          homepageLinkJapanese: "https://sites.google.com/cpc-lab.org/ic-design-ws-j"
        },
        // Add more articles here
      ]
    };
  },
  computed: {
    currentArticle() {
      return this.newsArticles[this.currentArticleIndex];
    }
  },
  methods: {
    goToPrevious() {
      if (this.currentArticleIndex > 0) {
        this.currentArticleIndex--;
      }
    },
    goToNext() {
      if (this.currentArticleIndex < this.newsArticles.length - 1) {
        this.currentArticleIndex++;
      }
    }
  }
}
</script>

<style scoped>
.news-container {
  padding: 20px; /* Add padding around the entire container */
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center; /* Center the title */
}

.author-date {
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
  text-align: center; /* Center the author and date */
}

.content-container {
  margin-left: 20px; /* Add some space to the left of the content */
}

.content {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.workshop-homepage {
  font-size: 16px;
  margin-top: 20px;
  text-align: center; /* Center the workshop homepage links */
}

.link {
  color: #1a0dab;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.button-container button {
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button-container button:hover {
  background-color: #0056b3;
}

.button-container button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}


</style>