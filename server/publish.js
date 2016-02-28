
Meteor.publish("users", function(){
  return Meteor.users.find();
});

Meteor.publish("incomes", function(){
  return Incomes.find();
});

Meteor.publish("expenses", function(){
  return Expenses.find();
});
