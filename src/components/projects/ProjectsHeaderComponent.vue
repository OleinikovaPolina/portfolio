<template>
  <v-row
    align="center"
    class="section-header"
  >
    <v-col
      cols="12"
      md="6"
      class="text-center text-md-left"
    >
      <div class="d-flex align-center justify-center justify-md-start mb-4">
        <div class="text-h4 text-md-h3 text-lg-h2 mr-4 font-weight-regular">
          {{ $t('projects') }}
        </div>
      </div>
      <div class="header-subtitle mb-4">
        {{ t('subtitle') }}
      </div>
      <div class="d-flex justify-center justify-md-start">
        <v-btn
          class="mr-4 elevation-0"
          color="info"
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
    "subtitle": "My projects makes use of vast variety of latest technology tools."
  },
  "ru": {
    "subtitle": "В моих проектах используется широкий спектр новейших технологических инструментов."
  }
}
</i18n>