<template>
  <div class="everything">
    <div id="image"></div>
  </div>
</template>

<script>

export default{
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
h2 {
  float: left;
  width:100%;
}

#image{
  height: 95%;
  width: 90%;
  border-radius: 10px;
  background: url('../assets/images/land_image.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* p {
  // first we make all instances of this transparent.
  opacity: 0;
  // as we're using the same animation for each instance, call it here so we're not repeating it
  animation: fadeInUp 1s ease-in-out 0s forwards;

  // then define the animation delay in each class
  &.first {
    animation-delay: 1s;
  }
  &.second {
    animation-delay: 3s;
  }
  &.third {
    animation-delay: 5s;
  }
  &.fourth {
    animation-delay: 7s;
  }
  &.fifth {
    animation-delay: 9s;
  }
  &.sixth {
    animation-delay: 11s;
  }
 } */
</style>
