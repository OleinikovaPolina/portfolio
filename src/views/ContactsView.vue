<template>
  <v-container>
    <v-row
      class="section-header"
      align="center"
    >
      <v-col
        cols="12"
        md="6"
      >
        <div class="d-flex align-center justify-center justify-md-start mb-4">
          <div class="text-h4 text-md-h3 text-lg-h2 mr-4">
            Say Hi, it's free)
          </div>
        </div>
        <div class="text-body-2 text-md-subtitle-1 mb-4">
          A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications
          with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
        </div>
        <div class="d-flex justify-center justify-md-start">
          <v-btn
            v-for="contact in socials"
            :key="contact.href"
            :href="contact.href"
            :icon="true"
            target="_blank"
            color="info"
            class="mr-4 elevation-0 rounded-circle"
          >
            <v-icon v-if="contact.icon">
              {{ contact.icon }}
            </v-icon>
            <span v-else>{{ contact.name }}</span>
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