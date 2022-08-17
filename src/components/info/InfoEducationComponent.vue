<template>
  <div
    id="education"
    class="position-relative py-8 py-md-16"
  >
    <div
      id="education-h1"
      class="text-h5 text-md-h4 text-lg-h3 d-table mx-auto"
      style="z-index: 1;"
    >
      <span class="d-table-cell">Education</span>
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
          ITMO University
        </div>
        <div class="font-weight-bold">
          Mobile and network technologies
        </div>
        <div>
          September 2021 - Present day
        </div>
        <ul class="text-medium-emphasis">
          <li>Member of the front-end development club</li>
        </ul>
        <info-graduate />
      </v-card>
    </v-col>
  </div>
</template>

<script setup lang="ts">
import InfoGraduate from '@/components/info/InfoGraduate.vue'
</script>
