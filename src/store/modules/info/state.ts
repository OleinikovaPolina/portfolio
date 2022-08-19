import type { TechnologyType, AchievementType } from '@/types'

export type State = {
  skills: TechnologyType[],
  achievements: AchievementType[]
}

export const state: State = {
  achievements: [
    {
      image: require('@/assets/images/achievements/wsr.jpg'),
      file: ''
    }, {
      image: require('@/assets/images/achievements/itss.jpg'),
      file: ''
    }
  ],
  skills: [
    { name: 'Nuxt.js', img: require('@/assets/images/skills/nuxt.png') },
    { name: 'Vue 2<br>Vue 3', img: require('@/assets/images/skills/vue.png') },
    { name: 'Typescript<br>Javascript', img: require('@/assets/images/skills/jts.png') },
    { name: 'Vuetify<br>Bootstrap', img: require('@/assets/images/skills/vuetify.png') },
    { name: 'Sass<br>Css', img: require('@/assets/images/skills/sass.png') },
    { name: 'Html5', img: require('@/assets/images/skills/html.png') }
  ]
}
