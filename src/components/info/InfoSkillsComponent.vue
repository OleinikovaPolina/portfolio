<template>
  <div class="section-background py-8 py-md-16">
    <v-container>
      <v-col
        cols="10"
        sm="7"
        lg="6"
        class="text-center mx-auto text-h5 text-md-h4 text-lg-h3"
      >
        {{ t('title') }}
      </v-col>
      <v-col
        cols="10"
        sm="7"
        lg="5"
        class="text-center mx-auto"
      >
        {{ t('subtitle') }}
      </v-col>
      <v-row justify="center">
        <v-col
          cols="12"
          md="8"
        >
          <div class="d-flex flex-wrap justify-center">
            <div
              v-for="(hex,i) in skills"
              :key="i"
              class="hex-block"
              :class="'hex-'+i"
              @mouseout="hexHoverNot(i)"
              @mouseover="hexHover(i)"
            >
              <div class="hex">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 208 268"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g :filter="'url(#filter0_dd_1_5122'+i+')'">
                    <path
                      d="M91.6282 17.3119C99.2839 12.896 108.716 12.896 116.372 17.3119L181.628 54.9518C189.284 59.3676 194 67.5284 194 76.36V191.64C194 200.472 189.284 208.632 181.628 213.048L116.372 250.688C108.716 255.104 99.2839 255.104 91.6282 250.688L26.3718 213.048C18.7161 208.632 14 200.472 14 191.64V76.36C14 67.5284 18.7161 59.3676 26.3718 54.9518L91.6282 17.3119Z"
                      :fill="theme==='dark'?'#070C2D':'white'"
                    />
                    <path
                      d="M92.3777 18.6112C99.5695 14.4629 108.43 14.4629 115.622 18.6112L180.879 56.2512C188.07 60.3994 192.5 68.065 192.5 76.36V191.64C192.5 199.935 188.07 207.601 180.879 211.749L115.622 249.389C108.43 253.537 99.5695 253.537 92.3777 249.389L27.1213 211.749C19.9296 207.601 15.5 199.935 15.5 191.64V76.36C15.5 68.065 19.9296 60.3994 27.1213 56.2512L92.3777 18.6112Z"
                      :stroke="theme==='dark'?'#070C2D':'white'"
                      stroke-width="3"
                    />
                  </g>
                  <defs>
                    <filter
                      :id="'filter0_dd_1_5122'+i"
                      x="0"
                      y="0"
                      width="208"
                      height="268"
                      filterUnits="userSpaceOnUse"
                      :color-interpolation-filters="theme==='dark'?'white':'sRGB'"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="7" />
                      <feComposite
                        in2="hardAlpha"
                        operator="out"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.0119097 0 0 0 0 0.263132 0 0 0 0 0.408333 0 0 0 0.1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_5122"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur
                        :id="'ict-feGaussianBlur-' + i"
                        stdDeviation="2.5"
                      />
                      <feComposite
                        in2="hardAlpha"
                        operator="out"
                      />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0.427451 0 0 0 0 0.67451 0 0 0 0.2 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_1_5122"
                        result=""
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_1_5122"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div class="hex-content">
                <v-img
                  width="50%"
                  class="mx-auto hex-content-img"
                  :src="hex.img"
                />
                <div class="hex-text">{{ hex.name }}</div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

const store = useStore()
const skills = computed(() => store.getters['info/skills'])
const theme = computed(() => store.getters['application/theme'])

const { t } = useI18n({
  inheritLocale: true,
  useScope: 'local'
})

const hexHover = (i: number) => {
  const block = document.querySelector('#ict-feGaussianBlur-' + i)
  if (block) {
    block.setAttribute('stdDeviation', '10')
  }
}
const hexHoverNot = (i: number) => {
  const block = document.querySelector('#ict-feGaussianBlur-' + i)
  if (block) {
    block.setAttribute('stdDeviation', '2.5')
  }
}
</script>

<style scoped lang="scss">
.hex-block {
  width: 20%;
  position: relative;
  text-align: center;
  transition: all .3s ease-in-out;
  aspect-ratio: 1;

  * {
    transition: all .3s ease-in-out;
  }

  &:hover {
    transform: scale(1.1);

    .hex-text {
      opacity: 1 !important;
    }

    .hex-content-img {
      filter: none !important;
    }
  }

  .hex {
    position: absolute;
    width: 100%;
    transform: scaleY(.75) translateY(-20%);
    z-index: 0;
  }

  .hex-content {
    position: relative;
    z-index: 1;
    transform: translateY(35%);

    .hex-content-img {
      aspect-ratio: 1;
      filter: saturate(0%) contrast(150%) brightness(0.85);
    }

    .hex-text {
      opacity: 0;
      transform: rotate(-25deg) translate(20%, 100%);
      font-weight: 500;
      color: rgba(var(--v-theme-info));
    }
  }
}

</style>

<i18n>
{
  "en": {
    "title": "Skills",
    "subtitle": "Tools, languages and other things that I like to work with"
  },
  "ru": {
    "title": "Навыки",
    "subtitle": "Инструменты, языки и другие вещи, с которыми мне нравится работать"
  }
}
</i18n>