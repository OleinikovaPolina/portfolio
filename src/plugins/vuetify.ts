// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#070c2d',
          surface: '#0f1748',
          section: '#0f1748',
          scrollbar: '#0a113d',
          'scrollbar-track': '#16205d'
        },
        variables: {}
      },
      light: {
        dark: false,
        colors: {
          section: '#f4f6f7',
          scrollbar: '#cbd5e0',
          'scrollbar-track': '#edf2f7'
        },
        variables: {}
      }
    }
  }
})
