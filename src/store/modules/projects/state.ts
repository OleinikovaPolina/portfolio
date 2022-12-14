import type { ProjectType } from '@/types'

export type State = {
  projects: ProjectType[];
  categories: string[];
}

export const state: State = {
  categories: [
    'pet-project', 'animation', 'vue', 'typescript', 'javascript'
  ],
  projects: [
    {
      technologies: [
        { name: 'Vue' }, { name: 'Vuex' }, { name: 'Vuetify' },
        { name: 'Axios' }, { name: 'Vue-router' }, { name: 'Vue-i18n' },
        { name: 'Vue3-calendar-heatmap' }
      ],
      images: [
        require('@/assets/images/projects/portfolio/portfolio (2).png'),
        require('@/assets/images/projects/portfolio/portfolio (4).png'),
        require('@/assets/images/projects/portfolio/portfolio (3).png'),
        require('@/assets/images/projects/portfolio/portfolio (1).png')
      ],
      categories: ['vue', 'animation', 'typescript', 'pet-project'],
      links: [
        { name: 'github', href: 'https://github.com/OleinikovaPolina/portfolio' }
      ],
      date: '08.22-09.22'
    },
    {
      technologies: [
        { name: 'Vue' }, { name: 'Vuex' },
        { name: 'Vuetify' }, { name: 'Axios' },
        { name: 'Vue-router' }, { name: 'Vue-moment' },
        { name: 'Vuedraggable' }, { name: 'Vue-slick-carousel' },
        { name: 'Vue-croppie' }, { name: 'Vue2-editor' }
      ],
      images: [
        require('@/assets/images/projects/fict/fict.png'),
        require('@/assets/images/projects/fict/fict1.png'),
        require('@/assets/images/projects/fict/fict2.png'),
        require('@/assets/images/projects/fict/fict3.png'),
        require('@/assets/images/projects/fict/fict4.png'),
        require('@/assets/images/projects/fict/fict5.png'),
        require('@/assets/images/projects/fict/fict6.png')
      ],
      categories: ['vue', 'animation', 'javascript'],
      links: [
        { name: 'github', href: 'https://github.com/OleinikovaPolina/ict.itmo' },
        { name: 'View demo', href: 'https://fict.itmo.ru/' }
      ],
      date: '03.22-06.22'
    },
    {
      technologies: [
        { name: 'HTML' }, { name: 'Javascript' }, { name: 'CSS' },
        { name: 'Bootstrap' }
      ],
      images: [
        require('@/assets/images/projects/retro/retro1.png'),
        require('@/assets/images/projects/retro/retro2.png'),
        require('@/assets/images/projects/retro/retro3.png'),
        require('@/assets/images/projects/retro/retro4.png'),
        require('@/assets/images/projects/retro/retro5.png'),
        require('@/assets/images/projects/retro/retro6.png')
      ],
      categories: ['javascript', 'animation', 'pet-project'],
      links: [
        { name: 'github', href: 'https://github.com/OleinikovaPolina/landing-for-FTML-2' },
        { name: 'View demo', href: 'https://oleinikovapolina.github.io/landing-for-FTML-2/' }
      ],
      date: '10.21'
    },
    {
      technologies: [
        { name: 'Vue' }, { name: 'Vuex' }, { name: 'Typescript' },
        { name: 'Vuetify' }, { name: 'Vue-router' },
        { name: 'Vuex-smart-module' }, { name: 'Vue2-editor' },
        { name: 'Vue-moment' }, { name: 'Axios' }
      ],
      images: [
        require('@/assets/images/projects/projectControl/projectControl 6.png'),
        require('@/assets/images/projects/projectControl/projectControl3.jpg'),
        require('@/assets/images/projects/projectControl/projectControl 4.png'),
        require('@/assets/images/projects/projectControl/projectControl 8.png'),
        require('@/assets/images/projects/projectControl/projectControl 5.png'),
        require('@/assets/images/projects/projectControl/projectControl1.png'),
        require('@/assets/images/projects/projectControl/projectControl 7.png')
      ],
      categories: ['vue', 'typescript', 'pet-project'],
      links: [{ name: 'github', href: 'https://github.com/OleinikovaPolina/ProjectControl' }],
      date: '02.22-03.22'
    },
    {
      technologies: [
        { name: 'Vue' }, { name: 'Vuex' }, { name: 'Typescript' },
        { name: 'Vuetify' }, { name: 'Vue-router' },
        { name: 'Vue-moment' }, { name: 'Axios' }, { name: 'PWA' }
      ],
      images: [
        require('@/assets/images/projects/weather/weather1.png'),
        require('@/assets/images/projects/weather/weather2.png'),
        require('@/assets/images/projects/weather/weather3.png')
      ],
      categories: ['vue', 'typescript', 'pet-project'],
      links: [
        { name: 'github', href: 'https://github.com/OleinikovaPolina/Weather' },
        { name: 'View demo', href: 'https://oleinikovapolina.github.io/Weather/dist/' }
      ],
      date: '01.22'
    },
    {
      technologies: [
        { name: 'Vue' }, { name: 'Vuex' },
        { name: 'Typescript' }, { name: 'Vuetify' },
        { name: 'Vue-router' }, { name: 'Vuex-smart-module' },
        { name: 'Vue2-editor' }, { name: 'Vuedraggable' },
        { name: 'Vue-moment' }, { name: 'Axios' }
      ],
      images: [
        require('@/assets/images/projects/tracker/tracker1.png'),
        require('@/assets/images/projects/tracker/tracker2.png'),
        require('@/assets/images/projects/tracker/tracker3.png'),
        require('@/assets/images/projects/tracker/tracker4.png')
      ],
      categories: ['vue', 'typescript', 'pet-project'],
      links: [
        { name: 'github', href: 'https://github.com/OleinikovaPolina/task-tracking-for-FTML' },
        { name: 'View demo', href: 'https://oleinikovapolina.github.io/task-tracking-for-FTML/dist/#/' }
      ],
      date: '04.22'
    },
    {
      technologies: [
        { name: 'Vue' }, { name: 'Javascript' }, { name: 'Vuetify' },
        { name: 'Vue-router' }, { name: 'Axios' }, { name: 'PWA' }
      ],
      images: [
        require('@/assets/images/projects/rick/rick.png'),
        require('@/assets/images/projects/rick/rick1.png'),
        require('@/assets/images/projects/rick/rick2.png'),
        require('@/assets/images/projects/rick/rick3.png')
      ],
      categories: ['vue', 'javascript', 'pet-project'],
      links: [
        { name: 'github', href: 'https://github.com/OleinikovaPolina/RickAndMorty' },
        { name: 'View demo', href: 'https://oleinikovapolina.github.io/RickAndMorty/dist/#/' }
      ],
      date: '12.21'
    },
    {
      technologies: [
        { name: 'React' }, { name: 'Javascript' }, { name: 'mui' },
        { name: 'React-router-dom' }, { name: 'Axios' }, { name: 'pwa' }
      ],
      images: [
        require('@/assets/images/projects/superapp/superapp1.png'),
        require('@/assets/images/projects/superapp/superapp2.png'),
        require('@/assets/images/projects/superapp/superapp3.png'),
        require('@/assets/images/projects/superapp/superapp4.png')
      ],
      categories: ['javascript', 'pet-project'],
      links: [{ name: 'View demo', href: 'https://oleinikovapolina.github.io/SuperAppForStudentsDemo/#/' }],
      date: '12.21'
    },
    {
      technologies: [
        { name: 'html' }, { name: 'css' },
        { name: 'bootstrap' }, { name: 'Javascript' }
      ],
      images: [
        require('@/assets/images/projects/alex/alex1.png'),
        require('@/assets/images/projects/alex/alex2.png'),
        require('@/assets/images/projects/alex/alex3.png'),
        require('@/assets/images/projects/alex/alex4.png'),
        require('@/assets/images/projects/alex/alex5.png'),
        require('@/assets/images/projects/alex/alex6.png'),
        require('@/assets/images/projects/alex/alex7.png'),
        require('@/assets/images/projects/alex/alex8.png'),
        require('@/assets/images/projects/alex/alex9.png')
      ],
      categories: ['animation', 'javascript'],
      links: [
        { name: 'github', href: 'https://github.com/OleinikovaPolina/alexie' },
        { name: 'View demo', href: 'https://oleinikovapolina.github.io/alexie/' }
      ],
      date: '11.21-12.21'
    },
    {
      technologies: [
        { name: 'Vue' }, { name: 'Axios' },
        { name: 'Bootstrap' }, { name: 'Javascript' }
      ],
      images: [
        require('@/assets/images/projects/eTesting/eTesting1.png'),
        require('@/assets/images/projects/eTesting/eTesting2.png'),
        require('@/assets/images/projects/eTesting/eTesting3.png'),
        require('@/assets/images/projects/eTesting/eTesting4.png'),
        require('@/assets/images/projects/eTesting/eTesting5.png'),
        require('@/assets/images/projects/eTesting/eTesting6.png'),
        require('@/assets/images/projects/eTesting/eTesting7.png'),
        require('@/assets/images/projects/eTesting/eTesting8.png'),
        require('@/assets/images/projects/eTesting/eTesting9.png')
      ],
      categories: ['vue', 'javascript', 'pet-project'],
      links: [],
      date: '08.20'
    },
    {
      technologies: [
        { name: 'Vue' }, { name: 'Axios' },
        { name: 'Bootstrap' }, { name: 'Javascript' }
      ],
      images: [
        require('@/assets/images/projects/enrollee/enrollee1.png'),
        require('@/assets/images/projects/enrollee/enrollee2.png'),
        require('@/assets/images/projects/enrollee/enrollee3.png'),
        require('@/assets/images/projects/enrollee/enrollee4.png')
      ],
      categories: ['vue', 'javascript'],
      links: [],
      date: '05.20-06.20'
    }
  ]
}
