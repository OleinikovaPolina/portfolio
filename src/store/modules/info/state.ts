import type { InfoType, TechnologyType } from '@/types'

export type State = {
  education: InfoType[],
  work: InfoType[],
  skills: TechnologyType[]
}

export const state: State = {
  education: [],
  work:[],
  skills: []
}
