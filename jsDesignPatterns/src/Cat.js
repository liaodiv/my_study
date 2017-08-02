/**
 * Created by 27353 on 2017/8/2.
 */
//var Catnames = [['cat','cat1','cat2','cat3','cat4','cat5'],[0,0,0,0,0,0]];
var Catnames =[{cat:'cat',click:0},{cat:'cat1',click:0},{cat:'cat2',click:0},
    {cat:'cat3',click:0},{cat:'cat4',click:0},{cat:'cat5',click:0}];
var thisnum =0;

function addselect() {
    var elem = $('#Catselect');
    for(var i=0;i<Catnames[0].length;i++){
        //var html = '<img id="my-elem" height="100" width="150" src="img/'+Catnames[i]+'.jpg" >'
        (function (id) {
            //var $opt = document.cre
            var $opt = $('<option>' + Catnames[0][id] + '</option>')
            elem.append($opt);
        })(i)
    }
    elem.change(addimg)
}
addselect();


function addimg(e) {
    var catname =e.target.value;
   // console.log(e.target.value);
    var Catele =$('#my-elem');
    var num = $('#num');

    var index = Catnames[0].indexOf(catname);
    console.log(index);
    Catele.attr('src','img/'+catname+'.jpg');

   num.html(Catnames[1][index]);
   thisnum = index;
   // alert('img')
}

var model = {
    init:function () {
        if(!localStorage.Cats){
            localStorage.Cats = JSON.stringify([]);
        }
    },
    add:function (obj) {
        var data = JSON.parse(localStorage.Cats);
        data.push(obj);
        localStorage.Cat = JSON.stringify(data);
    },
    getCatByIndex:function (index) {
        return JSON.parse(localStorage.notes)[index];
    },
    modify:function (Cat) {
        var Cats = this.getAlldata();
        var index = this.getIndex(Cat.cat,Cats);
        Cats[index] = Cat;
        localStorage.Cats = JSON.stringify(Cats);

    },
    getAlldata:function () {
        return JSON.parse(localStorage.notes);
    },
    getIndex:function (name,Cats) {
        for (var i = 0; i < Cats.length; i++) {
            if (name === Cats.name) {
            return i;
            }
        }
        return -1;
    }

}
var octopus = {
    modifyCat:function (Cat) {
      model.modify(Cat);
    }
}

var ListView = {
    render:function (Catnames) {
        var elem = $('#Catselect');
        for (var i = 0; i < Catnames[0].length; i++) {
            (function (id) {
                //var $opt = document.cre
                var $opt = $('<option>' + Catnames[0].cat + '</option>')
                elem.append($opt);
            })(i)
        }
    }
}

var Catview = {
    init:function () {
        var Catele =$('#my-elem');
        var num = $('#num');

        Catele.onclick

    },
    render:function (Cat) {
       // var catname =e.target.value;

        var Catele =$('#my-elem');
        var num = $('#num');

       // var index = Catnames[0].indexOf(catname);
       // console.log(index);
        Catele.attr('src','img/'+Cat.cat+'.jpg');

        num.html(Cat.click);
    },
    Catclick:function () {

    }
}