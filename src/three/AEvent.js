class AEvent {
  constructor(){
    
    this._event = {

    }
  }
  _emit(eventName,arg){
    if(eventName in this._event){
      for(var fun of this._event[eventName]){
        fun(arg)
      }
    }
  }

  on(eventName, fun) {
    // 不在直接return
    if (!(eventName in this._event)) {
      return;
    }
    // 添加
    this._event[eventName].push(fun)
  }
  off(eventName, fun) {
    // 不在直接return
    if (!(eventName in this._event)) {
      return;
    }
    var length = this._event[eventName].length;
    var temp = [];
    for (var i = 0; i < length; i++) {
      if (this._event[eventName][i] !== fun) {
        temp.push(this._event[eventName][i])
      }
    }
    this._event[eventName] = temp;
  }
}


export {
  AEvent
}