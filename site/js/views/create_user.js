var app = app || {};

app.CreateUser = Backbone.View.extend({
  el: '.page',
  template: _.template( $('#newUserTemplate').html() ),

  events: {
    'click #createUser':'createUser'
  },

  initialize: function() {
    this.collection = new app.Users();
    this.collection.fetch( {reset: true} );


  },

  render: function() {
    this.$el.html( this.template );
    return this;
  },

  createUser: function( e ) {
    e.preventDefault();

    var formData = {};

    $( '#newUserForm div' ).children( 'input' ).each( function( i, el ) {
      // debugger
      if( $( el ).val() != '' ) {
        formData[ $( el ).attr('name') ] = $( el ).val();
      }
    });


    console.log( formData )

    // $( '#createUser')
  }
});