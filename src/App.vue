<template>
  <div id="app">
    <div id="nav">
      <img alt="Honkai Impact 3rd Logo" src="./assets/logo.png">
      <div class="links">
        <router-link to="/">Accueil</router-link>
      </div>
    </div>
    <div id="main">
      <div class="content">
        <router-view/>
      </div>
      <div class="side">
        <status />
      </div>
    </div>
  </div>
</template>

<script>
import Status from '@/components/Status.vue'

export default {
  components: {
    Status
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
}

#nav {
  align-items: center;
  background-color: rgba(50, 50, 255, .3);
  display: flex;
  padding: 10px 20px;

  img {
    height: 4em;
    margin-right: 2em;
  }

  .links {
    a {
      color: #000;

      &:visited {
        color: inherit;
      }

      &:active,
      &:focus {
        color: #333;
      }
    }
  }
}

#main {
  display: flex;
  margin: 0 auto;
  max-width: 1200px;
  padding: 2em;
  width: 100%;

  .content {
    flex-grow: 1;
  }

  .side {
    margin-left: 2em;
    width: 300px;
  }
}
</style>
