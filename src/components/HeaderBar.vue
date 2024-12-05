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
            <!-- 根据需要添加更多的研究部分 -->
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
  name: 'HeaderBar',
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
  font-size: 2.5rem;
  font-family: 'Georgia', serif;
  font-weight: 700;
  color: #2c3e50;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
}

.navigation .main-menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.navigation .main-menu > li {
  position: relative; /* 确保下拉菜单相对于父元素定位 */
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

/* 下拉菜单样式 */
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
  display: none; /* 初始状态下隐藏下拉菜单 */
}

.dropdown:hover .dropdown-menu {
  display: block; /* 当鼠标悬停时显示下拉菜单 */
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

/* 防止下拉菜单的 ul 继承 flex 布局 */
.dropdown-menu {
  flex-direction: column;
}

.dropdown-menu li {
  display: block;
}

/* 移动端样式 */
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

  /* 移动端下拉菜单调整 */
  .dropdown-menu {
    position: static;
    display: none; /* 在移动端初始状态下也隐藏下拉菜单 */
    box-shadow: none;
    border: none;
  }

  .dropdown.open .dropdown-menu {
    display: block; /* 通过添加类名控制下拉菜单显示 */
  }

  /* 禁用移动端的悬停效果 */
  .dropdown:hover .dropdown-menu {
    display: none;
  }
}
</style>
