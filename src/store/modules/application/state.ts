import type { HeaderLinkType } from '@/types'

export type State = {
  headerLinks: HeaderLinkType[];
  theme: string
}

export const state: State = {
  headerLinks: [
    { name: 'Home', path: '/', icon: 'mdi-information-outline' },
    { name: 'Projects', path: '/projects', icon: 'mdi-view-list-outline' },
    { name: 'Contacts', path: '/contacts', icon: 'mdi-email-outline' }
  ],
  theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
}
