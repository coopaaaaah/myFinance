Incomes = new Mongo.Collection("incomes");

Incomes.allow({
  insert: function (userId, incomes) {
    return userId && incomes.owner === userId;
  },
  update: function (userId, incomes, fields, modifier) {
    return userId && incomes.owner === userId;
  },
  remove: function (userId, incomes) {
    return userId && incomes.owner === userId;
  }
});
