<template>
  <div>
    <v-container class="my-6">
      <v-row
        no-gutters
        class="home-banner_zebra-background"
      >
        <v-col cols="12">
          <v-carousel
            v-model="model"
            hide-delimiters
          >
            <v-carousel-item
              v-for="(beerGroup, groupIndex) in HomeBanner.beers"
              style="position:relative"
              :key="groupIndex"
              :disabled="carouselLoader"
            >
              <v-container style="height:100%">
                <v-row style="height:100%">
                  <HomeCarouselBeer
                    v-for="(beer, index) in beerGroup"
                    :src="beer.image_url"
                    :alt="beer.name"
                    :key="index"
                    @carouselOpenModal="onBeerClick(beer)"
                  />
                </v-row>
              </v-container>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
    <HomeCarouselSlider
      :value="model"
      :max="HomeBanner.beers.length - 1 || 0"
      @updateHomeSlider="updateHomeSlider"
    />
    <HomeCarouselFilters
      @ibuChanged="ibuChanged"
      @ebcChanged="ebcChanged"
      @foodPairingChanged="foodPairingChanged"
      @brewedMinDateChanged="brewedMinDateChanged"
      @brewedMaxDateChanged="brewedMaxDateChanged"
      @alcoholLevelVolumeChanged="alcoholLevelVolumeChanged"
    />
  </div>
</template>

<script>
/* components */
import HomeCarouselBeer from './components/HomeCarouselBeer.vue'
import HomeCarouselSlider from './components/HomeCarouselSlider.vue'
import HomeCarouselItemHeader from './components/HomeCarouselItemHeader.vue'
import HomeCarouselItemContent from './components/HomeCarouselItemContent.vue'
import HomeCarouselFilters from './components/HomeCarouselFilters.vue'
/* services */
import { initBeerProject, initBeerProjectWithFilters } from './services/carousel-banner.service'

export default {
  name: 'HomeCarouselBanner',
  inject: ['appModalService'],
  components: { HomeCarouselBeer, HomeCarouselSlider, HomeCarouselFilters },
  data: () => ({
    HomeBanner: {
      beers: []
    },
    model: 0,
    carouselLoader: false,
    filters: {
      ibu: null,
      ebc: null,
      minDate: null,
      maxDate: null,
      foodPairing: null,
      alcoholLevelVolume: null
    }
  }),
  async mounted () {
    this.HomeBanner.beers = await initBeerProject()
  },
  methods: {
    onBeerClick (beer) {
      this.appModalService.setAppModalInfo({
        showModal: true,
        newTitle: beer.name,
        newText: '',
        titleComponent: HomeCarouselItemHeader,
        bodyComponent: HomeCarouselItemContent,
        bodyData: { beer }
      })
    },
    updateHomeSlider (value) {
      this.model = value
    },
    async alcoholLevelVolumeChanged (value) {
      this.carouselLoader = true
      this.filters.alcoholLevelVolume = value
      this.HomeBanner.beers = await initBeerProjectWithFilters(this.filters)
      this.carouselLoader = false
    },
    async ibuChanged (value) {
      this.carouselLoader = true
      this.filters.ibu = value
      this.HomeBanner.beers = await initBeerProjectWithFilters(this.filters)
      this.carouselLoader = false
    },
    async ebcChanged (value) {
      this.carouselLoader = true
      this.filters.ebc = value
      this.HomeBanner.beers = await initBeerProjectWithFilters(this.filters)
      this.carouselLoader = false
    },
    async foodPairingChanged (value) {
      this.carouselLoader = true
      this.filters.foodPairing = value
      this.HomeBanner.beers = await initBeerProjectWithFilters(this.filters)
      this.carouselLoader = false
    },
    async brewedMinDateChanged (value) {
      this.carouselLoader = true
      this.filters.minDate = value
      this.HomeBanner.beers = await initBeerProjectWithFilters(this.filters)
      this.carouselLoader = false
    },
    async brewedMaxDateChanged (value) {
      this.carouselLoader = true
      this.filters.maxDate = value
      this.HomeBanner.beers = await initBeerProjectWithFilters(this.filters)
      this.carouselLoader = false
    }
  }
}
</script>

<style lang="scss">
@import '@app/themes/components/home/home.carousel-banner.scss';
</style>
