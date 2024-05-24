<template>
  <HeaderBar />
  <div class="blog-page">
    <h1>Our Latest Blog Posts</h1>
    <div v-for="post in posts" :key="post.id" class="blog-post">
      <h2>{{ post.title }}</h2>
      <img :src="post.image" alt="Blog Post Image" class="blog-image">
      <div class="post-meta">
        <span class="post-date">{{ post.date }}</span> by <span class="post-author">{{ post.author }}</span>
      </div>
      <p>{{ post.fullContent }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  data() {
    return {
      posts: [
        { 
          id: 1, 
          title: 'First Post', 
          image: '/assets/Wearable_1.png',
          fullContent: 'Content of the first post',
          date: 'May 24, 2024',
          author: 'author name'
        },
        { 
          id: 2, 
          title: 'Second Post', 
          image: '/assets/Wearable_1.png',
          fullContent: 'Content of the second post',
          date: 'May 25, 2024',
          author: 'author name'
        },
        { 
          id: 3, 
          title: 'Third Post', 
          image: '/assets/Wearable_1.png',
          fullContent: 'Content of the third post',
          date: 'May 26, 2024',
          author: 'author name'
        }
      ].sort((a, b) => b.id - a.id) 
    }
  }
};
</script>

<style scoped>
.blog-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f9f9f9;
}

.blog-post {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 30px;
  border-left: 5px solid #007BFF;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-post:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.15);
}

.blog-post h2 {
  font-size: 24px;
  color: #333;
}

.blog-post p {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
}

.blog-image {
  width: 50%;
  height: auto;
  margin-bottom: 20px;
}

.post-meta {
  font-size: 14px;
  color: #777;
  margin-bottom: 10px;
}

.post-date, .post-author {
  font-weight: 600;
}
</style>
