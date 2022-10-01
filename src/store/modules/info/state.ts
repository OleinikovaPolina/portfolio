import type { TechnologyType, AchievementType,ContributionType } from '@/types'

export type State = {
  skills: TechnologyType[],
  achievements: AchievementType[],
  contributions: ContributionType[]
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
    { name: 'Vue 2, 3', img: require('@/assets/images/skills/vue.png') },
    { name: 'Typescript', img: require('@/assets/images/skills/ts.png') },
    { name: 'Javascript', img: require('@/assets/images/skills/js.png') },
    { name: 'Vuetify', img: require('@/assets/images/skills/vuetify.png') },
    { name: 'Bootstrap', img: require('@/assets/images/skills/vue-bootstrap.png') },
    { name: 'Sass', img: require('@/assets/images/skills/sass.png') },
    { name: 'Css', img: require('@/assets/images/skills/css.png') },
    { name: 'Html5', img: require('@/assets/images/skills/html.png') }
  ],
  contributions:[]
}
