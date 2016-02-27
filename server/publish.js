
Meteor.publish("users", function(){
  return Meteor.users.find();
});

Meteor.publish("incomes", function(){
  return Meteor.incomes.find();
});

Meteor.publish("expenses", function(){
  return Meteor.expenses.find();
});
