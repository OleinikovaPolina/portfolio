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
      title: '🏫💻 Faculty of ICT website',
      descriptionShort: 'The site is the hallmark of ITMO Faculty of ICT. The site should provide accessible information about the activities of the faculty, disciplines and teachers',
      descriptionLong: `
<p><strong>✨</strong><strong>&nbsp;About The Project</strong>&nbsp;</p>
<p>The Faculty of Infocommunication Technologies is the main starting point in the development of professional skills. The site is the hallmark of ITMO Faculty of ICT. When going to the site, the entrant or his parents should have an understanding of what kind of faculty it is and what its specialization is. The site contains accessible information about the activities, information about disciplines and teachers. There are also pages for administration.</p>
<p><strong>🗺</strong><strong>️</strong><strong>&nbsp;Map</strong></p>
<p><strong>basic</strong></p>
<ul>
<li>home</li>
<ul>
<li>articles</li>
</ul>
<li>events</li>
<ul>
<li>all news</li>
<li>events, news, announcements</li>
</ul>
<li>for students</li>
<ul>
<li>articles</li>
</ul>
<li>admission</li>
<ul>
<li>list of directions for master's degree, bachelor's degree</li>
<ul>
<li>directions pages</li>
<ul>
<li>disciplines of the direction</li>
</ul>
</ul>
</ul>
<li>contacts</li>
</ul>
<p><strong>admin panel</strong></p>
<ul>
<li>login page</li>
<li>published</li>
<ul>
<li>editing</li>
</ul>
<li>create an entry</li>
<li>favorites</li>
<ul>
<li>editing</li>
</ul>
<li>tags</li>
</ul>
<p><strong>🌟</strong><strong>&nbsp;FEATURES</strong></p>
<ul>
<li>dark and light theme</li>
<li>animation:</li>
<ul>
<li>spinning hexagons with text appearance</li>
<li>carousel with popup oval with text</li>
<li>an arrow moving along the road and passing the marks, reaching which the text appears. at the end of the road is a book that changes the position and text</li>
<li>smooth appearance of the element when scrolling</li>
<li>lines emerging from the sides of the page</li>
<li>block with photos moving along ovals with hover effect</li>
</ul>
<li>admin:</li>
<ul>
<li>crop photos on upload</li>
<li>changing the format of photos when previewing blocks (double and slider)</li>
<li>preview of the post, preview of blocks for articles that will lead to the article itself on the pages</li>
<li>six types of custom blocks in post creation (two blocks, text, image, slider, quote, subtitle)</li>
<li>draggable blocks</li>
</ul>
<li>pagination, search, news filtering</li>
<li>carousels:</li>
<ul>
<li>with oval blocks</li>
<li>with 6 (4) images in two lines</li>
<li>with 4 (2) zoom hover effect</li>
<li>with 1 image and height adjusted to the first one in the queue</li>
</ul>
<li>expansion-panel with outgoing lines</li>
</ul>
`,
      technologies: [{ name: 'Vue' }, { name: 'Vuex' },
        { name: 'Vuetify' }, { name: 'Axios' },
        { name: 'Vue-router' }, { name: 'Vue-moment' },
        { name: 'Vuedraggable' }, { name: 'Vue-slick-carousel' },
        { name: 'Vue-croppie' }, { name: 'Vue2-editor' }],
      images: [
        require('@/assets/images/projects/12.png'),
        require('@/assets/images/sectionLight.svg')
      ],
      categories: ['vue', 'animation', 'javascript'],
      links: [{ name: 'github', href: 'https://github.com/OleinikovaPolina/ict.itmo' }]
    },
    {
      title: '📝📅  Task tracker',
      descriptionShort: 'Create sprints, add tasks to them. Track the process by filtering by priority/title/creation date/deadline, or in the table by task status. If you are exhausted by a long list of tasks, just relax: look at the dogs.',
      descriptionLong: `<p><strong>✨</strong><strong> About The Project</strong></p>
<p>Create sprints, add tasks to them. Track the process by filtering by priority/title/creation date/deadline, or in the table by task status. If you are exhausted by a long list of tasks, just relax: look at the dogs.</p>
<p><strong>✨</strong><strong> Features</strong></p>
<ul>
<li>Create/edit tasks, sprints</li>
<li>Backlog page</li>
<li>Drag and drop tasks into a sprint</li>
<li>Sprints page: two types of sprint display:</li>
<ul>
<li>The first one is a list of all tasks filtered by priority, title, creation date, deadline</li>
<li>The second is a tabular view of all tasks by task status</li>
</ul>
<li>Using localStorage to save all project objects</li>
<li>Relax page with pictures and videos of dogs</li>
</ul>`,
      technologies: [{ name: 'Vue' }, { name: 'Vuex' },
        { name: 'Typescript' }, { name: 'Vuetify' },
        { name: 'Vue-router' }, { name: 'Vuex-smart-module' },
        { name: 'Vue2-editor' }, { name: 'Vuedraggable' },
        { name: 'Vue-moment' }, { name: 'Axios' }],
      images: [
        require('@/assets/images/projects/img2.png'),
        require('@/assets/images/sectionLight.svg')
      ],
      categories: ['vue', 'javascript', 'pet-project'],
      links: [{ name: 'github', href: 'https://github.com/OleinikovaPolina/task-tracking-for-FTML' }]
    },
    {
      title: '📝📅  Project Control',
      descriptionShort: 'Create projects, search for participants for a certain position, divide tasks between them and view progress in a kanban board. Also join any other projects yourself.',
      descriptionLong: `<p><strong>✨&nbsp;About The Project</strong></p>
<p>Create projects, search for participants for a certain position, divide tasks between them and view progress in a kanban board. Also join any other projects yourself.</p>
<p><strong>✨&nbsp;Features</strong></p>
<ul>
<li>authorization, registration, profile change</li>
<li>creating a project, adding roles to the project, searching for participants for these roles (applications from people or from the creator)</li>
<li>beautiful kanban board for a project, adding and changing tasks, changing the status by task participant or project creator, marking burning tasks</li>
<li>view (some with pagination)</li>
<ul>
<li>all projects with the ability to join it</li>
<li>all users with the ability to add them to your projects</li>
<li>your applications</li>
<li>projects in which you are a member</li>
</ul>
<li>dark and light themes</li>
<li>icons for users by the first letters of the name with a unique color</li>
</ul>`,
      technologies: [{ name: 'Vue' }, { name: 'Vuex' }, { name: 'Typescript' },
        { name: 'Vuetify' }, { name: 'Vue-router' },
        { name: 'Vuex-smart-module' }, { name: 'Vue2-editor' },
        { name: 'Vue-moment' }, { name: 'Axios' }],
      images: [
        require('@/assets/images/projects/img_7.png'),
        require('@/assets/images/sectionLight.svg')
      ],
      categories: ['vue', 'typescript', 'pet-project'],
      links: [{ name: 'github', href: 'https://github.com/OleinikovaPolina/ProjectControl' }]
    },
    {
      title: '🌥️❄️ Weather',
      descriptionShort: 'An application that shows the weather by geolocation or by the selected city in the settings. View the weather in other Russian cities and add them to your favorites (short and full report).',
      descriptionLong: `<p><strong>✨&nbsp;About The Project</strong></p>
<p>An application that shows the weather by geolocation or by the selected city in the settings. View the weather in other Russian cities and add them to your favorites (short and full report).</p>
<p><strong>✨&nbsp;Features</strong></p>
<ul>
<li>weather display by geolocation or by a selected city in the settings</li>
<li>weather search for Russian cities, adding them to favorites</li>
<li>complete weather report with the ability to view details by hour or day</li>
<li>update information button</li>
<li>skeleton loading</li>
<li>tooltips with information description</li>
<li>changing units</li>
<li>different images for the weather</li>
<li>pwa</li>
</ul>`,
      technologies: [{ name: 'Vue' }, { name: 'Vuex' }, { name: 'Typescript' },
        { name: 'Vuetify' }, { name: 'Vue-router' },
        { name: 'Vue-moment' }, { name: 'Axios' }, { name: 'PWA' }],
      images: [
        require('@/assets/images/projects/41.png'),
        require('@/assets/images/sectionLight.svg')
      ],
      categories: ['vue', 'typescript', 'pet-project'],
      links: [{ name: 'github', href: 'https://github.com/OleinikovaPolina/Weather' }]
    }
  ]
}
