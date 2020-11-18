<template>
  <div id="app">
    <Index></Index>
  </div>
</template>

<script>
  const Index = () => import('./components/Index')
  export default {
    name: 'App',
    components: {
      Index
    }
  }
</script>

<style>
  html,body,#app{
    height: 100%;
    padding: 0;
    margin: 0;
  }
</style>
