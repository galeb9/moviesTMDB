<template>
  <div id="app">
    <div class="main">
      <router-view></router-view>

    </div>
  </div>
</template>

<script>

export default {
  name: "App"
}
</script>

<style lang="scss"> 
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');
#app {
  font-family: 'Source Sans Pro', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .main {
    max-width: 1400px;
    padding: 0 40px;
    margin: 50px auto;
    min-height: 90vh;
    .container--box {
        box-shadow: $shadow;
        border: 1px solid $lightGrey;
        border-radius: $radius;
    }
    .popular-movies__heading {
      margin-bottom: 16px;
    }
    .popular-movies {
      display: flex;
      gap: 30px;
    }
  }
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
