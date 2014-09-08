var app = app || {};

app.CreateSession = Backbone.View.extend({
  el: '.page',
  template: _.template( $( '#userSignInTemplate' ).html() ),

  events: {

  },

  render: function() {
    this.$el.html( this.template );
    return this;
  }

})