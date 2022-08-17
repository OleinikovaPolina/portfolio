import { GetterTree } from 'vuex'

import type { ProjectType } from '@/types'

import { RootState } from '@/store'
import { State } from './state'

export type Getters = {
  projects (state: State): (categories: string[], title: string) => ProjectType[],
  categories (state: State): string[],
}

export const getters: GetterTree<State, RootState> & Getters = {
  projects: (state) => (categories = [], title = '') => {
    return state.projects
      .filter(project => (!categories.length || project.categories
        .some((category) => categories
          .includes(category)))
      )
      .filter(project => project.title.toLowerCase().includes(title.toLowerCase().trim()))
  },
  categories: (state) => {
    return state.categories
  }
}