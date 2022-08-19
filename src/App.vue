<template>
  <v-app>
    <v-main>
      <router-view />
      <AppModal
        :dialog="AppModal.show"
        :description="AppModal.text"
        :persistent="AppModal.persistent"
        @appModalClose="AppModal.show = false"
        @appModalCloseOutside="checkPersistenceBeforeCloseModal"
      >
        <template slot="header">
          <component
            :is="AppModal.titleComponent"
            :title="AppModal.title"
          />
        </template>
        <template slot="body">
          <component
            :is="AppModal.bodyComponent"
            v-bind="AppModal.bodyData"
          />
        </template>
      </AppModal>
    </v-main>
  </v-app>
</template>

<script>
/* components */
import AppModal from '@app/components/AppModal.vue'
/* services */
import { AppModalService } from './services/modal.service'

export default {
  name: 'App',
  components: {
    AppModal
  },
  data: () => ({
    AppModal: {
      show: false,
      title: '',
      text: '',
      persistent: false,
      titleComponent: null,
      bodyComponent: null,
      bodyData: {}
    }
  }),
  provide () {
    const appModalService = new AppModalService({ AppModal: this.AppModal })
    return { appModalService }
  },
  methods: {
    checkPersistenceBeforeCloseModal () {
      if (this.AppModal.persistent) return
      this.AppModal.show = false
    }
  }
}
</script>
