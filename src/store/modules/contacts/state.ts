import type { HeaderLinkType } from '@/types'

export type State = {
  headerLinks: HeaderLinkType[];
}

export const state: State = {
  headerLinks: [
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contacts', link: '#contacts' }
  ]
}
