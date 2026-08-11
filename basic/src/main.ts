import { createApp } from 'vue';
import App from './App.vue';
import Contactus from './components/ContactUs.vue';
import Counter from './components/Counter.vue';


import './style.css';
const app = createApp(App);
app.component('Contactus',Contactus)
app.component('Counter',Counter)
app.mount('#app')
