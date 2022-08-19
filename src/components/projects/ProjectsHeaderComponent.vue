<template>
  <v-row
    align="center"
    class="section-header"
  >
    <v-col
      cols="12"
      md="6"
      class="d-flex flex-column justify-center text-center text-md-left"
    >
      <div class="d-flex align-center justify-center justify-md-start mb-4">
        <div class="text-h4 text-md-h3 text-lg-h2 mr-4">
          {{ t('title') }}
        </div>
      </div>
      <div class="text-body-2 text-md-subtitle-1 mb-4">
        {{ t('subtitle') }}
      </div>
      <div class="d-flex justify-center justify-md-start">
        <v-btn
          color="info"
          class="mr-4 elevation-0"
        >
          GITHUB
        </v-btn>
      </div>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <v-img :src="require('../../assets/images/undraw_proud_coder_re_exuy.svg')" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local'
})
</script>

<i18n>
{
  "en": {
    "title": "Projects",
    "subtitle": "My projects makes use of vast variety of latest technology tools."
  },
  "ru": {
    "title": "Проекты",
    "subtitle": "В моих проектах используется широкий спектр новейших технологических инструментов."
  }
}
</i18n>