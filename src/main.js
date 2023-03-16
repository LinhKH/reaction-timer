import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import global css
import './assets/main.css'
import { projectAuth } from './firebase/config';


projectAuth.onAuthStateChanged(() => {
    createApp(App).use(router).mount('#app')
});