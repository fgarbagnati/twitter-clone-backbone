var app = app || {};

app.User = Backbone.Model.extend({
  url: '/user',
  defaults: {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: ''
  }
});