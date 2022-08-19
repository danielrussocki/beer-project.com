<template>
  <v-col :cols="cols">
    <v-card
      class="pa-2 text-center app-navigation-bar__card"
      outlined
      tile
    >
      <h6 class="app-text-danger">IBU {{ ibu[0] }}-{{ibu[1]}}</h6>
    </v-card>
    <v-range-slider
      color="black"
      thumb-color="black"
      track-color="black"
      min="0"
      max="100"
      class="mt-5"
      :value="ibu"
      @input="$emit('updateIbu', $event)"
    />
  </v-col>
</template>

<script>
export default {
  name: 'HomeCarouselIbuFilter',
  props: {
    cols: {
      type: [String, Number],
      required: true
    },
    ibu: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
</style>
