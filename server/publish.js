
Meteor.publish("users", function(){
  return Meteor.users.find();
});

Meteor.methods({
getExpenseData: function () {
 var data = Expenses.find({}).fetch();
 return data;
}
});

Meteor.methods({
getIncomesData: function () {
 var data = Incomes.find({}).fetch();
 return data;
}
});
