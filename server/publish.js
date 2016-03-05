
Meteor.publish("users", function(){
  return Meteor.users.find({});
});

Meteor.publish("Expenses", function(){
  return Expenses.find({owner: this.userId});
});

Meteor.publish("Incomes", function(){
  return Incomes.find({owner: this.userId});
});
