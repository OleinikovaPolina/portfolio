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
          <v-btn
            icon="mdi-heart"
            @click="toggleTheme"
          />
          <v-menu>
            <template #activator="{ props }">
              <v-btn v-bind="props">
                {{ locale }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="lang in ['en','ru']"
                :key="lang"
                @click="updateLanguage(lang)"
              >
                <v-list-item-title>{{ lang }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

const store = useStore()
const { locale } = useI18n()
const links = computed(() => store.getters['application/headerLinks'])

const toggleTheme = () => store.commit('application/CHANGE_THEME')
const updateLanguage = (lang: string) => {
  locale.value = lang
  sessionStorage.setItem('locale', locale.value)
}

onMounted(() => {
  locale.value = sessionStorage.getItem('locale') === 'ru' ? 'ru' : 'en'
})
</script>

