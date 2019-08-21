<template>
  <div class="guides">
    <markdown-it-vue class="md-body" :content="content" :options="options" />
  </div>
</template>

<script>
import guidesMD from 'raw-loader!@/assets/md/guides.md'

export default {
  name: 'guides',
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
