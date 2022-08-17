<template>
  <v-dialog
    :model-value="dialog"
    @update:modelValue="$emit('changeDialog',$event)"
  >
    <v-card
      class="mx-auto"
      max-width="700"
    >
      <div>
        <v-carousel
          :cycle="false"
          :hide-delimiter-background="true"
          delimiter-icon="mdi-minus"
          height="300"
          eager
        >
          <v-carousel-item
            v-for="(slide, i) in project.images"
            :key="i"
          >
            <v-img
              :src="slide"
            />
          </v-carousel-item>
        </v-carousel>
      </div>

      <v-card-title class="px-6 pb-0">
        {{ project.title }}
      </v-card-title>

      <v-card-text class="pt-0">
        <div class="mt-2">
          Categories:&nbsp;<span>{{ project.categories.join(', ') }}</span>
        </div>

        <v-chip-group>
          <v-chip
            v-for="technology in project.technologies"
            :key="technology.name"
          >
            {{ technology.name }}
          </v-chip>
        </v-chip-group>

        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="project.descriptionLong" />

        <v-divider class="my-4" />

        <div class="d-flex mb-2">
          <v-btn
            v-for="link in project.links"
            :key="link.href"
            :href="link.href"
            target="_blank"
            :size="$vuetify.display.smAndDown?'small':'default'"
            color="info"
            class="white--text mr-2"
            link
          >
            {{ link.name }}
          </v-btn>
          <v-btn
            color="info"
            @click="$emit('changeDialog',false)"
          >
            Close
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