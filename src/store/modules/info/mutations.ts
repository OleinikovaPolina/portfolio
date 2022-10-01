import { MutationTree } from 'vuex'

import type { ContributionType } from '@/types'

import { State } from './state'

export type Mutations = {
  SET_CONTRIBUTIONS (state: State, payload: ContributionType[]): void
}

export const mutations: MutationTree<State> & Mutations = {
  SET_CONTRIBUTIONS: (state, payload) => {
    state.contributions = payload
  }
}
