<!-- Base template with navbar and home menu -->
<template v-if="$width < 1500">
  <div id="wrapper">
    <div class="burger-menu" @click="showMobileMenu = !showMobileMenu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
      </div>
      <nav class="navbar" v-bind:class="{ 'visible': showMobileMenu }">
          <div class="navbar-left">
            <router-link to="/" class="navbar-Item">RELOAD</router-link>
          </div>
          <div class="navbar-right">
            <router-link to="/tickets" class="navbar-Item">TICKETS</router-link>
            <router-link to="/galery" class="navbar-Item">GALERIE</router-link>
          <!-- <router-link to="/contact" class="navbar-Item">KONTAKT</router-link> -->
        </div>
      </nav>

    
      <section class="section-page">
        <router-view/>
      </section>
  </div>
  
  <footer>
      <p class="has-text-centered" id="footer-instagram"><a href="https://www.instagram.com/reload.wav" target="_blank" class="fab fa-instagram"></a></p>
      <p class="has-text-centered"><router-link to="/impressum">Impressum</router-link></p>
      <p class="has-text-centered">©2023 by <span class="reload-word">RELOAD</span></p>
    </footer>
</template>

<script>
import axios from 'axios'

export default {

  data() {
    return {
      showMobileMenu: false,
      width: window.innerWidth,
    }
  },
  mounted() {
    const homeButton = document.querySelector('.navbar-left')

    homeButton.addEventListener('click', () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    })

    window.addEventListener("resize", this.handleResize);
    document.addEventListener('click', event => {
        if (!event.target.closest('.burger-menu') && this.showMobileMenu) {
            this.showMobileMenu = false;
        }
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
        this.width = window.innerWidth;
        if(this.width >= 1500) {
            this.showMobileMenu = false;
            document.querySelector('.navbar').classList.remove('visible');
        }
    },
    toggleMobileMenu() {
        this.showMobileMenu = !this.showMobileMenu;
        document.querySelector('.navbar').classList.toggle('visible');
    },
  },
  // Computed values throughout the whole webapp
  computed: {
    isHomeRoute() {
      return this.$route.path === '/';
    }
  }
}


</script>

<style lang="scss">
// @import '../node_modules/bulma';
@import './assets/styles/stylesheet.css';

@font-face {
  font-family: 'NokiaKokia';
  src: url("src/assets/fonts/NokiaKokia.woff2");
}
.nokiaKokia {
  font-family: 'NokiaKokia';
}

.bar {
    width: 3rem;
    height: 0.2rem;
    margin: 1rem;
    color: black;
    background-color: lightgray;
    transition: 0.4s;
}

.burger-menu {
      display: none;
  }


/* Add the visible class to show the navbar */
.navbar.visible {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    background-color: transparent;
    z-index: 200;
    text-align: center;
}

.navbar {
    display: flex;
    padding-top: 1rem;
    padding-bottom: 1rem;
    justify-content: space-between;
    background-color: black;
    width: 100vw;
    overflow: hidden;
    position: fixed;
    font-size: 1.25rem;
    z-index: 200;
}

.navbar-left {
  background-color: transparent;
  justify-content: flex-start;
}

.navbar-right {
  background-color: transparent;
  justify-content: flex-end;
  box-sizing: content-box;
}

.navbar-Item {
    display: inline-block;
    position: relative;
    font-size: larger;
    align-items: center;
    justify-content: flex-end; /* aligns all other children to the right */
    color: white;
    text-decoration: none;
    background-color: transparent;
    padding: 0.5rem;
    margin-right: 1rem;
    width: fit-content;
    font-family: 'NokiaKokia';
    src: url("src/assets/fonts/NokiaKokia.woff2");
    box-sizing: content-box;
}

.navbar-Item:after {
  display: block;
  content: '';
  border-bottom: solid 0.3rem white;  
  transform: scaleX(0);  
  transition: transform 0.3s ease-in-out;
  width: 100%;
}

.navbar-Item:after{ 
  transform-origin: 100% 50%; 
}

.navbar-Item:hover:after{ 
  transform: scaleX(1); 
  transform-origin:   0% 50%; 
}

.navbar-Item:hover {
    color: white;
}

.navbar-Item:visited {
    color: white;
}
@media (max-width: 1300px) {

    .navbar {
        display: none;
    }
    /* Show the burger menu icon */
    .burger-menu {
        display: block;
        position: fixed;
        right: 0;
        background-color: rgba(0, 0, 0, 0.76);
        margin-top: 1rem;
        z-index: 9999;
    }
    .navbar-right {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 0;
    }
    .navbar-left {
      margin-bottom: 0.4rem;
    }

    .navbar.visible {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-self: center;
      position: fixed;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.76);
      z-index: 9998;
      font-size: 2rem;
    }
    .navbar-Item:before {
      top: 4rem;
  }
}

@media (max-width: 500px) {
    
  .navbar.visible {
      font-size: medium;
    }
  }
</style>
