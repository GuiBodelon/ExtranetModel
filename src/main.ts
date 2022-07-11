import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import './index.css'

//Import Export From JSON -> Excel
import exportFromJSON from 'export-from-json'

//Import Vue 3 Datepicker - https://vue3datepicker.com/
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

////////////////////////Quasar Imports////////////////////////
import { Quasar, Notify, Dialog } from 'quasar'
import quasarLang from 'quasar/lang/pt-BR'
import quasarIconSet from 'quasar/icon-set/fontawesome-v6'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// ..required because of selected iconSet:
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'
//Import Quasar css
import 'quasar/src/css/index.sass'
//////////////////////////////////////////////////////////////

//Import vue-sidebar-menu https://yaminncco.github.io/vue-sidebar-menu/#/
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

createApp(App)
.use(store, key)
.use(router)
.use(VueSidebarMenu)
.use(Quasar, {
    plugins: {
        // import Quasar plugins and add here
        Notify,
        Dialog
    }, 
    config: {
        notify: { /* look at QuasarConfOptions from the API card */ }
    },
    lang: quasarLang,
    iconSet: quasarIconSet,
})
.component('Datepicker', Datepicker)
.component("exportFromJSON", exportFromJSON)
.mount('#app')

