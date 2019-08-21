<template>
  <div class="guides">
    <markdown-it-vue class="md-body" :content="content" :options="options" />
  </div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
import guidesMD from 'raw-loader!@/assets/md/guides.md'

export default {
  name: 'guides',
  components: {
    MarkdownItVue
  },
  data () {
    return {
      content: guidesMD,
      options: {
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
