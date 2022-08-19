import type { LinkType } from '@/types'

export type State = {
  socials: LinkType[];
}

export const state: State = {
  socials: [
    { icon: 'mdi-github', name: 'github', href: 'https://github.com/OleinikovaPolina', color: 'black' },
    { icon: 'mdi-email', name: 'email', href: 'mailto:oleinikowa.poly@yandex.ru', color: 'deep-purple darken-3' },
    { icon: '', name: 'vk', href: 'https://vk.com/poleo_you', color: 'blue darken-3' }
  ]
}
