/**
 * Created by 27353 on 2017/9/29.
 */
var app = app || {};
var ENTER_KEY = 13;
localStorage: new Backbone.LocalStorage("todos-backbone"),
$(function () {
    new app.AppView();
});