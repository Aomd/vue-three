import { WebGLRenderer, PCFSoftShadowMap } from "three";


var renderer = new WebGLRenderer({
  //增加下面两个属性，可以抗锯齿
  antialias: true,
  alpha: true,
  logarithmicDepthBuffer: true,
});


renderer.shadowMapType = PCFSoftShadowMap


renderer.setPixelRatio(window.devicePixelRatio || 1)


renderer.shadowMap.enabled = true; // 告诉渲染器需要阴影


renderer.setSize(window.innerWidth, window.innerHeight)
// renderer.autoClear = false;

renderer.domElement.id = 'three-content';

document.body.appendChild(renderer.domElement);

export{
  renderer
}