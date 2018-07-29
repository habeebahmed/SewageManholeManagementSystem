<template>
    <div class="row">
      <div id="hamburger">
        <div id="nav-icon3" @click="toggleSidebar()" v-bind:class="{ open: isActive }">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="logo">
        <h2 style="font-family:ExtraBold;margin-left:20px">HMWSSB</h2>
        <h2></h2>
      </div>

      <img src="..\..\assets\icons\land_logo.svg" class="logoIcon"/>

      <div class="sign">
        <signInPart/>
      </div>
    </div>
</template>

<script>
import signInPart from './signInPart'

export default {
  components: {
    signInPart
  },
  data () {
    return {
      isActive: true
    }
  },
  methods: {
    toggleSidebar () {
      this.isActive = !this.isActive
      this.$emit('toggleSidebar')
    }
  }
}
</script>

<style scoped>
@import url('./css/hamburgericon.css');

.row {
  background-color: #DBE6F1;
  width: 100%;
  height: 60px;
  display: grid;
  grid-template-columns: 2% 7% 38% auto 10% 10%;
  grid-template-rows: 20% 15% auto;
  border-bottom: 1px solid #ccc;
}

#hamburger {
  grid-column-start: 2;
  grid-row-start: 3;
}

.logo {
  font-size: 0.6rem;
  grid-column-start: 3;
  grid-row-start: 2;
}
.logo h2 {
  float:left;
  font-size: 2em;
  padding-top: 5px;
  color: #1492e6;
}

.logoIcon {
  grid-column-start: 4;
  grid-row-start: 2;
  height: 2rem;
}

.sign {
  grid-column-start: 5;
  grid-row-start: 1;
}

</style>
