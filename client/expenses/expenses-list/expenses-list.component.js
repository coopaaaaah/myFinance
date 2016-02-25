angular.module('myFinance').directive('expensesList', function() {
  return {
   restrict: 'E',
   templateUrl: 'client/expenses/expenses-list/expenses-list.html',
   controllerAs: 'expensesList',
   controller: function ($scope, $reactive) {
     $reactive(this).attach($scope);

     this.newExpense = {};

     this.helpers({
       expenses: () => {
         return Expenses.find({});
       }
     });

     this.addExpense = () => {
       Expenses.insert(this.newExpense);
       this.newExpense = {};
     };

     this.removeExpense = (expense) => {
       Expenses.remove({_id: expense._id});
     };
   }
 };
});
