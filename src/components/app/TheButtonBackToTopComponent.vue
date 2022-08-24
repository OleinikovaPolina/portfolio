<template>
  <v-btn
    :class="{scrolled:!scrolled}"
    class="btn-to-top position-fixed"
    @click="scroll"
  >
    <span class="chevron" />
    <span class="chevron" />
  </v-btn>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const scrolled = ref(false)
const scroll = () => window.scrollTo({ top: 0, behavior: 'smooth' })

window.onscroll = function () {
  scrolled.value = document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
}
</script>

<style scoped lang="scss">
.btn-to-top {
  bottom: 1em;
  right: 1em;
  border-radius: 50%;
  width: 3em;
  min-width: 0;
  height: 3em;
  padding: 0;
  aspect-ratio: 1;
  position: relative;
  transition: all .3s ease;
  z-index: 1;
}

.btn-to-top:hover {
  transform: translateY(-.5em);
}

.btn-to-top.scrolled {
  bottom: -4em;
}

.chevron:after {
  content: "";
  height: 1em;
  width: 1em;
  position: absolute;
  left: 1em;
  transform: rotate(135deg);
  border-width: 0 0 0.2em 0.2em;
  border-color: var(--v-theme-on-background);
  border-style: solid;
  border-radius: 0;
}

.chevron:first-of-type:after {
  top: 1em;
  animation: chevron-1 2s ease infinite;
}

.chevron:last-of-type:after {
  top: 1.5em;
  animation: chevron-2 2s ease infinite;
  opacity: .6;
}

@keyframes chevron-1 {
  0% {
    top: 1.5em;
    opacity: 0;
  }
  40% {
    top: 1em;
    opacity: 1;
  }
}

@keyframes chevron-2 {
  0% {
    opacity: 0;
  }
  7.5% {
    top: 2em;
    opacity: 0;
  }
  47.5% {
    top: 1.5em;
    opacity: .6;
  }
}
</style>