Expenses = new Mongo.Collection("expenses");

Expenses.allow({
  insert: function (userId, expenses) {
    return userId && expenses.owner === userId;
  },
  update: function (userId, expenses, fields, modifier) {
    return userId && expenses.owner === userId;
  },
  remove: function (userId, expenses) {
    return userId && expenses.owner === userId;
  }
});
