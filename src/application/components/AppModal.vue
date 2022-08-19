<template>
  <v-row justify="center">
    <v-dialog
      max-width="600"
      v-model="dialog"
      scrollable
      :persistent="persistent"
      @click:outside="$emit('appModalCloseOutside')"
    >
      <v-card>
        <v-card-title class="text-h5">
          <slot name="header" />
        </v-card-title>
        <v-card-text>
          <template v-if="description">
            {{ description }}
          </template>
          <slot name="body" />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="black darken-1"
            text
            @click="$emit('appModalClose')"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      required: false
    },
    dialog: {
      type: Boolean,
      default: false
    },
    persistent: {
      type: Boolean,
      default: false
    }
  }
}
</script>
