// requestAnimationFrame 采用 代理模式 解耦

class AnimateStore {
  constructor() {
    this.funs = [];
  }
  // 添加
  add(fun) {
    this.funs.push(fun)
  }
  // 删除
  remove(fun) {
    var length = this.funs.length;
    var temp = [];
    for (var i = 0; i < length; i++) {
      if (this.funs[i] !== fun) {
        temp.push(this.funs[i])
      }
    }
    this.funs = temp;
  }
  // requestAnimationFrame
  updata(time) {
    for (var fun of this.funs) {
      fun(time)
    }
  }
}

export {
  AnimateStore
}