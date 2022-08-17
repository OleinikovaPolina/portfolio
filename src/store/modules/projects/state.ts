import type { SocialType } from '@/types'

export type State = {
  socials: SocialType[];
  email: string;
}

export const state: State = {
  email: '',
  socials: [
    { icon: '', link: 'https://github.com/OleinikovaPolina' }
  ]
}
