import { GetterTree } from 'vuex'

import type { InfoType, TechnologyType } from '@/types'

import { RootState } from '@/store'
import { State } from './state'

export type Getters = {
  work (state: State): InfoType[],
  education (state: State): InfoType[],
  skills (state: State): TechnologyType[],
}

export const getters: GetterTree<State, RootState> & Getters = {
  work: (state) => state.work,
  education: (state) => state.education,
  skills: (state) => state.skills
}