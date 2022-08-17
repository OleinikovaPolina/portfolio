<template>
  <v-app :theme="theme">
    <nav-component />
    <nav-bottom-component v-if="$vuetify.display.smAndDown" />

    <v-main style="min-height: 100vh">
      <router-view />
    </v-main>

    <v-footer app>
      <footer-component />
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
/* Components */
import NavComponent from '@/components/app/NavComponent.vue'
import NavBottomComponent from '@/components/app/NavBottomComponent.vue'
import FooterComponent from '@/components/app/FooterComponent.vue'

import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const theme = computed(() => store.getters['application/theme'])

let height = document.documentElement.clientHeight

function fadein () {
  document.querySelectorAll('.fadein').forEach(el => {
    if(!el.classList.contains('active')) {
      let bottomLine = el.getBoundingClientRect().top
      if (bottomLine < height && bottomLine > 0) {
        el.classList.add('active')
      }
    }
  })
}

onMounted(() => {
  fadein()
})
window.addEventListener('scroll', () => {
  fadein()
})
</script>
