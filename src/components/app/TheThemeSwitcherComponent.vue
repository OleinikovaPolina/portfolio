<template>
  <label
    class="switch"
    :class="{dark:theme==='dark'}"
  >
    <input
      v-model="theme"
      true-value="dark"
      false-value="light"
      type="checkbox"
      aria-label="switch"
      @change="toggleTheme"
    >
    <span class="slider">
      <span class="d-flex justify-center align-center">
        <v-icon
          :color="theme==='dark'?'black':'white'"
          size="20"
        >
          mdi-{{ theme==='dark' ? 'moon-waning-crescent' : 'white-balance-sunny' }}
        </v-icon>
      </span>
    </span>
  </label>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const theme = computed(() => store.getters['application/theme'])
const toggleTheme = () => store.commit('application/CHANGE_THEME')
</script>

<style scoped lang="scss">
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 32px;
  border: 2px solid #00A1FF;
  border-radius: 50px;
}
.switch.dark {
  border: 2px solid #fff;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: .4s;
  border-radius: 32px;
}
.slider span {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 1px;
  bottom: 1px;
  background-color: #00A1FF;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}
.dark .slider span {
  background-color: #fff;
}
input:checked + .slider span {
  transform: translateX(28px);
}
</style>