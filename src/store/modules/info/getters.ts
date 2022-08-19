import { GetterTree } from 'vuex'

import type { AchievementType, InfoType, TechnologyType } from '@/types'

import { RootState } from '@/store'
import { State } from './state'
import i18n from '@/i18n'

export type Getters = {
  skills (state: State): TechnologyType[],
  achievements (state: State): AchievementType[],
}

export const getters: GetterTree<State, RootState> & Getters = {
  achievements: (state) => {
    state.achievements.forEach((item,i)=>{
      item.title=i18n.global.t(`achievements[${i}].title`)
      item.content=i18n.global.tm(`achievements[${i}].content`)
    })
    return state.achievements
  },
  skills: (state) => state.skills
}