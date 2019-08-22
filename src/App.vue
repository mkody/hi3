<template>
  <div id="app">
    <header>
      <nav>
        <router-link class="logo" to="/">
          <img alt="Honkai Impact 3rd Logo" src="./assets/logo.png">
        </router-link>
        <div class="links">
          <router-link to="/">Accueil</router-link> -
          <router-link to="/valks"><span>Liste des </span>Valkyries</router-link> -
          <router-link to="/guides">Guides<span> et Liens</span></router-link>
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
    max-width: 1280px;
    padding: 10px 20px;
    width: calc(100% - 4em);

    .logo {
      text-decoration: none;

      img {
        height: 64px;
        margin-left: 20px;
        position: absolute;
        top: 7px;
      }
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
  max-width: 1280px;
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

@media screen and (max-width: 950px) {
  header nav {
    .logo img {
      margin-left: -20px;
    }

    .links {
      margin-left: 100px;

      span {
        display: none;
      }
    }
  }

  #main {
    margin: 0;
    padding: 2em .5em;
    width: calc(100% - 1em);
  }
}
</style>
