<template>
  <div class="valks">
    <markdown-it-vue class="md-body" :content="content" />
  </div>
</template>

<script>
import valksMD from 'raw-loader!@/assets/md/valks.md'

export default {
  name: 'valks',
  metaInfo: {
    title: 'Liste des valkyries - HI3',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: 'Une liste des valkyries d\'Honkai Impact 3rd avec les noms en anglais et français.'
      }
    ]
  },
  data () {
    return {
      content: valksMD
    }
  }
}
</script>
