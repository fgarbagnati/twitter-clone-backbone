var app = app || {};

app.CreateUser = Backbone.View.extend({
  el: '.page',
  render: function() {
    var template = _.template( $( '#newUserTemplate' ).html(), {});
    this.$el.html( template );
  }
});