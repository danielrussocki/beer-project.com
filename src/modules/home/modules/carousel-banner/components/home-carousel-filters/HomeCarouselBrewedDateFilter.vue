<template>
  <v-col :cols="cols">
    <v-row>
      <v-col cols="12">
        <v-card
          class="pa-2 text-center app-navigation-bar__card"
          outlined
          tile
        >
          <h6 class="app-text-danger">Filter by brewed date</h6>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-dialog
          ref="dialog"
          v-model="modal"
          :return-value.sync="minDate"
          persistent
          width="290px"
          class="mt-0 pt-0"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              :value="minDate"
              readonly
              v-bind="attrs"
              v-on="on"
              class="pt-0 mt-n5"
              color="black"
              @input="$emit('updateMinDate', $event)"
            />
          </template>
          <v-date-picker
            :value="minDate"
            type="month"
            scrollable
            color="red"
            @input="$emit('updateMinDate', $event)"
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="red"
              @click="modal = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="red"
              @click="$refs.dialog.save(minDate)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
      <v-col cols="6">
        <v-dialog
          ref="dialogMax"
          v-model="modalMax"
          :return-value.sync="maxDate"
          persistent
          width="290px"
          class="mt-0 pt-0"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              :value="maxDate"
              readonly
              v-bind="attrs"
              v-on="on"
              class="pt-0 mt-n5"
              color="black"
              @input="$emit('updateMaxDate', $event)"
            ></v-text-field>
          </template>
          <v-date-picker
            :value="maxDate"
            type="month"
            scrollable
            color="red"
            :min="minDate"
            @input="$emit('updateMaxDate', $event)"
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="red"
              @click="modalMax = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="red"
              @click="$refs.dialogMax.save(maxDate)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-dialog>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: 'HomeCarouselBrewedDateFilter',
  props: {
    cols: {
      type: [String, Number],
      required: true
    },
    minDate: {
      type: String,
      required: true
    },
    maxDate: {
      type: String,
      required: true
    }
  },
  data: () => ({
    modal: false,
    modalMax: false
  })
}
</script>

<style>
</style>
