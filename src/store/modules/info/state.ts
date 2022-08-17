import type { InfoType, TechnologyType, AchievementType } from '@/types'

export type State = {
  work: InfoType[],
  skills: TechnologyType[],
  achievements: AchievementType[]
}

export const state: State = {
  achievements: [
    {
      title: 'Открытый региональный чемпионат «Молодые профессионалы» (WorldSkills Russia) по Челябинской области, веб-дизайн и разработка',
      image: require('@/assets/images/achievements/wsr.jpg'),
      content: ['2019 - Победитель - юниоры', '2020 - Призер - основная категория'],
      file: ''
    },
    {
      title: 'IT school samsung. Бесплатная программа дополнительного образования по мобильной разработке для старшеклассников.',
      image: require('@/assets/images/achievements/itss.jpg'),
      content: ['2018-2019 Учебный год', 'Выпускной проект - Не помню'],
      file: ''
    },
  ],
  work: [
    {
      name: 'Департамент информационного развития ИТМО', date: 'Sep 2022 - Present day',
      content: ['my.itmo']
    },
    {
      name: 'Проектная деятельность', date: 'Sep 2021 - Aug 2022',
      content: ['Сайт факультета ИКТ ИТМО', 'Информационно-образовательный проект "Александр Невский"']
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
