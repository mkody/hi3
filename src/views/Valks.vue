<template>
  <div class="valks">
    <markdown-it-vue class="md-body" :content="content" />
  </div>
</template>

<script>
import valksMD from 'raw-loader!@/assets/md/valks.md'

export default {
  name: 'valks',
  data () {
    return {
      content: valksMD
    }
  }
}
</script>
