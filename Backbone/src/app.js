/**
 * Created by 27353 on 2017/9/24.
 */
(function ($) {
    World = Backbone.Model.extend({
        name:null
    })
    Worlds = Backbone.Collection.extend({
        initialize:function (models,options) {
            this.bind("add", options.view.addOneWorld);
        }
    });
    AppView = Backbone.View.extend({
        el:$("body"),
        initialize:function () {
            this.worlds = new Worlds(null,{view:this})
        },
        events:{
            "click #check": "checkIn"
        },
        checkIn:function () {
            var world_name = prompt("请问，你是哪里人?");
            if(world_name == ""){
                world_name = '未知';
            }
            var world = new World({name:world_name});
            this.worlds.add(world);
        },
        addOneWorld:function (model) {
            $("#world-list").append("<li>这里是来自 <b>" + model.get('name') + "</b> 星球的问候：hello world！</li>")
        }

    });

    var appView = new AppView;
})($);