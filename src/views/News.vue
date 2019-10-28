<template>
  <div class="guides">
    <markdown-it-vue class="md-body" :content="content" />
  </div>
</template>

<script>
export default {
  name: 'news',
  metaInfo: {
    title: 'News - HI3',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: 'Actualités des version d\'Honkai Impact 3rd.'
      }
    ]
  },
  data () {
    return {
      content: '',
      hashCHange: null
    }
  },
  mounted () {
    this.fetchNews()
    window.addEventListener('hashchange', this.fetchNews)
  },
  methods: {
    fetchNews () {
      const h = window.location.hash.substr(1)
      if (h !== '') {
        fetch(`/md/${h}.md`)
          .then(r => r.text())
          .then(t => {
            this.content = t
          })
      } else {
        this.content = `
### Aucune news sélectionnée.

- [3.5](#news-3.5)
- [3.4](#news-3.4)
- [3.3](#news-3.3)
- [Version PC en Chine](#news-pc)
`
      }
    }
  }
}
</script>
