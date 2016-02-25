angular.module('myFinance').directive('incomesList', function() {
  return {
   restrict: 'E',
   templateUrl: 'client/incomes/incomes-list/incomes-list.html',
   controllerAs: 'incomesList',
   controller: function ($scope, $reactive) {
     $reactive(this).attach($scope);

     this.newIncome = {};

     this.helpers({
       incomes: () => {
         return Incomes.find({});
       }
     });

     this.addIncome = () => {
       Incomes.insert(this.newIncome);
       this.newIncome = {};
     };

     this.removeIncome = (income) => {
       Incomes.remove({_id: income._id});
     };
   }
 };
});
