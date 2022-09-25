<template>
  <v-card>
    <img
      alt=""
      :src="project.images[0]"
      class="w-100 project-img"
    >

    <v-card-title>{{ $rt(project.title) }}</v-card-title>

    <v-card-text class="py-1">
      <div>{{ $rt(project.descriptionShort) }}</div>
    </v-card-text>

    <v-divider class="mx-4" />

    <v-card-text class="pt-1">
      <v-chip-group column>
        <v-chip
          v-for="i in Math.min(project.technologies.length,4)"
          :key="project.technologies[i-1].name"
          :size="$vuetify.display.smAndDown?'x-small':'small'"
        >
          {{ project.technologies[i - 1].name }}
        </v-chip>
      </v-chip-group>
      <div class="d-flex flex-wrap">
        <v-btn
          v-for="link in project.links"
          :key="link.href"
          :href="link.href"
          target="_blank"
          size="small"
          color="info"
          class="elevation-0 mr-2 mt-1"
          link
        >
          {{ $t(link.name) }}
        </v-btn>
        <v-btn
          color="info"
          class="elevation-0 mt-1"
          size="small"
          @click="()=>{
            $emit('changeDialog',true)
            $emit('changeActiveProject',project)
          }"
        >
          {{ $t('more') }}
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

<style scoped lang="scss">
  .project-img {
    aspect-ratio: 2.19;
    object-fit: contain;
    filter: contrast(110%) grayscale(0.5);
    //border-bottom: 2px solid rgba(var(--v-theme-on-background),0.3);
    box-shadow: 0 4px 5px -5px rgba(var(--v-theme-on-background),0.5);
  }
</style>
