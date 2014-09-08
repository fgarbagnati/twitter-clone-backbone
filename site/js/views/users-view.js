var app = app || {};

app.UsersView = Backbone.view.extend({
  el: '.page',

  initialize: function() {
    this.collection = new app.Users();
    this.render();
  },

  render: function() {
    this.collection.each(function( user ) {
      this.renderUser( user );
    } this );
  },

  renderUser: function( user ) {
    var userView = new app.UserView({
      model: user
    });
    this.$el.append( userView.render().el );
  }
});