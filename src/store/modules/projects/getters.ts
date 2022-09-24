import { GetterTree } from 'vuex'

import type { ProjectType } from '@/types'

import { RootState } from '@/store'
import { State } from './state'
import i18n from '@/i18n'

export type Getters = {
  projects (state: State): (categories: string[], title: string) => ProjectType[],
  categories (state: State): string[],
}

export const getters: GetterTree<State, RootState> & Getters = {
  projects: (state) => (categories = [], title = '') => {
    state.projects.forEach((item, i) => {
      item.title = i18n.global.t(`projectsArray[${i}].title`)
      item.descriptionShort = i18n.global.tm(`projectsArray[${i}].descriptionShort`)
      item.descriptionLong = i18n.global.tm(`projectsArray[${i}].descriptionLong`)
    })

    return state.projects
      .filter(project => project.title?.toLowerCase().includes(title.toLowerCase().trim()))
      .filter(project => (!categories.length || project.categories
        .some((category) => categories
          .includes(category))))
  },
  categories: (state) => {
    return state.categories
  }
}
