<template>
  <v-app-bar class="elevation-0 px-0">
    <v-container>
      <div class="d-flex align-center">
        <router-link
          to="/"
          class="text-decoration-none"
        >
          OleinikovaPolina
        </router-link>

        <v-spacer />

        <div
          v-if="$vuetify.display.mdAndUp"
          class="d-flex align-center"
        >
          <router-link
            v-for="link in links"
            :key="link.path"
            :to="link.path"
            class="text-decoration-none mr-4  mr-xl-8"
          >
            {{ link.name }}
          </router-link>
        </div>
        <div>
          <v-btn @click="toggleTheme" icon="mdi-heart">
            toggle theme
          </v-btn>
        </div>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const links = computed(() => store.getters['application/headerLinks'])

const toggleTheme = () => store.commit('application/CHANGE_THEME')
</script>

