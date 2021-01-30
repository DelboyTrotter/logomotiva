<template>
  <div id="app">
    <A></A>
  </div>
</template>

<script>
import A from '@/layouts/A';

export default {
  name: 'App',
  components: {
    A,
  },
};
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  #app {
    font-family: 'Roboto', sans-serif;
  }
</style>
