<template>
  <v-container>
    <v-row
      class="section-header"
      align="center"
    >
      <v-col
        cols="12"
        md="6"
        class="text-center text-md-left"
      >
        <div class="d-flex align-center justify-center justify-md-start mb-4">
          <div class="text-h4 text-md-h3 text-lg-h2 mr-4 font-weight-regular">
            {{ $t('contacts.title') }}
          </div>
        </div>
        <div class="header-subtitle mb-4">
          {{ $t('contacts.subtitle') }}
        </div>
        <div class="text-h6">
          <v-icon size="x-small">
            mdi-forum
          </v-icon>
          {{ $t('contacts.hi') }}
        </div>
        <a href="mailto:oleinikowa.poly@yandex.ru">Email: oleinikowa.poly@yandex.ru</a>
        <div class="text-h6 mt-4">
          <v-icon size="x-small">
            mdi-map-marker
          </v-icon>
          {{ $t('contacts.find') }}
        </div>
        <div>{{ $t('contacts.place') }}</div>
        <div class="text-h6 mt-4">
          <v-icon size="x-small">
            mdi-account-circle
          </v-icon>
          {{ $t('contacts.social') }}
        </div>
        <div class="d-flex justify-center justify-md-start">
          <v-btn
            v-for="contact in socials"
            :key="contact.href"
            :href="contact.href"
            :icon="true"
            target="_blank"
            :color="contact.color"
            class="mr-4 elevation-0 rounded-circle"
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
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-img
          class="w-100"
          :src="require('../assets/images/undraw_contact_us_re_4qqt.svg')"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const socials = computed(() => store.getters['contacts/socials'])
</script>
