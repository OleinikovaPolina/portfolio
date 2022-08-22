<template>
  <v-card>
    <v-img :src="project.images[0]" />

    <v-card-title>{{ project.title }}</v-card-title>

    <v-card-text class="py-1">
      <div>{{ project.descriptionShort }}</div>
    </v-card-text>

    <v-divider class="mx-4" />

    <v-card-text class="pt-1">
      <v-chip-group active-class="deep-purple accent-4 white--text">
        <v-chip
          v-for="technology in project.technologies"
          :key="technology.name"
          :size="$vuetify.display.smAndDown?'small':'small'"
        >
          {{ technology.name }}
        </v-chip>
      </v-chip-group>
      <div class="d-flex mt-1">
        <v-btn
          v-for="link in project.links"
          :key="link.href"
          :href="link.href"
          target="_blank"
          :size="$vuetify.display.smAndDown?'small':'default'"
          color="info"
          class="elevation-0 mr-2"
          link
        >
          {{ link.name }}
        </v-btn>
        <v-btn
          color="info"
          class="elevation-0"
          :size="$vuetify.display.smAndDown?'small':'default'"
          @click="()=>{
            $emit('changeDialog',true)
            $emit('changeActiveProject',project)
          }"
        >
          More
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { ProjectType } from '@/types'

defineProps({
  project: {
    type: Object as PropType<ProjectType>,
    required: true
  }
})
</script>
