var func = function (a,b,c) {
    console.log([a,b,c]);
}

func.apply(null,[1,2,3]);

var obj1 = {
    name:'sve'
};
var obj2 = {
    name:'anne'
};
window.name = 'window';

var getName = function () {
    alert(this.name);
}

getName();
getName.call(obj1);
getName.call(obj2);


var A = function(name){
    this.name = name;
}
var B = function () {
    A.apply(this,arguments);
}
B.prototype.getName = function(){
    return this.name;
}

var b =new B('sds')