import { GetterTree } from 'vuex'

import type { LinkType } from '@/types'

import { RootState } from '@/store'
import { State } from './state'

export type Getters = {
  socials (state: State): LinkType[],
}

export const getters: GetterTree<State, RootState> & Getters = {
  socials: (state) => state.socials,
}