<template>
  <main id="app">
    <section class="app-container">
       <router-view></router-view>
      
    </section>
    <footer>
    Feito por BAT co.
      </footer>
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
@import url('../static/milligram.css');
@import url('../static/milligram-extends.css');
@import url('../static/style.css');
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
