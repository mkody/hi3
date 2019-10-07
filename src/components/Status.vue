<template>
  <div class="status">
    <h3>Statut</h3>
    <div class="servers">
      <span
        :class="{ 'active': selServ === 'NA' }"
        @click="setServ('NA')">
        NA</span>
      <span
        :class="{ 'active': selServ === 'EU' }"
        @click="setServ('EU')">
        EU</span>
      <span
        :class="{ 'active': selServ === 'SEA' }"
        @click="setServ('SEA')">
        SEA</span>
      <span
        :class="{ 'active': selServ === 'TW' }"
        @click="setServ('TW')">
        TW</span>
      <span
        :class="{ 'active': selServ === 'CN' }"
        @click="setServ('CN')">
        CN</span>
      <span
        :class="{ 'active': selServ === 'KR' }"
        @click="setServ('KR')">
        KR</span>
      <span
        :class="{ 'active': selServ === 'JP' }"
        @click="setServ('JP')">
        JP</span>
    </div>
    <table class="details">
      <tr>
        <td>Version :&nbsp;</td>
        <td>{{ sVer }} <v-icon scale="0.8" name="calendar" :title="sVerDate" /></td>
      </tr>
      <tr>
        <td>Heure serveur :&nbsp;</td>
        <td>{{ sTime }}</td>
      </tr>
      <tr>
        <td>Reset quotidien :&nbsp;</td>
        <td>Dans {{ sReset }}</td>
      </tr>
      <tr>
        <td>Dirac/QS :&nbsp;</td>
        <td>{{ sAbyss }}</td>
      </tr>
      <tr>
        <td>Samsara/HQ :&nbsp;</td>
        <td>Reset dans {{ sOW }}</td>
      </tr>
      <tr v-if="sMT">
        <td>MàJ prévue :&nbsp;</td>
        <td>{{ sMT }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { DateTime } from 'luxon'

export default {
  name: 'status',
  data () {
    return {
      selServ: 'EU',
      sNow: null,
      servers: {
        EU: {
          version: '...',
          date: 'Loading...',
          timezone: 'UTC+1',
          mt: {
            day: 11,
            month: 11,
            hour: 7,
            dur: 6
          }
        },
        NA: {
          version: '...',
          date: 'Loading...',
          timezone: 'UTC-5',
          mt: {
            day: 11,
            month: 11,
            hour: 1,
            dur: 6
          }
        },
        SEA: {
          version: '...',
          date: 'Loading...',
          timezone: 'UTC+8',
          mt: {
            day: 11,
            month: 11,
            hour: 12,
            dur: 6
          }
        },
        KR: {
          version: '...',
          date: 'Loading...',
          timezone: 'UTC+9',
          mt: '2019-11-11'
        },
        JP: {
          version: '...',
          date: 'Loading...',
          timezone: 'UTC+9',
          mt: {
            day: 11,
            month: 11,
            hour: 11,
            dur: 7
          }
        },
        TW: {
          version: '...',
          date: 'Loading...',
          timezone: 'UTC+8',
          mt: '2019-11-11'
        },
        CN: {
          version: '...',
          date: 'Loading...',
          timezone: 'UTC+8',
          mt: {
            day: 14,
            month: 10,
            hour: 10,
            dur: 5
          }
        }
      }
    }
  },
  mounted () {
    this.selServ = localStorage.getItem('server') || 'EU'

    // Don't continue if pre-rendering
    if (window.__PRERENDER_INJECTED) return

    this.tick()
    setInterval(this.tick, 1000)

    // TODO: Fetch update dates too
    fetch('https://s.kdy.ch/hi3s.json')
      .then(r => r.json())
      .then(j => {
        this.servers.EU.version = this.servers.NA.version = `${j.global.version}(${j.global.build})`
        this.servers.EU.date = this.servers.NA.date = j.global.date

        this.servers.SEA.version = `${j.os.version}(${j.os.build})`
        this.servers.SEA.date = j.os.date

        this.servers.KR.version = `${j.kr.version}(${j.kr.build})`
        this.servers.KR.date = j.kr.date

        this.servers.JP.version = `${j.jp.version}(${j.jp.build})`
        this.servers.JP.date = j.jp.date

        this.servers.TW.version = `${j.tw.version}(${j.tw.build})`
        this.servers.TW.date = j.tw.date

        this.servers.CN.version = `${j.gf.version}(${j.gf.build})`
        this.servers.CN.date = j.gf.date
      })
  },
  methods: {
    dDiff (diff) {
      let d = ''
      let h = diff.hours
      let m = Math.floor(diff.minutes + 1)

      if (m === 60) { // because of that +1
        h += 1
        m = 0
      }

      if (h > 48) { // display days if over 48h
        d = Math.floor(h / 24) + 'j '
        h -= Math.floor(h / 24) * 24
      }

      if (h < 10) h = '0' + h
      if (m < 10) m = '0' + m

      return d + h + 'h' + m
    },
    tick () {
      this.sNow = DateTime.fromObject({ zone: this.servers[this.selServ].timezone })
    },
    setServ (s) {
      localStorage.setItem('server', s)
      this.selServ = s
      this.tick()
    }
  },
  computed: {
    sVer () {
      return this.servers[this.selServ].version
    },
    sVerDate () {
      return this.servers[this.selServ].date
    },
    sMT () {
      const mt = this.servers[this.selServ].mt
      if (this.sNow === null) return null

      if (typeof mt === 'string') {
        if (mt === this.servers[this.selServ].date) return null
        if ((Date.parse(mt) + 82800000) > Date.now()) return 'le ' + mt
      } else if (typeof mt === 'object') {
        // set countdown
        let r = DateTime.fromObject({
          day: mt.day,
          month: mt.month,
          hour: mt.hour,
          minute: 0,
          seconds: 0,
          zone: this.servers[this.selServ].timezone
        })

        const diff = r.diff(this.sNow, ['hours', 'minutes'])

        if (diff.minutes < 0) {
          // we've past it, change diff to duration
          const nR = r.plus({ hours: mt.dur })
          const nDiff = nR.diff(this.sNow, ['hours', 'minutes'])

          if (nDiff.minutes < 0) return null

          return 'reste ' + this.dDiff(nDiff)
        }

        return 'dans ' + this.dDiff(diff)
      }

      return null
    },
    sTime () {
      if (this.sNow === null) return '...'

      return this.sNow.toFormat('HH:mm:ss') + ' (' + this.servers[this.selServ].timezone + ')'
    },
    sReset () {
      if (this.sNow === null) return '...'

      let r = DateTime.fromObject({ hour: 4, minute: 0, seconds: 0, zone: this.servers[this.selServ].timezone })
      if (this.sNow.hour >= 4) r = r.plus({ days: 1 })

      const diff = r.diff(this.sNow, ['hours', 'minutes'])
      return this.dDiff(diff)
    },
    sAbyss () {
      if (this.sNow === null) return '...'

      const n = this.sNow
      let o1 = DateTime.fromObject({ weekday: 1, hour: 15, minute: 0, seconds: 0, zone: this.servers[this.selServ].timezone })
      let e1 = o1.plus({ hours: 55 })
      let o2 = DateTime.fromObject({ weekday: 5, hour: 15, minute: 0, seconds: 0, zone: this.servers[this.selServ].timezone })
      let e2 = o2.plus({ hours: 55 })

      let diff
      if (n.weekday === 7) o1 = o1.plus({ days: 7 })

      if (n >= o1 && n < e1) {
        diff = e1.diff(n, ['hours', 'minutes'])
        return 'Reste ' + this.dDiff(diff)
      } else if (n >= o2 && n < e2) {
        diff = e2.diff(n, ['hours', 'minutes'])
        return 'Reste ' + this.dDiff(diff)
      } else if (n >= e1 && n < o2) {
        diff = o2.diff(n, ['hours', 'minutes'])
        return 'Ouvre dans ' + this.dDiff(diff)
      } else {
        diff = o1.diff(n, ['hours', 'minutes'])
        return 'Ouvre dans ' + this.dDiff(diff)
      }
    },
    sOW () {
      if (this.sNow === null) return '...'

      const n = this.sNow
      let r1 = DateTime.fromObject({ weekday: 1, hour: 4, minute: 0, seconds: 0, zone: this.servers[this.selServ].timezone })
      let r2 = DateTime.fromObject({ weekday: 4, hour: 4, minute: 0, seconds: 0, zone: this.servers[this.selServ].timezone })
      let r3 = DateTime.fromObject({ weekday: 6, hour: 4, minute: 0, seconds: 0, zone: this.servers[this.selServ].timezone })

      let diff
      if (n.weekday > 5) r1 = r1.plus({ days: 7 })

      if (n < r3) diff = r3.diff(n, ['hours', 'minutes'])
      if (n < r2) diff = r2.diff(n, ['hours', 'minutes'])
      if (n < r1) diff = r1.diff(n, ['hours', 'minutes'])

      return this.dDiff(diff)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.status {
  cursor: default;
  margin-bottom: 2em;

  .servers {
    display: flex;

    span {
      border-color: #aaa #aaa #000 #aaa;
      border-radius: 5px 5px 0 0;
      border-style: solid;
      border-width: 1px;
      cursor: pointer;
      flex-grow: 1;
      font-size: .9em;
      padding: 2px 0;
      text-align: center;

      &.active {
        border-color: #000 #000 transparent #000;
      }
    }
  }

  .details {
    border-color: transparent #000 #000 #000;
    border-radius: 0 0 5px 5px;
    border-style: solid;
    border-width: 1px;
    line-height: 1.2em;
    margin-top: -1px;
    padding: 5px 10px;
    width: 100%;

    .fa-icon {
      cursor: help;
    }

    td {
      &:first-child {
        font-weight: bold;
        text-align: right;
      }

      &:not(:first-child) {
        font-family: monospace;
        font-size: 1.2em;
      }
    }
  }
}
</style>
