<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-slider
          thumb-label
          ticks
          :min="min"
          :max="max"
          :value="value"
          thumb-color="black"
          color="black"
          track-color="black"
          @input="$emit('updateHomeSlider', $event)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeCarouselSlider',
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>
