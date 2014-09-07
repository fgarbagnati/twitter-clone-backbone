var app = app || {};

app.UserView = Backbone.View.extend({
  tagName: 'div',
  className: 'userContainer',
  template: _.template( $( '#userTemplate' ).html() ),

  events: {

  },

  render: function() {
    this.$el.html( this.template( this.model.attributes ) );
    return this;
  }
})