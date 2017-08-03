/**
 * Created by 27353 on 2017/8/3.
 */


var Cats = function (data) {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('../img/cat.jpg');
    //this.imgAttribution = ko.observeable

    this.catnames = ['Jan','Feb','Mar','etc'];
    this.level = ko.computed(function () {
        if(this.clickCount() >50){
            return 'one';
        }else if(this.clickCount() >30){
            return 'two';
        }else if(this.clickCount() > 15){
            return 'three';
        }else if(this.clickCount ()> 5){
            return 'four';
        }else {
            return 'zero';
        }
    },this)

}

var ViewModel =function () {
    var that = this;
    this.currentCat = ko.observable(new Cats()),
        this.incrementCounter = function () {
            that.currentCat().clickCount(that.currentCat().clickCount() + 1);
        }



}

ko.applyBindings(new ViewModel());
/*ko.applyBindings({

});*/

