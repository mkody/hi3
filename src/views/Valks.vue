<template>
  <div class="valks">
    <markdown-it-vue class="md-body" :content="content" :options="mdOptions" />
  </div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
import valksMD from 'raw-loader!@/assets/md/valks.md'

export default {
  name: 'valks',
  components: {
    MarkdownItVue
  },
  data () {
    return {
      content: valksMD,
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
