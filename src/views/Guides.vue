<template>
  <div class="guides">
    <markdown-it-vue class="md-body" :content="content" />
  </div>
</template>

<script>
import guidesMD from 'raw-loader!@/assets/md/guides.md'

export default {
  name: 'guides',
  metaInfo: {
    title: 'Guides et Liens - HI3',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: 'Une petite liste de guides et de liens pratiques pour Honkai Impact 3rd.'
      }
    ]
  },
  data () {
    return {
      content: guidesMD
    }
  }
}
</script>
