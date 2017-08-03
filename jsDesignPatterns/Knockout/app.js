/**
 * Created by 27353 on 2017/8/3.
 */
var viewModel = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('../img/cat.jpg');
    //this.imgAttribution = ko.observeable
    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
        this.level();
    };
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

ko.applyBindings(new viewModel());