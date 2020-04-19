<template>
  <main id="app">
      <app-menu></app-menu>
    <section class="app-container">
       <router-view></router-view>
      
    </section>
  </main>
  
</template>

<script>
import Menu from '@/components/Menu'
export default {
  name: 'App',
  components: {
    'app-menu': Menu
  },
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main,section{
  position: relative;
  margin: 0px;
}
.app-container {
  margin-top: 60px;
  min-height: calc(100vh - 120px);
}
</style>
