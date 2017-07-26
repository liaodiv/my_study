/**
 * Created by 27353 on 2017/7/25.
 */
/*var myObject = {
    value:0,
    icrement:function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    },

};
myObject.double = function () {
    var that = this;
    console.log(this);

    var helper = function () {

        that.value = that.value+that.value;
    };
    helper();
}
myObject.icrement(2);
console.log(myObject.value);
myObject.double();
console.log(myObject.value);*/

/**
 *
 * @param a === argument[0]
 * @param b === argument[1]
 * @returns {*}
 */
var add=function(a,b) {
    console.log(this);
    return a + b;
}
var array = [3,4];
var sum = add.apply(null,array);
console.log('sum='+ sum);
/*
console.log('sum='+ sum);

var myFunc = function () {
    this.value =1;
}
myFunc.prototype.getValue = function () {
    console.log(this.value);
}

var MyFunc = new myFunc();
MyFunc.getValue();


var slice = Array.prototype.slice;

var args = slice.apply(1,2)

var test=function () {
    add.apply(arguments)
}(1,2,3)
*/

