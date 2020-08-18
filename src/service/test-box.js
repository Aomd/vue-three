import { scene } from "../three/scene";
import { camera } from "../three/camera";
import { Mesh, MeshBasicMaterial, BoxGeometry } from "three";
import { animateStore } from "../three/main";
import { emitter } from "../config/mitt";

var geometry = new BoxGeometry();
var material = new MeshBasicMaterial({ color: 0x00ff00 });
var cube = new Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

animateStore.add(() => {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
})


emitter.on('test',function(arg){
  console.log('测试 mitt 事件发射器是否生效，携带数据为',(arg))
})