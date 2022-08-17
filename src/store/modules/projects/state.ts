import type { ProjectType } from '@/types'

export type State = {
  projects: ProjectType[];
  categories: string[];
}

export const state: State = {
  categories: [
    'pet-project',
    'animation',
    'vue'
  ],
  projects: [
    {
      title: '🏫💻 Faculty of ICT website',
      descriptionShort: '📝📅 The site is the hallmark of ITMO Faculty of ICT. The site should provide accessible information about the activities of the faculty, disciplines and teachers',
      descriptionLong: `
<p>The Faculty of Infocommunication Technologies is the main starting point in the development of professional skills. The site is the hallmark of ITMO Faculty of ICT. When going to the site, the entrant or his parents should have an understanding of what kind of faculty it is and what its specialization is. The site contains accessible information about the activities, information  about disciplines and teachers. There are also pages for administration.</p>
<h2>FEATURES</h2>
<ul>
<li>dark and light theme</li>
<li>animation:
<ul>
<li>spinning hexagons with text appearance</li>
<li>carousel with popup oval with text</li>
<li>an arrow moving along the road and passing the marks, reaching which the text appears. at the end of the road is a book that changes the position and text</li>
<li>smooth appearance of the element when scrolling</li>
<li>lines emerging from the sides of the page</li>
<li>block with photos moving along ovals with hover effect</li>
</ul>
</li>
<li>admin:
<ul>
<li>crop photos on upload</li>
<li>changing the format of photos when previewing blocks (double and slider)</li>
<li>preview of the post, preview of blocks for articles that will lead to the article itself on the pages</li>
<li>six types of custom blocks in post creation (two blocks, text, image, slider, quote, subtitle)</li>
<li>draggable blocks</li>
</ul>
</li>
<li>pagination, search, news filtering</li>
<li>carousels:
<ul>
<li>with oval blocks</li>
<li>with 6 (4) images in two lines</li>
<li>with 4 (2) zoom hover effect</li>
<li>with 1 image and height adjusted to the first one in the queue</li>
</ul>
</li>
<li>expansion-panel with outgoing lines</li>
</ul>

<h2>Built With</h2>
<ul>
<li>Vue</li>
<li>Vuex</li>
<li>Vue-router</li>
<li>Vue-moment</li>
<li>Vuetify</li>
<li>Vue2-editor</li>
<li>Vuedraggable</li>
<li>Vue-slick-carousel</li>
<li>Vue-croppie</li>
<li>Axios</li>
</ul>
`,
      technologies: [{ name: 'Vue' }, { name: 'Vuex' }],
      images: [
        require('@/assets/images/undraw_contact_us_re_4qqt.svg'),
        require('@/assets/images/sectionLight.svg')
      ],
      categories: ['pet-project', 'animation'],
      links: [{ name: 'github', href: 'https://github.com/OleinikovaPolina/ict.itmo' }]
    },
    {
      title: '📝📅  Task tracker',
      descriptionShort: 'Task tracking with backlog, sprints, drag and drop\n',
      descriptionLong: 'Create/edit tasks, sprints\n' +
        'Backlog page\n' +
        'Drag and drop tasks into a sprint\n' +
        'Sprints page:two types of sprint display:\n' +
        'The first one is a list of all tasks filtered by priority, title, creation date, deadline\n' +
        'The second is a tabular view of all tasks by task status\n' +
        'Using localStorage to save all project objects\n' +
        'Relax page with pictures and videos of dogs',
      technologies: [{ name: 'Vue' }, { name: 'Vuex' }],
      images: [
        require('@/assets/images/undraw_contact_us_re_4qqt.svg'),
        require('@/assets/images/sectionLight.svg')
      ],
      categories: ['vue'],
      links: [{ name: 'github', href: 'https://github.com/OleinikovaPolina/task-tracking-for-FTML' }]
    }
  ]
}
