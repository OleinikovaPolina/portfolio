<template>
  <div class="py-8 py-md-16 position-relative">
    <div>
      <animation-item-component :style="{color:'#f1f1f1',width:'25px',top:'5%',left:'5%'}" />
      <animation-item-component :style="{color:'#b0e0ff',width:'20px',top:'20%',left:'0'}" />
      <animation-item-component :style="{color:'#f1f1f1',width:'15px',top:'10%',left:'15%'}" />
      <animation-item-component :style="{color:'#f1f1f1',width:'25px',bottom:'0',right:'8%'}" />
      <animation-item-component :style="{color:'#b0e0ff',width:'20px',bottom:'15%',right:'0%'}" />
      <animation-item-component :style="{color:'#edd8ff',width:'15px',bottom:'20%',right:'10%'}" />
    </div>
    <div class="text-h5 text-md-h4 text-lg-h3 mx-auto text-center pb-4 pb-md-8">
      {{ $t('achievementsTitle') }}
    </div>
    <v-carousel
      height="auto"
      :show-arrows="achievements.length>columns && $vuetify.display.mdAndUp"
      :hide-delimiters="achievements.length<=columns"
      :hide-delimiter-background="true"
    >
      <template v-for="index in achievements.length">
        <v-carousel-item
          v-if="index % columns === 1 || columns === 1"
          :key="index"
          class="px-md-16 mx-md-4 py-4"
        >
          <v-row
            class="flex-nowrap justify-center align-stretch"
            style="height: calc(100% + 35px)"
          >
            <template v-for="i in columns">
              <template v-if="(index + i-2) < achievements.length">
                <v-col
                  :key="i"
                  :cols="12/columns"
                >
                  <v-card class="fill-height">
                    <v-img
                      class="rounded-t"
                      :src="achievements[index + i - 2].image"
                      :cover="true"
                      height="100px"
                    />
                    <v-card-title
                      class="text-subtitle-1 pb-0"
                      style="line-height: normal"
                    >
                      {{ achievements[index + i - 2].title }}
                    </v-card-title>
                    <v-card-text>
                      <ul
                        v-for="item in achievements[index + i - 2].content"
                        :key="item"
                      >
                        <li>{{ $rt(item) }}</li>
                      </ul>
                    </v-card-text>
                  </v-card>
                </v-col>
              </template>
            </template>
          </v-row>
        </v-carousel-item>
      </template>
    </v-carousel>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useStore } from 'vuex'
import AnimationItemComponent from '@/components/app/AnimationItemComponent.vue'

const store = useStore()
const achievements = computed(() => store.getters['info/achievements'])

const { name } = useDisplay()
const columns = computed(() => {
  switch (name.value) {
    case 'md':
      return 2
    case 'lg':
      return 3
    case 'xl':
      return 4
    case 'xxl':
      return 4
    default:
      return 1
  }
})
</script>

