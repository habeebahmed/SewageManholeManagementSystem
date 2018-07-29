<template>
  <div id="app">
      <dhead id="dhead" v-on:toggleSidebar="sidebar = !sidebar"></dhead>
      <div id="body">
        <sidebar id="sidebar" v-if="sidebar"></sidebar>
        <router-view id="router"></router-view>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import dhead from './components/layout/head.vue'
import sidebar from './components/layout/sidebar.vue'
import i18n from 'vue-i18n'

Vue.use(i18n)
Vue.use(ElementUI)
Vue.config.lang = 'en'

export default {
  name: 'App',
  data () {
    return {
      sidebar: true
    }
  },
  created () {
  },
  components: {
    dhead,
    sidebar
  }
}
</script>

<style>

*{
    padding: 0;
    margin: 0;
}

#app {
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 10% auto 10%;
  grid-template-rows: 60px auto 0px;
  overflow: hidden;
}

#dhead {
  grid-column-start: 1;
  grid-column-end: span 4;
  grid-row-start: 1;
  grid-row-end: span 2;
  background-color: #FFF;
  box-shadow: 0px 0px 10px #CED0DB;
}

#body {
  grid-column-start: 2;
  grid-column-end: span 3;
  grid-row-start: 2;
  grid-row-end: span 4;
  display: flex;
  flex-direction: row;
}

#sidebar {
  /* min-width: 400px;
  max-width: 400px; */
  transition: 0.6s;
}

#router{
  display: inline-block;
  padding: 1em 3em;
  min-width: 100%;
  max-width: 100vw;
  float: right;
  overflow-y:scroll;
  position:relative;
  height: 95vh;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h2 {
    font-family: Light;
    color: #4B4B4B;
}

@font-face {
    font-family: ExtraBold;
    src: url('./assets/fonts/Gilroy-Extrabold.otf');
}

@font-face {
    font-family: Light;
    src: url('./assets/fonts/Gilroy-Light.otf');
}

body {
  background: #FFF;
}

button:focus {
  outline:0;
}

input:focus {
  outline:0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.first {
  animation-delay: 1s;
}

.second {
  animation-delay: 3s;
}

.third {
  animation-delay: 5s;
}
/* width */
/* ::-webkit-scrollbar {
    width: 10px;
    float: right;
    position: fixed;
    z-index: 999;
} */

/* Track */
/* ::-webkit-scrollbar-track {
    background: #f1f1f1;
} */

/* Handle */
/* ::-webkit-scrollbar-thumb {
    background: #1492e6;
} */

/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
    background: #9C94B8;
} */
</style>
