var app = app || {};

app.CreateUser = Backbone.View.extend({
  el: '.page',
  template: _.template( $('#newUserTemplate').html() ),

  events: {

  },

  render: function() {
    this.$el.html( this.template );
    return this;
  }
});