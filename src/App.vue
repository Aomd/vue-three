<template>
  <div id="app">
    <!-- vue + three 热插拔、热更新、解耦 环境 -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
   name: 'App',
  }
</script>

<style lang="scss" >
 #app {
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   pointer-events: none;
   z-index: 999;
   overflow: hidden;
 }
</style>