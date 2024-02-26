<template>
  <div class="news-container">
    <HeaderBar />
    <h1 class="title">Hosting A USA–Japan Collaborative Workshop in Fukuoka, Japan</h1>
    <p class="author-date">written by Mehdi Saligane on 2023-11-09</p>
    <p class="content">
      The semiconductor industry faces many challenges related to supply chain shortages
      and over reliance on a small number of chip fabrication facilities. To enhance
      global economic security and prosperity, the American and Japanese governments are
      collaborating on a workforce training program with a specific focus on the
      semiconductor industry.
    </p>
    <p class="content">
      The first phase of this project is a 2-day online workshop, held December 5-6,
      2023 (8-11:30am JST, 6-9:30pm EST), featuring experts in the field of integrated
      circuit design from both academia and industry.
    </p>
    <div class="workshop-homepage">
      Workshop Homepage: <a href="#" class="link">English</a> | <a href="#" class="link">日本語</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  // You can add your Vue instance properties here
}
</script>

<style scoped>

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
}

.content {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.workshop-homepage {
  font-size: 16px;
  margin-top: 20px;
}

.link {
  color: #1a0dab;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
