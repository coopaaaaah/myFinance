
Meteor.publish("users", function(){
  return Meteor.find();
});

Meteor.publish("incomes", function(){
  return Meteor.find();
});

Meteor.publish("expenses", function(){
  return Meteor.find();
});
