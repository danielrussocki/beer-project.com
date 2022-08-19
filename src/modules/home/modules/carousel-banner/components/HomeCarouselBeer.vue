<template>
  <v-col
    cols="4"
    class="d-flex"
  >
    <img
      :src="src"
      :alt="alt"
      class="mx-auto my-auto cursor-pointer hover-expand"
      width="100"
      @click="$emit('carouselOpenModal')"
    />
  </v-col>
</template>

<script>
export default {
  name: 'HomeCarouselBeer',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
}
</script>
