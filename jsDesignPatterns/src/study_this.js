/**
 * Created by 27353 on 2017/7/24.
 */
/**
 * this作为对象方法
 */

/*var obj = {
 a:1,
 getA:function () {
 alert(this === obj);
 alert(this.a);
 }
 };

 obj.getA();
 /!**
 * 作为普通函数调用
 *!/
 window.name = 'globalName';

 var getName = function () {
 return this.name;
 }

 console.log(getName());

 /!**
 * 构造函数中的this
 *!/
 var MyClass = function () {
 this.name = 'sven';

 return {
 name:'name'
 }
 }
 var obj = new MyClass();*/
/*
 alert(obj.name)*/

/**
 *prototypr call apply中的调用
 */
var obj1 = {
    name:'sven',
    getName:function () {
        return this.name;
    }
}

var obj2 = {
    name:'anne'
};
console.log(obj1.getName());
console.log(obj1.getName.call(obj2));

document.getElementById = (function (func) {
    return function(){
        return func.apply(document,arguments);
    }
})(document.getElementById);

var getId = document.getElementById;
getId('div1');