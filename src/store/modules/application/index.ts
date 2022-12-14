import { Store as VuexStore, Module } from 'vuex'

import { RootState } from '@/store'
import type { State } from './state'

export { State }

import { state } from './state'
import { getters } from './getters'
import { mutations } from './mutations'

export type ApplicationStore<S = State> = Omit<VuexStore<S>, 'getters' | 'commit' | 'dispatch'>

export const store: Module<State, RootState> = {
  state,
  getters,
  mutations,
  namespaced: true
}