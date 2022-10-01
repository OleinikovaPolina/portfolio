<template>
  <div class="py-8 py-md-16">
    <div class="text-h5 text-md-h4 text-lg-h3 mx-auto text-center pb-2 pb-md-4">
      {{ $t('contributionTitle') }}
    </div>
    <div class="d-flex align-center flex-column pb-4 pb-md-8">
      <div class="d-flex align-center">
        <a
          href="https://github.com/OleinikovaPolina"
          class="text-h6 text-decoration-none"
          :class="theme==='dark'?'text-white':'text-black'"
          target="_blank"
        >
          <v-icon
            size="x-large"
            class="rounded-circle mr-1"
          >
            mdi-github
          </v-icon>
          OleinikovaPolina
        </a>
      </div>
      <div class="d-flex align-center">
        <div
          class="text-h6 text-decoration-none"
          :class="theme==='dark'?'text-white':'text-black'"
        >
          <v-icon
            size="x-large"
            class="rounded-circle mr-1"
          >
            mdi-gitlab
          </v-icon>
          id336757
        </div>
      </div>
    </div>
    <calendar-heatmap
      :values="contributions"
      :end-date="Date.now()"
      :range-color="colors"
    />
  </div>
</template>


<script setup lang="ts">
import { CalendarHeatmap } from 'vue3-calendar-heatmap'

import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const contributions = computed(() => store.getters['info/contributions'])
const theme = computed(() => store.getters['application/theme'])
const colors = computed(() => {
  if (theme.value === 'dark') {
    return ['rgb(20,24,72)', 'rgb(13,24,87)', 'rgb(29,41,140)', 'rgb(51,68,194)',
      'rgb(71,89,224)', 'rgb(102,119,243)']
  } else {
    return ['rgb(245,246,248)', 'rgb(229,237,248)', 'rgb(192, 221, 249)',
      'rgb(115, 179, 243)', 'rgb(56, 134, 225)', 'rgb(23, 69, 158)']
  }
})

onMounted(() => {
  store.dispatch('info/getContributions')
})
</script>

<style lang="scss">
.vch__container {
  fill: rgb(var(--v-theme-on-background));
  font-size: 10px;

  text {
    font-weight: 300;
  }
}

div[data-tippy-root] {
  color: rgb(var(--v-theme-on-background));
  background: rgb(var(--v-theme-section));
  padding: .25em .5em;
  font-weight: 400;
  border-radius: 4px;
}
</style>
