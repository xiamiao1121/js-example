// fn 构造函数
// ...args 构造函数传入的参数
function myNew (fn, ...args) {
    // 创建新对象 obj，并改变 obj 的 __proto__ 指向构造函数的 prototype
    var obj = Object.create(myNew.prototype)
    // 将 **this** 指向创建的新对象，并执行构造函数，保存返回结果
    let result = fn.call(obj, ...args)
    // 构造函数返回的结果是对象则返回该对象 result，否则返回新创建的对象 obj
    return result instanceof Object ? result : obj
  }