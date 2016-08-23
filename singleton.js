/*
*created by Theresa
*2016-8-23
*单例实现类
*/
var Singleton = function (name) {
  this.name = name;
  // instance 实例
  this.instance = null;
}

Singleton.prototype.getName = function () {
  console.log(this.name);
};

Singleton.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
};

var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');
a.getName();
b.getName();
