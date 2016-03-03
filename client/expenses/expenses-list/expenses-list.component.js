angular.module('myFinance').directive('expensesList', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/expenses/expenses-list/expenses-list.html',
    controllerAs: 'expensesList',
    controller: function($scope, $reactive) {
      $reactive(this).attach($scope);

      this.newExpense = {};
      $scope.expenses = {};

      this.subscribe('expenses');

      Meteor.call('getExpenseData',function (err, data) {
        if (!err) {
          $scope.expenses = {};
        } else {
          console.log("error");
        }
      });

      this.addExpense = () => {
        this.newExpense.owner = Meteor.user()._id;
        Expenses.insert(this.newExpense);
        this.newExpense = {};
      };

      this.removeExpense = (expense) => {
        Expenses.remove({
          _id: expense._id
        });
      };
    }
  };
});
