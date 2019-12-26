<template>
  <div class="download">
    <h3>Télécharger <small>(Global)</small></h3>
    <div class="downloads">
      <a class="btn btn--android"
        href="https://play.google.com/store/apps/details?id=com.miHoYo.bh3global"
        target="_blank" rel="noopener noreferrer"><v-icon name="brands/google-play" /> Play Store</a>
      <a class="btn btn--apk"
        :href="apk"
        target="_blank" rel="noopener noreferrer"><v-icon name="brands/android" /> APK</a>
      <a class="btn btn--ios"
        href="https://apps.apple.com/us/app/honkai-impact-3rd/id1336342304"
        target="_blank" rel="noopener noreferrer"><v-icon name="brands/app-store-ios" /> App Store</a>
      <br>
      <a class="btn btn--windows"
        href="https://download-sea.mihoyo.com/download/os/HI3_Global_Setup.exe"
        target="_blank" rel="noopener noreferrer"><v-icon name="brands/windows" /> Launcher</a>
      <a class="btn btn--mac"
        href="https://fr.bignox.com/fr/download/fullPackage/mac_fullzip"
        target="_blank" rel="noopener noreferrer"><v-icon name="brands/apple" /> Nox pour Mac</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'download',
  data () {
    return {
      apk: 'https://s.kdy.ch/com.miHoYo.bh3global-3.5.1.apk'
    }
  }
}
</script>

<style scoped lang="scss">
.download {
  margin-bottom: 2em;

  .downloads {
    line-height: 1.5em;

    .btn {
      border-radius: 5px;
      border: 1px solid #555;
      color: inherit;
      display: inline-block;
      padding: 5px 10px;
      text-align: center;
      text-decoration: none;

      &:visited {
        color: inherit;
      }

      &--android {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }

      &--apk {
        border-bottom-left-radius: 0;
        border-left: none;
        border-top-left-radius: 0;
      }

      &--ios,
      &--mac {
        margin-left: .5em;
      }

      &--windows {
        margin-top: .5em;
      }

      .fa-icon {
        vertical-align: -2px;
      }
    }
  }
}
</style>
