import type { LinkType } from '@/types'

export type State = {
  socials: LinkType[];
}

export const state: State = {
  socials: [
    { icon: 'mdi-email', name: 'email', href: 'mailto:oleinikowa.poly@yandex.ru' },
    { icon: 'mdi-github', name: 'github', href: 'https://github.com/OleinikovaPolina' },
    { icon: '', name: 'vk', href: 'https://vk.com/poleo_you' }
  ]
}
