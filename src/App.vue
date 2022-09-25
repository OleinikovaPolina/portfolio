<template>
  <v-app :theme="theme">
    <div>
      <nav-component />

      <v-main>
        <router-view />
        <the-button-back-to-top-component />
      </v-main>

      <v-footer app>
        <footer-component />
      </v-footer>
    </div>
    <nav-bottom-component v-if="$vuetify.display.smAndDown" />
  </v-app>
</template>

<script setup lang="ts">
/* Components */
import NavComponent from '@/components/app/NavComponent.vue'
import NavBottomComponent from '@/components/app/NavBottomComponent.vue'
import FooterComponent from '@/components/app/FooterComponent.vue'

import { computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import TheButtonBackToTopComponent from '@/components/app/TheButtonBackToTopComponent.vue'

const store = useStore()
const theme = computed(() => store.getters['application/theme'])

watch(theme, () => {
  document.documentElement.classList.toggle('v-theme--light')
  document.documentElement.classList.toggle('v-theme--dark')
})

let height = document.documentElement.clientHeight

function fadein () {
  document.querySelectorAll('.fadein').forEach(el => {
    if (!el.classList.contains('active')) {
      let bottomLine = el.getBoundingClientRect().top
      if (bottomLine < height && bottomLine > 0) {
        el.classList.add('active')
      }
    }
  })
}

onMounted(() => {
  document.documentElement.classList.add(theme.value === 'light' ? 'v-theme--light' : 'v-theme--dark')
  fadein()
})

window.addEventListener('scroll', () => {
  fadein()
})
</script>
