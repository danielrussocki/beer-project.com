<template>
  <div class="pt-6">
    <AppNavigationBar />
    <CarouselBanner />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '@app/components/AppFooter.vue'
import AppNavigationBar from '@app/components/AppNavigationBar.vue'
import CarouselBanner from '@mod/home/modules/carousel-banner/HomeCarouselBanner.vue'

export default {
  components: { AppFooter, AppNavigationBar, CarouselBanner }
}
</script>
