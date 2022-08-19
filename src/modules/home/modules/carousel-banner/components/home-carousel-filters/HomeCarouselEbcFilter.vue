<template>
  <v-col :cols="cols">
    <v-card
      class="pa-2 text-center app-navigation-bar__card"
      outlined
      tile
    >
      <h6 class="app-text-danger">EBC {{ ebc[0] }}-{{ebc[1]}}</h6>
    </v-card>
    <v-range-slider
      color="black"
      thumb-color="black"
      track-color="black"
      min="0"
      max="100"
      class="mt-5"
      :value="ebc"
      @input="$emit('updateEbc', $event)"
    />
  </v-col>
</template>

<script>
export default {
  name: 'HomeCarouselEbcFilter',
  props: {
    cols: {
      type: [String, Number],
      required: true
    },
    ebc: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
</style>
