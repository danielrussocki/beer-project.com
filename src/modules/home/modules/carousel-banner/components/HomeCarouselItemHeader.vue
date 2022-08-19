<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h4>{{ title }}</h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeCarouselItemHeader',
  props: { title: { type: String, required: true } }
}
</script>
