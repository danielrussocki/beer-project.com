<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <p>{{ beer.description }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h5 class="mb-2">Food Pairing</h5>
          <ul>
            <li
              v-for="(food, foodIndex) in beer.food_pairing"
              :key="foodIndex"
            >
              {{ food }}
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'HomeCarouselItemContent',
  props: { beer: { type: Object, required: true } },
  computed: { beerKeys () { return Object.keys(this.beer) } }
}
</script>
