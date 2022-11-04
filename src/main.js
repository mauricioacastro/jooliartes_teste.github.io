import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router.js'
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Vuex from 'vuex';
import store from '@/store/store.js';

createApp(App).use(router).use(VueSweetalert2).use(Vuex).use(store).mount('#app')
