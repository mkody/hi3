<template>
  <div id="app">
    <header>
      <nav>
        <img alt="Honkai Impact 3rd Logo" src="./assets/logo.png">
        <div class="links">
          <router-link to="/">Accueil</router-link> -
          <router-link to="/valks">Liste de Valkyries</router-link> -
          <router-link to="/guides">Guides et Liens</router-link>
        </div>
      </nav>
    </header>
    <div id="main">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
body {
  color: #24292e;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  overflow-y: scroll;
  word-wrap: break-word;
}

header {
  background-color: #4c5e7c;
  color: #fff;

  nav {
    align-items: center;
    display: flex;
    height: 30px;
    margin: 0 auto;
    max-width: 1200px;
    padding: 10px 20px;
    width: calc(100% - 4em);

    img {
      height: 64px;
      margin-left: 20px;
      position: absolute;
      top: 7px;
    }

    .links {
      margin-left: 155px;

      a {
        color: inherit;
        text-decoration: none;

        &:visited {
          color: inherit;
        }

        &:hover,
        &:focus {
          border-bottom: 2px #eee dashed;
        }

        &.router-link-exact-active {
          border-bottom: 2px #fff solid;
        }
      }
    }
  }
}

#main {
  margin: 0 auto;
  max-width: 1200px;
  padding: 2em;
  width: calc(100% - 4em);

  h2 {
    border-bottom: 1px solid #eaecef;
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 .5em;
    padding-bottom: .3em;
  }
}
</style>
