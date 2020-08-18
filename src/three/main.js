import { Clock } from "three";
import { IntersectsStore } from "./IntersectsStore";
import { AnimateStore } from "./AnimateStore";
import { camera } from "./camera";
import { scene } from "./scene";
import { renderer } from "./renderer";


var animateStore = new AnimateStore();

// 管理点击事件
var intersectsStore = new IntersectsStore();

var clock = new Clock();


function animate(...arg) {
  requestAnimationFrame(animate);
  animateStore.updata(clock.getDelta())
  renderer.render(scene, camera);
}

animate();

require('./loader');

export {
  animateStore,
  intersectsStore,
}


window.addEventListener('resize', function () {
  // 可优化节流防抖
  // 重新设置相机宽高比例
  camera.aspect = window.innerWidth / window.innerHeight;
  // 更新相机投影矩阵
  camera.updateProjectionMatrix();
  // 重新设置渲染器渲染范围
  renderer.setSize(window.innerWidth, window.innerHeight);
})
