var x = 1;
var dom = {
  a: 1,
  b: {
    bar: function () {
      this.x = 5
      return x
    }
  }
}
console.log(dom.b.bar()) // 1
console.log(dom.b.x) // 5
// 以下输出结果是多少
var obj = {
  a: 1,
  b: function() {
    console.log(this.a)
  }
}
var fn1 = obj.b
fn1() // undefined 等价如下写法：
window.fn1() // undefined

// 当函数执行时，js引擎会在函数内部生成一个this对象，this的值就是调用此函数的对象