/**
 * Created by 27353 on 2017/9/29.
 */
var app = app || {};

app.Todo = Backbone.Model.extend({
    defaults:{
            title:'',
            completed:false

    },
    toggle:function () {
        this.save({
            completed: !this.get('completed')
        })
    }
})