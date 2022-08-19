<template>
  <v-container>
    <v-row no-gutters>
      <HomeCarouselAlcoholFilter
        :cols="2"
        :alcoholLevelVolume="alcoholLevelVolume"
        @updateAlcoholVolume="updateAlcoholVolume"
      />
      <HomeCarouselIbuFilter
        :cols="2"
        :ibu="ibu"
        @updateIbu="updateIbu"
      />
      <HomeCarouselEbcFilter
        :cols="2"
        :ebc="ebc"
        @updateEbc="updateEbc"
      />
      <HomeCarouselFoodPairingFilter
        :cols="2"
        :foodPairing="foodPairing"
        @updateFood="updateFood"
      />
      <HomeCarouselBrewedDateFilter
        :cols="4"
        :minDate="minDate"
        :maxDate="maxDate"
        @updateMinDate="updateMinDate"
        @updateMaxDate="updateMaxDate"
      />

    </v-row>
  </v-container>
</template>

<script>
import HomeCarouselIbuFilter from './home-carousel-filters/HomeCarouselIbuFilter.vue'
import HomeCarouselEbcFilter from './home-carousel-filters/HomeCarouselEbcFilter.vue'
import HomeCarouselAlcoholFilter from './home-carousel-filters/HomeCarouselAlcoholFilter.vue'
import HomeCarouselBrewedDateFilter from './home-carousel-filters/HomeCarouselBrewedDateFilter.vue'
import HomeCarouselFoodPairingFilter from './home-carousel-filters/HomeCarouselFoodPairingFilter.vue'
/* utils */
import { AppRegularInputDelay } from '@app/utils/app.input-delay.util'

export default {
  name: 'HomeCarouselPhFilter',
  components: {
    HomeCarouselAlcoholFilter,
    HomeCarouselIbuFilter,
    HomeCarouselEbcFilter,
    HomeCarouselBrewedDateFilter,
    HomeCarouselFoodPairingFilter
  },
  data: () => ({
    ibu: [20, 80],
    ebc: [25, 60],
    foodPairing: '',
    alcoholLevelVolume: [0, 45],
    minDate: new Date().toISOString().substr(0, 7),
    maxDate: new Date().toISOString().substr(0, 7)
  }),
  computed: {
    formattedMinDate () {
      const [year, month] = this.minDate.split('-')
      return `${month}-${year}`
    },
    formattedMaxDate () {
      const [year, month] = this.maxDate.split('-')
      return `${month}-${year}`
    }
  },
  methods: {
    updateAlcoholVolume (value) {
      this.alcoholLevelVolume = value
    },
    updateIbu (value) {
      this.ibu = value
    },
    updateEbc (value) {
      this.ebc = value
    },
    updateFood (value) {
      this.foodPairing = value
    },
    updateMinDate (value) {
      this.minDate = value
    },
    updateMaxDate (value) {
      this.maxDate = value
    }
  },
  watch: {
    alcoholLevelVolume: {
      handler: AppRegularInputDelay(function (value) {
        this.$emit('alcoholLevelVolumeChanged', value)
      }),
      deep: true
    },
    ibu: {
      handler: AppRegularInputDelay(function (value) {
        this.$emit('ibuChanged', value)
      }),
      deep: true
    },
    ebc: {
      handler: AppRegularInputDelay(function (value) {
        this.$emit('ebcChanged', value)
      }),
      deep: true
    },
    foodPairing: {
      handler: AppRegularInputDelay(function (value) {
        this.$emit('foodPairingChanged', value)
      })
    },
    minDate: {
      handler: AppRegularInputDelay(function () {
        this.$emit('brewedMinDateChanged', this.formattedMinDate)
      })
    },
    maxDate: {
      handler: AppRegularInputDelay(function () {
        this.$emit('brewedMaxDateChanged', this.formattedMaxDate)
      })
    }
  }
}
</script>

<style lang="scss">
.v-input__slot {
  border-radius: 0 !important;
}
</style>
