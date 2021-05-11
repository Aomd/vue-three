import { Vector2, Raycaster } from "three";
import { AEvent } from "./AEvent";
import { renderer } from "./renderer";
import { camera } from "./camera";
//@ts-check

class IntersectsStore extends AEvent {
  constructor() {
    super()
    var _this = this;
    this._map = []
    this._event = {
      'click': [],
      'dblclick': [],
      // 'mousedown': [],
      // 'mouseup': [],
      'mousemove': [],
    }
    this.mouse = new Vector2();
    this.raycaster = new Raycaster()

    for (var key in this._event) {
      renderer.domElement.addEventListener(key, function (e) {
        _this._mouseDone(e.type, e)
      }, false);
    }

  }
  _mouseDone(eventName, event) {
    if (this._event[eventName].length === 0) {
      return
    }
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, camera);
    var intersects = this.raycaster.intersectObjects(this._map);
    this._emit(eventName, intersects)
  }
  add(obj) {
    // 判断是否为 object3d Mesh
    if (obj instanceof Object && 'isMesh' in obj && obj.isMesh) {
      this._map.push(obj)
    } else {
      throw new Error(obj?.name + '不是 Mesh')
    }

  }
  remove(obj) {
    var temp = [];
    for (var i = 0; i < this._map.length; i++) {
      if (this._map[i] !== obj) {
        temp.push(this._map[i])
      }
    }
    this._map = temp;
  }

}


export {
  IntersectsStore
}
