import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'    

import * as VueGoogleMaps from "vue2-google-maps";

import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";
import { Integrations } from "@sentry/tracing";
import 'animate.css';
import './assets/js/webp-check.js';


Sentry.init({
    dsn: "https://17c103bd468544239d4bf33697193158@o366344.ingest.sentry.io/5524243",
    integrations: [
        new VueIntegration({
            Vue,
            tracing: true,
        }),
        new Integrations.BrowserTracing(),
    ],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
});

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyCOg3Uf5dBeiOOybZEOef_8--NwgyF81YI",
        libraries: "places" //necessary for places input
    }
});

new Vue({
    render: h => h(App),
}).$mount('#app')