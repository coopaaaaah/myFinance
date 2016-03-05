angular.module('myFinance').directive('expensesList', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/expenses/expenses-list/expenses-list.html',
    controllerAs: 'expensesList',
    controller: function($scope, $reactive, $stateParams) {
      $reactive(this).attach($scope);

      this.newExpense = {};
      this.sort = {
        name: 1
      };

      this.helpers({
        expenses: () => {
          return Expenses.find({}, { sort : this.getReactively('sort') });
        }
      });

      this.subscribe('expenses', () => {
        return [{
          sort: this.getReactively('sort')
        }];
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
