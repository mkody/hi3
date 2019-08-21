<template>
  <div class="home">
    <div class="news">
      <h2>Actualités</h2>
      <markdown-it-vue class="md-news" :content="news.pc" :options="mdOptions" />
      <markdown-it-vue class="md-news" :content="news.update" :options="mdOptions" />
    </div>
    <div class="side">
      <div class="note">
        &nbsp;<v-icon name="info-circle" scale="1" />&nbsp;
        Ce site n'est pas officiel. Il regroupe des ressources en français pour le jeu
        <a href="http://www.global.honkaiimpact3.com/"
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
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
import news33 from 'raw-loader!@/assets/md/news-3.3.md'
import newsPC from 'raw-loader!@/assets/md/news-pc.md'

export default {
  name: 'home',
  components: {
    Status,
    Download,
    Social,
    MarkdownItVue
  },
  data () {
    return {
      news: {
        update: news33,
        pc: newsPC
      },
      mdOptions: {
        linkAttributes: {
          target: '_blank',
          rel: 'noopener noreferrer'
        },
        breaks: true,
        html: true
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

      h4 {
        font-size: 1.1em;
        margin-bottom: .5em;
      }

      h5 {
        font-weight: bold;
        margin-bottom: .5em;
        margin-top: 1.5em;

        &:before {
          content: '⮞ '
        }
      }

    img {
        display: block;
        margin: 0 auto;
        max-width: 480px;
        width: 100%;
      }
    }
  }

  .side {
    margin-left: 2em;
    min-width: 350px;
    width: 350px;

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
      order: 1;
      text-align: center;
      width: 100%;

      .note {
        margin-top: 0;
      }

      .download {
        display: inline-block;
        margin-right: 2em;
      }

      .social {
        display: inline-block;
        vertical-align: top;
      }
    }

    .news {
      order: 2;
    }
  }
}
</style>
