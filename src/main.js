import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faInstagram, faFacebook, faTwitter, faSnapchat } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


// setup font awesome icons
library.add([faInstagram, faFacebook, faTwitter, faSnapchat, faEnvelope]);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
