import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// Example plugin
// import axios from './plugin/axios'

const apiKey=  "bb9be7856d820d280efdc8865f07d5b2"

const app = createApp(App)

app.use(router)

app.provide("moviesApipathImage", "https://image.tmdb.org/t/p/")

const moviesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {api_key : apiKey}})
app.provide("moviesApi", moviesApi)
// Example plugin
// app.use(axios, {name: "moviesApi",  baseUrl: "https://api.themoviedb.org/3", params : {api_key : apiKey}})


app.mount('#app')
