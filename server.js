var application_root = __dirname,
  express = require( 'express' ),
  path = require( 'path' ),
  mongoose = require( 'mongoose' );

var app = express();

app.configure( function() {
  app.use( express.bodyParser() );
  app.use( express.methodOverride() );
  app.use( app.router );
  app.use( express.static( path.join( application_root, 'site' ) ) );
  app.use( express.errorHandler({ dumpExceptions: true, showStak: true }));
});

var port = 4711;
app.listen( port, function() {
  console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});


mongoose.connect( 'mongodb://localhost/twitter-clone-database' );

// Schemas
var User = new mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: String,
  email: String,
  password: String
});

var UserModel = mongoose.model( 'User', User );

// Routes

// app.get('/signup', function( request, response ) {
//   response.send('signup is running');
// });

// create new user
app.post( '/signup', function ( request, response ) {
  var user = new UserModel({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    userName: request.body.userName,
    email: request.body.email,
    password: request.body.password
  });

  return user.save( function( err ) {
    if( !err ) {
      console.log( 'created' );
      return response.send( user );
    } else {
      console.log( err );
    }
  });
});
