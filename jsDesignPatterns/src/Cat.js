/**
 * Created by 27353 on 2017/8/2.
 */
//var Catnames = [['cat','cat1','cat2','cat3','cat4','cat5'],[0,0,0,0,0,0]];
/*
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
}*/

var model = {
    data:[{cat:'cat',click:0,name:1},{cat:'cat1',click:0,name:1},{cat:'cat2',click:0,name:1},
        {cat:'cat3',click:0,name:1},{cat:'cat4',click:0,name:1},{cat:'cat5',click:0,name:1}],
    init:function () {

    },
    getCatByIndex:function (index) {
        return model.data[index];
    },
    modify:function (Cat) {
        var Cats = this.getAlldata();
        var index = this.getIndex(Cat.cat);
        model.data[index] = Cat;

    },
    getAlldata:function () {
        return model.data;
    },
    getIndex:function (name) {
        for (var i = 0; i < model.data.length; i++) {
            if (name === model.data[i].cat) {
            return i;
            }
        }
        return -1;
    },
    getByname:function(name){
        for (var i = 0; i < model.data.length; i++) {
            if (name === model.data[i].cat) {
                return model.data[i];
            }
        }
        return null;
    }/*,
    setCat:function(Cat){
       // this.data[index]=Cat;
    }*/

}
var octopus = {
    modifyCat:function () {
        octopus.Catplus();
      model.modify(octopus.thisCat);
      Catview.render(octopus.thisCat);
    },
    setcat:function (Cat) {
        AdminView.render(Cat);
        Catview.render(Cat);
        this.thisCat =Cat;
    },
    thisCat:null,
    getCat:function (name) {
        this.setcat(model.getByname(name));


    },
    init:function () {
        model.init();
        ListView.init();
        Catview.init();
        AdminView.init();
        ListView.render(model.getAlldata());
       this.setcat(model.getCatByIndex(0));

    },
    Catplus:function () {
        var cat=this.thisCat;
        cat.click++;
        this.setcat(cat);
    },
    modify:function (newCat) {
     /*   var index = model.getIndex(this.thisCat.cat);*/
        this.setcat(newCat);
        model.modify(newCat)

        
    },
    resetadmin:function () {
        AdminView.render(this.thisCat);
    }
}

var ListView = {
    render:function (Catnames) {
        var elem = this.elem;
        for (var i = 0; i < Catnames.length; i++) {
            (function (id) {
                //var $opt = document.cre
                var $opt = $('<option>' + Catnames[i].cat + '</option>')
                elem.append($opt);
            })(i)
        }
    },
    Listclick:function () {
        var Catele =$('#Catselect');
        Catele.change(function (e) {
            var catname =e.target.value;
            octopus.getCat(catname);
        })
    },
    init:function () {
        this.Listclick();
        this.elem = $('#Catselect');
    }
}

var Catview = {
    init:function () {
        this.Catele =$('#my-elem');
        this.Catclick();
    },
    render:function (Cat) {
       // var catname =e.target.value;


        var num = $('#num');

       // var index = Catnames[0].indexOf(catname);
       // console.log(index);
        this.Catele.attr('src','img/'+Cat.cat+'.jpg');

        num.html(Cat.click);
    },
    Catclick:function () {

        this.Catele.click(octopus.modifyCat);
    }
     
}

var AdminView = {
    init:function () {
        this.adminbtn = $('#cat-admin');
        this.adminview = $('#adminview');
        this.catname = $('#catname');
        this.catclick = $('#catclick');
        this.savebtn = $('#save');
        this.cancelbtn = $('#cancel');

        this.adminbtn.click(this.togviewdisplay.bind(this));
        this.savebtn.click(this.setCat.bind(this))
        this.cancelbtn.click(this.cancel.bind(this))
    },
    togviewdisplay:function () {
        if(this.adminview.css('display') === 'none'){
            this.adminview.css('display','block');
        }else {
            this.adminview.css('display','none')
        }
    },
    render:function (Cat) {
        this.catname.val(Cat.name);
        this.catclick.val(Cat.click);
    },
    setCat:function () {
        var Cat =octopus.thisCat;
        Cat.name = this.catname.val();
        Cat.click = this.catclick.val();
        octopus.modify(Cat);
        this.adminview.css('display','none')
    },
    cancel:function () {
        this.adminview.css('display','none')
        octopus.resetadmin();
    }
}

octopus.init()