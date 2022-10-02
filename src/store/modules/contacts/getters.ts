import { GetterTree } from 'vuex'

import type { LinkType } from '@/types'

import { RootState } from '@/store'
import { State } from './state'

export type Getters = {
  email (state: State): LinkType,
  socials (state: State): LinkType[],
  contacts (state: State): LinkType[],
}

export const getters: GetterTree<State, RootState> & Getters = {
  email: (state) => state.email,
  socials: (state) => state.socials,
  contacts: (state) => state.socials.concat([state.email])
}
