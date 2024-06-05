/**
  * @description 判断对象是否属于某个构造函数
  * @prams left: 实例对象  right: 构造函数
  * @return boolean
*/
function myInstanceof(left, right) {
    let rightPrototype = right.prototype; // 获取构造函数的显式原型
    let leftProto = left.__proto__; // 获取实例对象的隐式原型
    while (true) {
      // 说明到原型链顶端，还未找到，返回 false
      if (leftProto === null) {
        return false;
      }
      // 隐式原型与显式原型相等
      if (leftProto === rightPrototype) {
        return true;
      }
      // 获取隐式原型的隐式原型，重新赋值给 leftProto
      leftProto = leftProto.__proto__
    }
  }