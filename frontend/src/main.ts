import '@/assets/main.scss'

import { createApp } from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoon, faUser } from '@fortawesome/free-solid-svg-icons'

import App from '@/App.vue'

library.add(faSun, faMoon)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

// Finally, mount the app to the DOM
app.mount('#app')
