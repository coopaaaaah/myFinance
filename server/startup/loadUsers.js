Meteor.startup(function() {

  // check if any users exist in the local database
  if ( Meteor.users.find({}).count() < 1) {

    // if no users exist, insert a guest user
    users.insert({
      'username' : 'guest',
      'password' : 'password'
    });

    console.log('No user detected in app. Created guest user for trial.');
  }
});
