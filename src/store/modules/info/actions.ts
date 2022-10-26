import { ActionContext, ActionTree } from 'vuex'

import { State } from './state'
import { RootState } from '@/store'
import { Mutations } from '@/store/modules/info/mutations'

import { ContributionType } from '@/types'

import axios from 'axios'

type AugmentedActionContext = {
  commit<K extends keyof Mutations> (
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>

export type Actions = {
  getContributionsGitlab (): Promise<ContributionType[]>,
  getContributionsGithub (): Promise<ContributionType[]>,
  getContributions ({ dispatch, commit }: AugmentedActionContext): void
}

export const actions: ActionTree<State, RootState> & Actions = {
  getContributionsGitlab: async () => {
    const contributions: ContributionType[] = []
    await axios
      .get('https://proxy.zme.ink/https://git.itmo.su/users/id336757/calendar.json?timestamp=' + new Date().getTime())
      .then((res) => {
        for (const [key, value] of Object.entries(res.data)) {
          contributions.push({
            date: key,
            count: Number(value)
          })
        }
      })
    return contributions
  },
  getContributionsGithub: async () => {
    const contributions: ContributionType[] = []
    await axios
      .get('https://gh-calendar.rschristian.dev/user/OleinikovaPolina?timestamp=' + new Date().getTime())
      .then(res => res.data.contributions)
      .then(data => {
        for (const res of data) {
          for (const el of res) {
            contributions.push({
              date: el.date,
              count: Number(el.count)
            })
          }
        }
      })
    return contributions
  },
  getContributions: async ({ dispatch, commit }) => {
    const gitlab = await dispatch('getContributionsGitlab')
    const github = await dispatch('getContributionsGithub')
    if (gitlab) {
      github.forEach((element: ContributionType, index: number) => {
        const itemIndex = gitlab.findIndex((item: ContributionType) => item.date === element.date)
        if (itemIndex !== -1) {
          github[index].count = github[index].count + gitlab[itemIndex].count
        }
      })
    }
    commit('SET_CONTRIBUTIONS', github)
  }
}
