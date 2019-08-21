<template>
  <div class="guides">
    <markdown-it-vue class="md-body" :content="content" />
  </div>
</template>

<script>
import guidesMD from 'raw-loader!@/assets/md/guides.md'

export default {
  name: 'guides',
  data () {
    return {
      content: guidesMD
    }
  }
}
</script>
