<template>
  <v-col :cols="cols">
    <v-card
      class="pa-2 text-center app-navigation-bar__card"
      outlined
      tile
    >
      <h6 class="app-text-danger">Alcohol {{ alcoholLevelVolume[0] }}-{{ alcoholLevelVolume[1] }}%</h6>
    </v-card>
    <v-range-slider
      color="black"
      thumb-color="black"
      track-color="black"
      min="0"
      max="45"
      class="mt-5"
      :value="alcoholLevelVolume"
      @input="$emit('updateAlcoholVolume', $event)"
    />
  </v-col>
</template>

<script>
export default {
  name: 'HomeCarouselAlcoholFilter',
  props: {
    cols: {
      type: [String, Number],
      required: true
    },
    alcoholLevelVolume: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
</style>
