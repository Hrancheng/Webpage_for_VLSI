<template>
  <header class="header-bar">
    <img src="@/assets/Mchip.png" alt="SLED Logo" class="logo" />
    <nav class="navigation">
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <!--<li><router-link to="/about">About</router-link></li> -->
        <li><router-link to="/news">News</router-link></li>
        <li><router-link to="/people">People</router-link></li>
        <li><router-link to="/research">Research</router-link></li>
        <li><router-link to="/publication">Publication</router-link></li>
        <li><router-link to="/teaching">Teaching</router-link></li>
        <li><router-link to="/blog">Blog</router-link></li>
        <!-- ...other navigation items -->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar'
};
</script>

<style scoped>
.header-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #FFF;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo {
  width: 100px;
}

.navigation ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.navigation li a {
  margin: 0 10px;
  text-decoration: none;
  color: #000;
}
</style>
