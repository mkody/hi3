<template>
  <div class="social">
    <h3>Social <small>(Global & Official)</small></h3>
    <div class="links">
      <a href="https://discord.gg/hi3"
        target="_blank" rel="noopener noreferrer"><v-icon name="brands/discord" title="Discord" scale="1.5" /></a>
      <a href="https://www.facebook.com/global.honkaiimpact"
        target="_blank" rel="noopener noreferrer"><v-icon name="brands/facebook" title="Facebook" scale="1.5" /></a>
      <a href="https://www.twitter.com/HonkaiImpact3rd"
        target="_blank" rel="noopener noreferrer"><v-icon name="brands/twitter" title="Twitter" scale="1.5" /></a>
      <a href="https://www.youtube.com/channel/UCko6H6LokKM__B03i5_vBQQ"
        target="_blank" rel="noopener noreferrer"><v-icon name="brands/youtube" title="YouTube" scale="1.5" /></a>
      <a href="https://www.reddit.com/r/HonkaiImpact3rd/"
        target="_blank" rel="noopener noreferrer"><v-icon name="brands/reddit-alien" title="Reddit" scale="1.5" /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'social'
}
</script>

<style scoped lang="scss">
.social {
  margin-bottom: 2em;

  .links {
    a {
      color: inherit;
      display: inline-block;
      margin-right: 1em;
      text-decoration: none;
    }
  }
}
</style>
