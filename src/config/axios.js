
import axios from 'axios'

axios.defaults.headers.post['Authorization'] = localStorage.getItem('Authorization')
axios.defaults.headers.get['Authorization'] = localStorage.getItem('Authorization')
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'

axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // if (config.url.indexOf('_search') > -1) {
  //   config.headers = {
  //     'Accept': "application/json, text/plain, */*",
  //     'Content-Type': "application/json;charset=utf-8"
  //   }
  // }
  // 搜索重定向连接地址
  // if (config.url.includes('_search')) {
  //   config.url = __ROOTURL + "/_search"
  // }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

axios.interceptors.response.use(function (config) {
  // 接口无权限跳转 login
  // if (config.data && config.data.code == 5 || config.data.code == 3) {
  //   location.href = '//' + location.host + '/login.html'
  // }
  return config;

});
