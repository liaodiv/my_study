/**
 * Created by 27353 on 2017/7/27.
 */
$(function () {
    window.Test = Backbone.Model.extend({
        defaluts:{
            content:''
        }
    });

    window.TestList = Backbone.Collection.extend({
        model:Test
    });

    var data = new TestList({
        content:'hello,backbone!'
    })

    window.TestView= Backbone.View.extend({
        el:$("body"),
        initialize:function() {
            $("#divTip").html(data.models[0].get('content'));
        }
    })
    window.App = new TestView;
})
