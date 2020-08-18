import './config/mitt';
import './config/axios';

// 这里可以调整 main 或者 vue 加载顺序 （mitt emit on 顺序也不同）
import './three/main';
// 也可以直接单独跑 three 可以注释掉 vue
import './vue/main';


import './style/loader';

console.log(process.env.VUE_APP_ENV)