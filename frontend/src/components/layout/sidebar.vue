<template>
  <div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo column">
      <div v-bind:key="item.name" v-for="item in menu">
        <el-menu-item :index="index" @click="resolveIndex(item.componentName)">
          <span>{{item.name}}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
import menu from '@/config/menu-config'

export default {
  components: {
  },
  data () {
    return {
      menu: menu,
      index: '1'
    }
  },
  methods: {
    resolveIndex (componentName) {
      switch (componentName) {
        case 'home': this.index = '1'; break
        case 'currentlyAiring': this.index = '2'; break
        case 'airingToday': this.index = '3'; break
        case 'posts': this.index = '4'; break
        case 'chat': this.index = '5'; break
        default: this.index = '1'
      }
      this.$router.push(componentName)
    }
  }
}
</script>

<style scoped>
.column {
  width: 10em;
  margin-top: 10px;
  font-family: Light;
  text-transform: uppercase;
  font-size: 1em;
  border: none;
}

</style>
