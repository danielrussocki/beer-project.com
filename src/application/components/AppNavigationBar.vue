<template>
  <v-navigation-drawer
    floating
    permanent
    width="100%"
  >
    <v-container>
      <v-row no-gutters>
        <v-col
          cols="12"
          sm="1"
        >
          <v-card
            class="pa-2 text-center app-navigation-bar__card"
            outlined
            tile
          >
            <h4 class="app-text-danger">D</h4>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="2"
        >
          <v-card
            class="pa-2 text-center app-navigation-bar__card"
            outlined
            tile
          >
            <h6>100% Jalisco</h6>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-card
            class="pa-2 app-navigation-bar__card"
            outlined
            tile
          >
            <h5 class="app-text-danger app-text__basic-spacing text-center">
              {{ AppNavigationBar.date.day }} / {{ AppNavigationBar.date.month }} / {{ AppNavigationBar.date.year }} - {{ AppNavigationBar.time.hours }}:{{AppNavigationBar.time.minutes}}:{{AppNavigationBar.time.seconds}}
            </h5>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="3"
        >
          <v-card
            class="pa-2 app-navigation-bar__card"
            outlined
            tile
          >
            <h6 class="app-font__6px text-center app-text__small-spacing">Sponsored by Jumex</h6>
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col
          cols="12"
          sm="1"
        >
          <v-card
            class="pa-2 text-center app-navigation-bar__card-bottom"
            outlined
            tile
          >
            <v-img
              max-width="20"
              :src="require('@app/assets/green-face.png')"
            />
          </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="9"
        >
          <v-card
            class="pa-2 app-navigation-bar__card-bottom"
            outlined
            tile
          >
            <h1 class="app-text__basic-spacing text-center app-font__40px">
              The Beer Project
            </h1>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="2"
        >
          <v-card
            class="pa-2 app-navigation-bar__card-bottom"
            outlined
            tile
          >
            <h6 class="text-center">
              <a
                href="https://www.instagram.com/dan.marlboro_/"
                target="_blanck"
                rel="noreferrer"
              >@dan.marlboro_</a>
            </h6>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'AppNavigationBar',
  data: () => ({
    AppNavigationBar: {
      date: {
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate()
      },
      time: {
        hours: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
      }
    }
  }),
  mounted () {
    setInterval(() => this.setAppTime(), 1000)
  },
  methods: {
    setAppTime () {
      const date = new Date()

      /* date */
      const year = date.getFullYear()
      const month = date.getMonth()
      const day = date.getDate()
      /* time */
      const hours = date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()

      /* date */
      this.AppNavigationBar.date.year = year <= 9 ? year.toString().padStart(2, 0) : year
      this.AppNavigationBar.date.month = month <= 9 ? month.toString().padStart(2, 0) : month
      this.AppNavigationBar.date.day = day <= 9 ? day.toString().padStart(2, 0) : day
      /* time */
      this.AppNavigationBar.time.hours = hours <= 9 ? hours.toString().padStart(2, 0) : hours
      this.AppNavigationBar.time.minutes = minutes <= 9 ? minutes.toString().padStart(2, 0) : minutes
      this.AppNavigationBar.time.seconds = seconds <= 9 ? seconds.toString().padStart(2, 0) : seconds
    }
  }
}
</script>
