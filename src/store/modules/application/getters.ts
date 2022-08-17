import { GetterTree } from 'vuex'

import type { HeaderLinkType } from '@/types'

import { RootState } from '@/store'
import { State } from './state'

export type Getters = {
  headerLinks (state: State): HeaderLinkType[],
  theme (state: State): string
}

export const getters: GetterTree<State, RootState> & Getters = {
  headerLinks: (state) => state.headerLinks,
  theme: (state) => state.theme
}