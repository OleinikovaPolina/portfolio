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
        { name: 'Vue' }, { name: 'Vuex' },
        { name: 'Vuetify' }, { name: 'Axios' },
        { name: 'Vue-router' }, { name: 'Vue-moment' },
        { name: 'Vuedraggable' }, { name: 'Vue-slick-carousel' },
        { name: 'Vue-croppie' }, { name: 'Vue2-editor' }
      ],
      images: [
        require('@/assets/images/projects/12.png')
      ],
      categories: ['vue', 'animation', 'javascript'],
      links: [
        { name: 'github', href: 'https://github.com/OleinikovaPolina/ict.itmo' },
        {name: 'View demo',href:'https://fict.itmo.ru/'}
      ]
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
        require('@/assets/images/projects/img2.png')
      ],
      categories: ['vue', 'typescript', 'pet-project'],
      links: [
        { name: 'github', href: 'https://github.com/OleinikovaPolina/task-tracking-for-FTML' },
        {name: 'View demo',href:'https://oleinikovapolina.github.io/task-tracking-for-FTML/dist/#/'}
      ]
    },
    {
      technologies: [
        { name: 'Vue' }, { name: 'Vuex' }, { name: 'Typescript' },
        { name: 'Vuetify' }, { name: 'Vue-router' },
        { name: 'Vuex-smart-module' }, { name: 'Vue2-editor' },
        { name: 'Vue-moment' }, { name: 'Axios' }
      ],
      images: [
        require('@/assets/images/projects/img_7.png')
      ],
      categories: ['vue', 'typescript', 'pet-project'],
      links: [{ name: 'github', href: 'https://github.com/OleinikovaPolina/ProjectControl' }]
    },
    {
      technologies: [
        { name: 'Vue' }, { name: 'Vuex' }, { name: 'Typescript' },
        { name: 'Vuetify' }, { name: 'Vue-router' },
        { name: 'Vue-moment' }, { name: 'Axios' }, { name: 'PWA' }
      ],
      images: [
        require('@/assets/images/projects/41.png')
      ],
      categories: ['vue', 'typescript', 'pet-project'],
      links: [
        { name: 'github', href: 'https://github.com/OleinikovaPolina/Weather' },
        {name: 'View demo',href:'https://oleinikovapolina.github.io/Weather/dist/'}
      ]
    },
    {
      technologies: [
        { name: 'Vue' }, { name: 'Javascript' }, { name: 'Vuetify' },
        { name: 'Vue-router' }, { name: 'Axios' }, { name: 'PWA' }
      ],
      images: [
        require('@/assets/images/projects/ram.png')
      ],
      categories: ['vue', 'javascript', 'pet-project'],
      links: [
        { name: 'github', href: 'https://github.com/OleinikovaPolina/RickAndMorty' },
        {name: 'View demo',href:'https://oleinikovapolina.github.io/RickAndMorty/dist/#/'}
      ]
    },
    {
      technologies: [
        { name: 'HTML' }, { name: 'Javascript' }, { name: 'CSS' },
        { name: 'Bootstrap' }
      ],
      images: [
        require('@/assets/images/projects/retro.png')
      ],
      categories: ['javascript', 'animation', 'pet-project'],
      links: [
        { name: 'github', href: 'https://github.com/OleinikovaPolina/landing-for-FTML-2' },
        {name: 'View demo',href:'https://oleinikovapolina.github.io/landing-for-FTML-2/'}
      ]
    },
    {
      technologies: [
        { name: 'React' }, { name: 'Javascript' }, { name: 'mui' },
        { name: 'React-router-dom' }, { name: 'Axios' }, { name: 'pwa' }
      ],
      images: [
        require('@/assets/images/projects/safs.png')
      ],
      categories: ['javascript', 'pet-project'],
      links: [{ name: 'View demo', href: 'https://oleinikovapolina.github.io/SuperAppForStudentsDemo/#/' }]
    },
    {
      technologies: [
        { name: 'html' }, { name: 'css' },
        { name: 'bootstrap' }, { name: 'Javascript' }
      ],
      images: [
        require('@/assets/images/projects/an.png')
      ],
      categories: ['animation', 'javascript'],
      links: [
        { name: 'github', href: 'https://github.com/OleinikovaPolina/alexie' },
        {name: 'View demo',href:'https://oleinikovapolina.github.io/alexie/'}
      ]
    }
  ]
}
