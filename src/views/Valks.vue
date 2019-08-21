<template>
  <div class="valks">
    <markdown-it-vue class="md-body" :content="content" :options="mdOptions" />
  </div>
</template>

<script>
import valksMD from 'raw-loader!@/assets/md/valks.md'

export default {
  name: 'valks',
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
