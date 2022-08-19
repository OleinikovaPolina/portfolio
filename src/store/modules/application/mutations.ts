import { MutationTree } from 'vuex'

import { State } from './state'

export type Mutations = {
  CHANGE_THEME (state: State): void
}

export const mutations: MutationTree<State> & Mutations = {
  CHANGE_THEME: (state) => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', state.theme)
  }
}