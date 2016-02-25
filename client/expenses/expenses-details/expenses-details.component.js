angular.module('myFinance').directive('expensesDetails', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/expenses/expenses-details/expenses-details.html',
    controllerAs: 'expenseDetails',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);

      this.helpers({
        expense: () => {
          return Expenses.findOne({_id: $stateParams.expenseId});
        }
      });

      this.save = () => {
        Expenses.update({_id: $stateParams.expenseId}, {
          $set: {
            name: this.expense.name,
            description: this.expense.description
          }
        }, (error) => {
          if (error) {
            console.log('Oops, unable to update the expense...');
          }
          else {
            console.log('Done!');
          }
        });
      };
    }
  }
});
