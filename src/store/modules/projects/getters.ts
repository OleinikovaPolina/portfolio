import { GetterTree } from 'vuex'

import type { SocialType } from '@/types'

import { RootState } from '@/store'
import { State } from './state'

export type Getters = {
  socials (state: State): SocialType[],
  email (state: State): string,
}

export const getters: GetterTree<State, RootState> & Getters = {
  socials: (state) => state.socials,
  email: (state) => state.email,
}