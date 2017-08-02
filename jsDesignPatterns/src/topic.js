/**
 * Created by 27353 on 2017/8/1.
 */
/*
document.body.addEventListener('click',function () {
    alert(2);
},false);

document.body.addEventListener('click',function () {
    alert(3);
},false);

document.body.click();
*/

/*var salesOffices = {};
salesOffices.clientList =[];

salesOffices.listen = function (fn) { //订阅
    this.clientList.push(fn);
}

salesOffices.trigger = function () {  //fab
    for(var i=0,fn;fn = this.clientList[i++];){
        fn.apply(this,arguments);
    }
}


salesOffices.listen(function (price,squareMeter) {
    console.log('价格='+ price);
    console.log('SquareeMeter='+squareMeter);
})

salesOffices.trigger(20000,99);*/

var event = {
    clientList:[],
    listen:function (key,fn) {
        if( !this.clientList[ key ]){
            this.clientList[ key ] = [];
        }
        this.clientList[ key ].push(fn);
    },
    trigger:function () {
        var key = Array.prototype.shift.call(arguments),
            fns = this.clientList[ key ];

        if( !fns||fns.length === 0){
            console.log('此消息未订阅')
            return false;
        }
        for( var i=0,fn;fn = fns[ i++];){
            fn.apply(this,arguments)
        }
    }
}

event.remove = function (key,fn) {
    var fns = this.clientList[key];

    if(!fns){
        return false;
    }
    if(!fn){
        fns && (fns.length = 0);
    }else {
        for (var l=fns.length-1;l >0 ;l--){
            var _fn = fns[l];
            if(_fn === fn){
                fns.splice(l,1);
            }
        }
    }
};

var installEvent = function (obj) {
    for( var i in event){
        obj[i] =event[i];
    }
}

var saleOffice = {};

installEvent(saleOffice);
saleOffice.listen('squareMeter88',fn1=function (price) {
    console.log('价格='+price);
})

saleOffice.listen('squareMeter100',function (price) {
    console.log('价格='+price);
})
saleOffice.remove('squareMeter88',fn1);
saleOffice.trigger('squareMeter88',200000);

saleOffice.trigger('squareMeter100',200000);
saleOffice.trigger('squareMeter120',200000);