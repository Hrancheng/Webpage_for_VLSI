<template>
  <header class="header-bar">
    <div class="logo-text">Mehdi's Lab</div>
    <nav class="navigation">
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <!--<li><router-link to="/about">About</router-link></li> -->
        <li><router-link to="/people">People</router-link></li>
        <li><router-link to="/research">Research</router-link></li>
        <li><router-link to="/prospective_student">Prospective Student</router-link></li>
        <li><router-link to="/outreach">Outreach</router-link></li>
        <!-- <li><li><router-link to="/news">News</router-link></li> -->
       <!-- <li><router-link to="/teaching">Teaching</router-link></li> -->
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo-text {
  font-size: 2.5rem; /* Larger font size for emphasis */
  font-family: 'Georgia', serif; /* Stylish font */
  font-weight: 700; /* Bold weight */
  color: #2c3e50; /* Darker shade for elegance */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Add a subtle shadow for depth */
  letter-spacing: 1px; /* Add some spacing between letters */
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
  font-weight: 500; /* Slightly bold links */
  transition: color 0.3s ease; /* Smooth hover effect */
}

.navigation li a:hover {
  color: #007BFF; /* Change color on hover */
}
/* Mobile-specific styles */
@media (max-width: 768px) {
  .header-bar {
    flex-direction: column; /* Stack logo and nav vertically */
    align-items: flex-start; /* Align items to the left */
    padding: 1rem; /* Maintain consistent padding */
  }

  .logo-text {
    font-size: 2rem; /* Reduce font size for smaller screens */
    margin-bottom: 1rem; /* Add spacing below the logo */
  }

  .navigation ul {
    flex-direction: column; /* Stack navigation items vertically */
    width: 100%; /* Take full width of the screen */
  }

  .navigation li {
    margin: 0.5rem 0; /* Add spacing between items */
  }

  .navigation li a {
    font-size: 1.2rem; /* Increase link font size for better readability */
    color: #000; /* Ensure color consistency */
  }
}
</style>
