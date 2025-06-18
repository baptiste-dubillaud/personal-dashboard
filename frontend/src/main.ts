import '@/assets/main.scss'

import { createApp } from 'vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faSun, 
  faMoon, 
  faUser, 
  faHome,
  faHeartbeat,
  faCalendarAlt,
  faWallet,
  faCheckCircle,
  faCog
} from '@fortawesome/free-solid-svg-icons'

import App from '@/App.vue'
import router from '@/router'

// Add icons to library
library.add(
  faSun, 
  faMoon, 
  faUser, 
  faHome,
  faHeartbeat,
  faCalendarAlt,
  faWallet,
  faCheckCircle,
  faCog
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

// Finally, mount the app to the DOM
app.mount('#app')
