import { GetterTree } from 'vuex'

import type { AchievementType, InfoType, TechnologyType } from '@/types'

import { RootState } from '@/store'
import { State } from './state'

export type Getters = {
  work (state: State): InfoType[],
  skills (state: State): TechnologyType[],
  achievements (state: State): AchievementType[],
}

export const getters: GetterTree<State, RootState> & Getters = {
  achievements: (state) => state.achievements,
  work: (state) => state.work,
  skills: (state) => state.skills
}