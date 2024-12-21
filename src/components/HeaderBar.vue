<template>
  <header class="header-bar">
    <div class="logo-text">Saligane's Lab</div>
    <nav class="navigation">
      <ul class="main-menu">
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/people">People</router-link></li>
        <li class="dropdown">
          <router-link to="/research" class="dropdown-toggle">Research</router-link>
          <ul class="dropdown-menu">
            <li><router-link to="/research/openfasoc">IC Design Automation</router-link></li>
            <li><router-link to="/research/cryogenic">Cryogenic Design</router-link></li>
            <li><router-link to="/research/energy-efficient">Hardware Security</router-link></li>
            <li><router-link to="/research/codesign">Edge AI Accelerators @ software/hardware co-design</router-link></li>
            <li><router-link to="/research/bio-electrical">Digital Health and Biosensors</router-link></li>
          </ul>
        </li>
        <li><router-link to="/prospective_student">Prospective Student</router-link></li>
        <li><router-link to="/outreach">Outreach</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderBar",
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const header = document.querySelector(".header-bar");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
        header.classList.add("shrink");
      } else {
        header.classList.remove("scrolled");
        header.classList.remove("shrink");
      }
    },
  },
};
</script>

<style scoped>
.header-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 1);
  backdrop-filter: blur(0px);
  height: 100px; /* Default height */
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease, height 0.3s ease, padding 0.3s ease;
}

.header-bar.scrolled {
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.header-bar.shrink {
  height: 80px; /* Maintain original height */
  padding: 1rem; /* Maintain original padding */
}

.logo-text {
  font-size: 2.5rem;
  font-family: 'Georgia', serif;
  font-weight: 700;
  color: #2c3e50;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
  transition: font-size 0.3s ease;
}

.header-bar.shrink .logo-text {
  font-size: 2.5rem; /* Maintain original logo text size */
}

.navigation .main-menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.navigation .main-menu > li {
  position: relative;
}

.navigation .main-menu > li > a,
.dropdown-toggle {
  margin: 0 10px;
  text-decoration: none;
  color: #000;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
}

.navigation .main-menu > li > a:hover,
.dropdown-toggle:hover {
  color: #007BFF;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: #FFF;
  border: 1px solid #DDD;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin: 0;
  padding: 0.5rem 0;
  z-index: 1000;
  display: none;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu li {
  padding: 0.5rem 1rem;
}

.dropdown-menu li a {
  color: #000;
  text-decoration: none;
}

.dropdown-menu li a:hover {
  color: #007BFF;
  background-color: #F0F0F0;
}

@media (max-width: 768px) {
  .header-bar {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }

  .logo-text {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .navigation .main-menu {
    flex-direction: column;
    width: 100%;
  }

  .navigation .main-menu > li {
    margin: 0.5rem 0;
  }

  .navigation .main-menu > li > a,
  .dropdown-toggle {
    font-size: 1.2rem;
  }

  .dropdown-menu {
    position: static;
    display: none;
    box-shadow: none;
    border: none;
  }

  .dropdown.open .dropdown-menu {
    display: block;
  }
}
</style>
