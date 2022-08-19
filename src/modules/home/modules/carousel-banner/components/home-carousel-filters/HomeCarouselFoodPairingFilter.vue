<template>
  <v-col :cols="cols">
    <v-card
      class="pa-2 text-center app-navigation-bar__card"
      outlined
      tile
    >
      <h6 class="app-text-danger">Food Pairing</h6>
    </v-card>
    <v-text-field
      class="pt-0 mt-1"
      color="black"
      placeholder="Type Here"
      :value="foodPairing"
      @input="$emit('updateFood', $event)"
    />
  </v-col>
</template>

<script>
export default {
  name: 'HomeCarouselFoodPairingFilter',
  props: {
    cols: {
      type: [String, Number],
      required: true
    },
    foodPairing: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
</style>
