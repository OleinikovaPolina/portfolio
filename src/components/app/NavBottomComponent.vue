<template>
  <v-bottom-navigation
    class="position-sticky"
    style="bottom: 0"
    color="info"
  >
    <v-btn
      v-for="link in links"
      :key="link.path"
      :to="link.path"
    >
      <v-icon>{{ link.icon }}</v-icon>
      <span>{{ link.name }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const links = computed(() => store.getters['application/headerLinks'])
</script>
