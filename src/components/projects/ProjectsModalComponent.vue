<template>
  <v-dialog
    :model-value="dialog"
    @update:modelValue="$emit('changeDialog',$event)"
  >
    <v-card
      class="mx-auto"
      max-width="700"
      width="90vw"
    >
      <div>
        <v-carousel
          :cycle="false"
          :hide-delimiter-background="true"
          :show-arrows="!$vuetify.display.smAndDown?'hover':false"
          delimiter-icon="mdi-minus"
          height="auto"
          eager
          style="aspect-ratio: 2.19"
        >
          <v-carousel-item
            v-for="(slide, i) in project.images"
            :key="i"
          >
            <v-img
              :src="slide"
              width="100%"
              aspect-ratio="2.19"
            />
          </v-carousel-item>
        </v-carousel>
      </div>

      <v-card-title class="px-6 pb-0">
        {{ $rt(project.title) }}
      </v-card-title>
      <v-card-text class="pt-0">
        <div class="text-body-2 text-medium-emphasis">
          {{ $t('date') }}: {{ $rt(project.date) }}
        </div>
        <div>
          Categories:&nbsp;<span>{{ project.categories.join(', ') }}</span>
        </div>

        <v-chip-group :column="true">
          <v-chip
            v-for="technology in project.technologies"
            :key="technology.name"
            :size="$vuetify.display.smAndDown?'x-small':'small'"
          >
            {{ technology.name }}
          </v-chip>
        </v-chip-group>

        <div v-html=" $rt(project.descriptionLong)" />

        <v-divider class="my-4" />

        <div class="d-flex mb-2">
          <v-btn
            v-for="link in project.links"
            :key="link.href"
            :href="link.href"
            target="_blank"
            :size="$vuetify.display.smAndDown?'small':'default'"
            class="elevation-0 mr-2"
            color="info"
            link
          >
            {{ link.name }}
          </v-btn>
          <v-btn
            color="info"
            class="elevation-0"
            :size="$vuetify.display.smAndDown?'small':'default'"
            @click="$emit('changeDialog',false)"
          >
            {{ $t('close') }}
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { ProjectType } from '@/types'

defineProps({
  project: {
    type: Object as PropType<ProjectType>,
    required: true
  },
  dialog: {
    type: Boolean,
    required: true,
    default: false
  }
})
</script>
