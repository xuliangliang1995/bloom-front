import Vue from 'vue';
import App from './src/components/app.vue';
import iView from 'iview';
import './node_modules/iview/dist/styles/iview.css';
import './src/css/main.css';
import './my-theme/index.less';
//引入 Vue router
import router from './src/js/router.js';
//引入 axios
import axios from 'axios';

Vue.use(iView);
var customAxios = axios.create({
	baseURL: 'http://localhost/',
	timeout: 1000,
	transformRequest: [function (data) {
    	// 对 data 进行任意转换处理
    	var params = new URLSearchParams;
    	for(var key in data){
    		params.append(key, data[key]);
    	}
    	return params;
    }]
});
Vue.prototype.$axios = customAxios;

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
