import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from '@/store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './styles/index.scss'
import i18n from './i18n'

loadFonts().then()

createApp(App).use(i18n).use(router).use(store).use(vuetify).mount('#app')
