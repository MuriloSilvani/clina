<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
:root {
  --background-light: #FFFFFF;
  --background: #FAFAFA;

  --text-light: #DEDEDE;
  --text: #545454;
  --text-dark: #111111;

  --primary: #7A23FF;
}

body {
  margin: 0;
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    overflow: auto;
    height: 100vh;
    width: 100vw;
    position: relative;
    background: var(--background);
    color: var(--text);
  }
}
</style>
