<template>
  <div
    id="education"
    class="position-relative py-8 py-md-16"
  >
    <div>
      <animation-item-component :style="{color:'#f1f1f1',width:'25px',top:'5%',left:'5%'}" />
      <animation-item-component :style="{color:'#b0e0ff',width:'20px',top:'20%',left:'0'}" />
      <animation-item-component :style="{color:'#f1f1f1',width:'15px',top:'10%',left:'15%'}" />
      <animation-item-component :style="{color:'#f1f1f1',width:'25px',bottom:'0',right:'8%'}" />
      <animation-item-component :style="{color:'#b0e0ff',width:'20px',bottom:'15%',right:'0%'}" />
      <animation-item-component :style="{color:'#edd8ff',width:'15px',bottom:'20%',right:'10%'}" />
    </div>
    <div
      id="education-h1"
      class="text-h5 text-md-h4 text-lg-h3 d-table mx-auto"
      style="z-index: 1;"
    >
      <span class="d-table-cell">{{ t('title') }}</span>
    </div>
    <v-col
      cols="12"
      md="10"
      lg="8"
      xl="6"
      class="mx-auto"
    >
      <v-card
        id="education-card"
        class="pa-8 mt-4 position-relative pb-0 pb-sm-8 fadein"
      >
        <v-img
          width="50"
          class="rounded-circle"
          :src="require('../../assets/images/itmologo.jpg')"
        />
        <div class="text-h5">
          {{ t('university') }}
        </div>
        <div class="font-weight-bold">
          {{ t('direction') }}
        </div>
        <div>
          {{ t('date') }}
        </div>
        <ul class="text-medium-emphasis">
          <li
            v-for="(n,i) in tm('list')"
            :key="i"
          >
            {{ rt(n) }}
          </li>
        </ul>
        <info-graduate-component />
      </v-card>
    </v-col>
  </div>
</template>

<script setup lang="ts">
import InfoGraduateComponent from '@/components/info/InfoGraduateComponent.vue'
import { useI18n } from 'vue-i18n'
import AnimationItemComponent from '@/components/app/AnimationItemComponent.vue'

const { t, tm, rt } = useI18n({
  inheritLocale: true,
  useScope: 'local'
})
</script>

<i18n>
{
  "en": {
    "title": "Education",
    "university": "ITMO University",
    "direction": "Mobile and network technologies",
    "date": "September 2021 - Present",
    "list": [
      "Member of the front-end development club"
    ]
  },
  "ru": {
    "title": "Образование",
    "university": "Университет ИТМО",
    "direction": "Мобильные и сетевые технологии",
    "date": "Сентябрь 2021 - Настоящее время",
    "list": [
      "Член клуба фронтенд-разработок"
    ]
  }
}
</i18n>