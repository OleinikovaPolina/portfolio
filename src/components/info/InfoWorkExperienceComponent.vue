<template>
  <div>
    <div class="text-h5 text-md-h4 text-lg-h3 mx-auto text-center pb-4 pb-md-8">
      Work experience
    </div>
    <v-row align="center">
      <v-col
        cols="12"
        md="7"
      >
        <v-timeline
          :density="$vuetify.display.smAndDown?'compact':'default'"
          :side="$vuetify.display.smAndDown?'end':undefined"
        >
          <v-timeline-item
            v-for="(item,i) in work"
            :key="i"
            dot-color="info"
            size="small"
            :icon="i===0?'mdi-motion-play-outline':'mdi-motion-pause-outline'"
            :fill-dot="true"
          >
            <v-card class="mb-4 mb-md-0 fadein">
              <v-card-title class="pb-0">
                {{ item.name }}
              </v-card-title>
              <v-card-subtitle>
                {{ item.date }}
              </v-card-subtitle>
              <v-card-text class="pt-2">
                <ul class="text-left">
                  <li
                    v-for="content in item.content"
                    :key="content"
                  >
                    <div class="text-subtitle-1">
                      {{ content }}
                    </div>
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
      <v-col
        cols="12"
        md="5"
      >
        <v-img :src="require('../../assets/images/undraw_mobile_development_re_wwsn.svg')" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const work = computed(() => store.getters['info/work'])
</script>

<style lang="scss">
.v-timeline-divider {
  justify-content: center;
}

 .v-timeline .v-card * {
  line-height: 1.5rem;
}
</style>