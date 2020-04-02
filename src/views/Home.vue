<template>
  <div class="home">
    <div class="news">
      <h2>Actualités</h2>
      <!-- <markdown-it-vue class="md-news" :content="news.update" /> -->
      <markdown-it-vue class="md-news" :content="news.pc" />
    </div>
    <div class="side">
      <div class="note">
        &nbsp;<v-icon name="info-circle" scale="1" />&nbsp;
        <strong>Ce site n'est pas officiel.</strong>
        Il regroupe des ressources en français pour le jeu
        <a href="https://honkaiimpact3.mihoyo.com/global/fr-fr"
          target="_blank" rel="noopener noreferrer">Honkai Impact 3rd</a>.
      </div>
      <status />
      <download />
      <social />
    </div>
  </div>
</template>

<script>
import Status from '@/components/Status.vue'
import Download from '@/components/Download.vue'
import Social from '@/components/Social.vue'
// import news35 from 'raw-loader!@/assets/md/news-3.5.md'
import newsPC from 'raw-loader!@/assets/md/news-pc.md'

export default {
  name: 'home',
  components: {
    Status,
    Download,
    Social
  },
  data () {
    return {
      news: {
        // update: news35,
        pc: newsPC
      }
    }
  }
}
</script>

<style lang="scss">
.home {
  display: flex;

  .news {
    flex-grow: 1;

    .md-news {
      border: 1px solid #000;
      box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, .25);
      margin-bottom: 1em;
      padding: 10px;
    }
  }

  .side {
    margin-left: 2em;
    min-width: 370px;
    width: 370px;

    h3 {
      margin: 0 0 5px;
    }

    .note {
      background-color: #e6f7ff;
      font-size: .85em;
      padding: 5px 10px;
      border-radius: 5px;
      margin-top: -20px;
      margin-bottom: 16px;

      .fa-icon {
        vertical-align: -3px;
      }

      a {
        color: inherit;

        &:visited,
        &:hover {
          color: inherit;
        }
      }
    }
  }
}

@media screen and (max-width: 950px) {
  .home {
    flex-direction: column;

    .side {
      margin-left: 0;
      min-width: unset;
      order: 1;
      text-align: center;
      width: 100%;

      .note {
        margin-top: 0;
      }

      .status {
        margin: 0 0 1em;
      }

      .download {
        display: inline-block;
        margin: 0 1em 1em;
      }

      .social {
        display: inline-block;
        margin: 0 1em 1em;
        vertical-align: top;
      }
    }

    .news {
      order: 2;
    }
  }
}
</style>
