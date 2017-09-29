/**
 * Created by 27353 on 2017/9/29.
 */
var app = app || {};

app.TodoView = Backbone.View.extend({
    tagName:'li',
    template: _.template( $('#item-template').html()),
    events:{
        'dbclick label':'edit',
        'keypress .edit': 'updateOnEnter',
        'blur .edit':'close',
        'click .toggle':'togglecompleted',
        'click .destroy':'clear'
    },
    initialize:function () {
        this.listenTo(this.model , 'change',this.render);
        this.listenTo(this.model, 'destroy',this.remove);
        this.listenTo(this.model, 'visible',this.toggleVisible);
    },
     render:function () {
        this.$el.html( this.template( this.model.toJSON() ));

         this.$el.toggleClass('completed', this.model.get('completed'));
         this.$el.toggleClass('priority',this.model.get('priority'));
         this.toggleVisible();
        this.$input = this.$('.edit');
        return this;


    },

    edit:function () {
        this.$el.addClass('editing');
        this.$input.focus();
    },

    close:function () {
        var value = this.$input.val().trim();

        if( value ){
            this.model.save({title:value});
        }
        this.$el.removeClass('editing');
    },
    updateOnEnter:function (e) {
        if(e.which === ENTER_KEY){
            this.close();
        }
    },
    toggleVisible:function () {
        this.$el.toggleClass('hidden',this.isHidden());
    },
    isHidden:function(){
        return this.model.get('completed') ?
            app.TodoFilter === 'active' :
            app.TodoFilter === 'completed';
    },

    togglecompleted:function () {
        this.model.toggle();
    },
    clear:function () {
        this.model.destroy();
    }

})