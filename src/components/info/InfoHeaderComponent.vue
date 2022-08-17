<template>
  <v-row
    align="center"
    :no-gutters="true"
    class="section-header"
  >
    <v-col
      cols="12"
      md="6"
      class="d-flex flex-column justify-center text-center text-md-left"
    >
      <div class="d-flex align-center justify-center justify-md-start mb-4">
        <div class="text-h4 text-md-h3 text-lg-h2 mr-4">
          Hi all, I'm Saad
        </div>
        <div>
          <v-img
            :src="require('../../assets/images/hi.png')"
            alt="hi"
            width="50"
            class="hi-img"
          />
        </div>
      </div>
      <div class="text-body-2 text-md-subtitle-1 mb-4">
        A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications
        with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.
      </div>
      <div class="d-flex justify-center justify-md-start">
        <v-btn
          color="info"
          class="mr-4 elevation-0"
        >
          CONTACT ME
        </v-btn>
        <v-btn
          class="elevation-0"
          color="info"
        >
          SEE MY RESUME
        </v-btn>
      </div>
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <div class="pa-5">
        <v-img
          width="100%"
          :src="require('../../assets/images/undraw_programming_re_kg9v.svg')"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
</script>
<style scoped>
@keyframes hi {
  0% {
    transform: rotate(0)
  }
  2.5% {
    transform: rotate(0)
  }
  5% {
    transform: rotate(-15deg)
  }
  7.5% {
    transform: rotate(15deg)
  }
  10% {
    transform: rotate(-10deg)
  }
  12.5% {
    transform: rotate(10deg)
  }
  15% {
    transform: rotate(0)
  }
  100% {
    transform: rotate(0)
  }
}

.hi-img {
  animation: hi 8s infinite ease-in-out reverse;
  transform-origin: 75% 75%;
}
</style>