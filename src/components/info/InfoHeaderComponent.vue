<template>
  <v-row
    align="center"
    :no-gutters="true"
    class="section-header"
  >
    <v-col
      cols="12"
      md="6"
      class="text-center text-md-left position-relative"
    >
      <div>
        <animation-item-component :style="{color:'#f1f1f1',width:'20px',top:'-75px',left:'20px'}" />
        <animation-item-component :style="{color:'#f1f1f1',width:'15px',top:'-45px',left:'100px'}" />
        <animation-item-component :style="{color:'#b0e0ff',width:'10px',top:'-20px',left:'-20px'}" />
        <animation-item-component :style="{color:'#f1f1f1',width:'20px',bottom:'0',right:'8%'}" />
        <animation-item-component :style="{color:'#b0e0ff',width:'15px',bottom:'15%',right:0}" />
        <animation-item-component :style="{color:'#edd8ff',width:'10px',bottom:'20%',right:'20%'}" />
      </div>
      <div>
        <animation-item-component :style="{color:'#f1f1f1',width:'20px',bottom:'0',right:'8%'}" />
        <animation-item-component :style="{color:'#b0e0ff',width:'15px',bottom:'15%',right:0}" />
        <animation-item-component :style="{color:'#edd8ff',width:'10px',bottom:'20%',right:'20%'}" />
      </div>
      <div class="d-flex align-center justify-center justify-md-start mb-4">
        <div class="text-h4 text-md-h3 text-lg-h2 mr-2 mr-md-4 font-weight-regular">
          {{ t('title') }}
        </div>
        <div>
          <v-img
            :src="require('../../assets/images/hi.png')"
            alt="hi"
            :width="$vuetify.display.smAndDown?30:50"
            class="hi-img"
          />
        </div>
      </div>
      <div class="header-subtitle mb-4">
        {{ t('subtitle') }}
      </div>
      <div class="d-flex justify-center justify-md-start mb-4">
        <v-btn
          v-for="contact in socials"
          :key="contact.href"
          :href="contact.href"
          :icon="true"
          target="_blank"
          :color="contact.color"
          class="mr-4 elevation-0 rounded-circle"
          :size="$vuetify.display.smAndDown?'small':'default'"
        >
          <v-icon
            v-if="contact.icon"
            color="white"
          >
            {{ contact.icon }}
          </v-icon>
          <span
            v-else
            class="text-white"
          >{{ contact.name }}</span>
        </v-btn>
      </div>
      <div class="d-flex justify-center justify-md-start">
        <v-btn
          class="mr-4 elevation-0"
          color="info"
          to="/contacts"
        >
          {{ t('contact') }}
          <v-icon class="ml-1">
            mdi-arrow-right-bold-outline
          </v-icon>
        </v-btn>
        <!--        <v-btn-->
        <!--          class="elevation-0"-->
        <!--          color="info"-->
        <!--        >-->
        <!--          {{ t('resume') }}-->
        <!--          <v-icon class="ml-1">-->
        <!--            mdi-file-download-outline-->
        <!--          </v-icon>-->
        <!--        </v-btn>-->
      </div>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <div class="pa-5">
        <v-img
          width="100%"
          :src="require('../../assets/images/undraw_programming_re_kg9v.svg')"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import AnimationItemComponent from '@/components/app/AnimationItemComponent.vue'
import { useI18n } from 'vue-i18n'
import { useStore } from 'vuex'
import { computed } from 'vue'

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local'
})
const store = useStore()
const socials = computed(() => store.getters['contacts/socials'])
</script>
<style scoped>
@keyframes hi {
  0% {
    transform: rotate(0)
  }
  2.5% {
    transform: rotate(0)
  }
  5% {
    transform: rotate(-15deg)
  }
  7.5% {
    transform: rotate(15deg)
  }
  10% {
    transform: rotate(-10deg)
  }
  12.5% {
    transform: rotate(10deg)
  }
  15% {
    transform: rotate(0)
  }
  100% {
    transform: rotate(0)
  }
}

.hi-img {
  animation: hi 8s infinite ease-in-out reverse;
  transform-origin: 75% 75%;
}
</style>

<i18n>
{
  "en": {
    "title": "Hi all, I'm Polina",
    "subtitle": "A passionate Frontend Developer having an experience of building Web applications with TypeScript / JavaScript / Vuejs / Nuxtjs and some other cool libraries and frameworks.",
    "contact": "contact me",
    "resume": "resume"
  },
  "ru": {
    "title": "Привет, я Полина!",
    "subtitle": "Увлеченный фронтенд разработчик, имеющий опыт создания веб-приложений с помощью TypeScript / JavaScript / Vuejs / Nuxtjs и некоторых других интересных библиотек и фреймворков.",
    "contact": "связаться",
    "resume": "резюме"
  }
}
</i18n>
