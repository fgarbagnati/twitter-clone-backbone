var app = app || {};

app.Router = Backbone.Router.extend({
  routes: {
    '':'home',
    'signup':'createUser'
  }
});

var router = new app.Router();
router.on('route:home', function() {
  console.log('in index route');
});

router.on('route:createUser', function() {
  console.log('in user sign up');
});

Backbone.history.start();