<template>
  <header class="header-bar">
    <img src="@/assets/Mchip.png" alt="SLED Logo" class="logo" />
    <nav class="navigation">
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><a href="#">News</a></li>
        <li><router-link to="/people">People</router-link></li>
        <li><a href="#">Research</a></li>
        <li><a href="#">Publication</a></li>
        <li><a href="#">Teaching</a></li>
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
  width: 100px; /* Adjust based on your logo's size */
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
