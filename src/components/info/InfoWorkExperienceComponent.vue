<template>
  <div>
    <div class="text-h5 text-md-h4 text-lg-h3 mx-auto text-center pb-4 pb-md-8">
      {{ t('title') }}
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
            v-for="(item,i) in tm('work')"
            :key="i"
            dot-color="info"
            size="small"
            :icon="i===0?'mdi-motion-play-outline':'mdi-motion-pause-outline'"
            :fill-dot="true"
          >
            <v-card class="mb-4 mb-md-0 fadein bg-bg">
              <v-card-title class="pb-0">
                {{ rt(item.name) }}
              </v-card-title>
              <v-card-subtitle>
                {{ rt(item.date) }}
              </v-card-subtitle>
              <v-card-text class="pt-2">
                <ul class="text-left">
                  <li
                    v-for="content in item.content"
                    :key="content"
                  >
                    <div class="text-subtitle-1">
                      {{ rt(content) }}
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
import { useI18n } from 'vue-i18n'

const { t, tm, rt } = useI18n({
  inheritLocale: true,
  useScope: 'local'
})
</script>

<style lang="scss">
.v-timeline-divider {
  justify-content: center;
}

.v-timeline .v-card * {
  line-height: 1.5rem;
}
</style>

<i18n>
{
  "en": {
    "title": "Work experience",
    "work": [
      {
        "name": "Information Development Department ITMO",
        "date": "Sep 2022 - Present",
        "content": [
          "my.itmo"
        ]
      },
      {
        "name": "Project activity",
        "date": "Sep 2021 - Aug 2022",
        "content": [
          "Website of the Faculty of ICT ITMO",
          "Information and educational project 'Alexander Nevsky'"
        ]
      }
    ]
  },
  "ru": {
    "title": "Опыт работы",
    "work": [
      {
        "name": "Департамент информационного развития ИТМО",
        "date": "Сентябрь 2022 - Настоящее время",
        "content": [
          "my.itmo"
        ]
      },
      {
        "name": "Проектная деятельность",
        "date": "Сентябрь 2021 - Август 2022",
        "content": [
          "Сайт факультета ИКТ ИТМО",
          "Информационно-образовательный проект 'Александр Невский'"
        ]
      }
    ]
  }
}
</i18n>
