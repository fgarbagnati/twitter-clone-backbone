var app = app || {};

app.CreateUser = Backbone.View.extend({
  el: '.page',
  template: _.template( $('#newUserTemplate').html() ),

  events: {
    'click #createUser':'createUser'
  },

  render: function() {
    this.$el.html( this.template );
    return this;
  },

  createUser: function( e ) {
    e.preventDefault();

    console.log('default m\'fin prevented')
    // var formData = {};

    // $( '#createUser')
  }
});