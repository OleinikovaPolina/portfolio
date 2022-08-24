<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        min-width="0"
        class="px-2"
        :color="theme==='dark'?'light':'info'"
      >
        {{ locale }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item @click="updateLanguage('en')">
        <v-list-item-title>English</v-list-item-title>
      </v-list-item>
      <v-list-item @click="updateLanguage('ru')">
        <v-list-item-title>Russian</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

const store = useStore()
const theme = computed(() => store.getters['application/theme'])
const { locale } = useI18n()

const updateLanguage = (lang: string) => {
  locale.value = lang
  sessionStorage.setItem('locale', locale.value)
}

onMounted(() => {
  locale.value = sessionStorage.getItem('locale') === 'ru' ? 'ru' : 'en'
})
</script>