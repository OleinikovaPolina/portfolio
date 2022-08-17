import { createStore } from 'vuex'
import { store as application, ApplicationStore, State as ApplicationState } from '@/store/modules/application'
import { store as projects, ProjectsStore, State as ProjectsState } from '@/store/modules/projects'
import { store as contacts, ContactsStore, State as ContactsState } from '@/store/modules/contacts'
import { store as info, InfoStore, State as InfoState } from '@/store/modules/info'

export type RootState = {
  application: ApplicationState;
  projects: ProjectsState;
  contacts: ContactsState;
  info: InfoState;
}

export type Store = ApplicationStore<Pick<RootState, 'application'>>
  & ProjectsStore<Pick<RootState, 'projects'>>
  & ContactsStore<Pick<RootState, 'contacts'>>
  & InfoStore<Pick<RootState, 'info'>>

export const store = createStore({
  modules: { application, projects, contacts, info }
})

export function useStore (): Store {
  return store as Store
}