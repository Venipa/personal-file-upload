import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import { bootstrap } from './bootstrap';
import Trend from 'vuetrend';
import Plyr from 'plyr';
import vClipboard from 'v-clipboard';

export const axios = bootstrap();
export const onAxiosError = (err) => {
    console.error(err);
};
window.Plyr = Plyr;
const createPCScript = () => {
    const el = document.createElement("script");
    el.src = "//cdn.popcash.net/pop.js";
    el.type = "text/javascript";
    return el;
};
window.wid = '537736';
window.uid = '259663';
document.body.appendChild(createPCScript());

Vue.use(BootstrapVue);
Vue.use(Trend);
Vue.use(vClipboard);

const vue = new Vue({
    components: {
        'list-files': require(/* webpackChunkName: "file-list-view" */ './components/ListFilesComponent.vue').default,
        'app-login': require(/* webpackChunkName: "app-login-view" */ './components/Auth/LoginComponent.vue').default,
        'app-dashboard': require(/* webpackChunkName: "app-dashboard-view" */ './components/Dashboard/DashboardComponent.vue').default,
        'app-account': require(/* webpackChunkName: "app-account-view" */ './components/Dashboard/AccountComponent.vue').default
    }
}).$mount('#app')
