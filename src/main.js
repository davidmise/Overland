import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import $ from 'jquery'

const app = createApp(App)
//  boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'animate.css'

app.use(createPinia())
app.use(router)
app.use($)

app.mount('#app')
