import { createApp, } from 'vue'
import App from './App.vue'
import '@/scripts/fontawsome.js'
import router from '@/scripts/router'

// components
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import BaseDropdown from './components/UI/BaseDropdown'
import BaseProgress from './components/UI/BaseProgress'

const app = createApp(App)

app.component("BaseDropdown", BaseDropdown)
    .component("FontAwesomeIcon", FontAwesomeIcon)
    .component("BaseProgress", BaseProgress)

    
app.use(router)
app.mount('#app')
