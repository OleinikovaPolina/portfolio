import type { LinkType } from '@/types'

export type State = {
  email: LinkType;
  socials: LinkType[];
}

export const state: State = {
  email: { icon: 'mdi-email', name: 'email', href: 'mailto:oleinikowa.poly@yandex.ru', color: 'deep-purple' },
  socials: [
    { icon: 'mdi-github', name: 'github', href: 'https://github.com/OleinikovaPolina', color: 'black' },
    { icon: '', name: 'vk', href: 'https://vk.com/poleo_you', color: 'blue darken-3' }
  ]
}
