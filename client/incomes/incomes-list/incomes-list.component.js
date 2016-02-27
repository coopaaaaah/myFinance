angular.module('myFinance').directive('incomesList', function() {
  return {
   restrict: 'E',
   templateUrl: 'client/incomes/incomes-list/incomes-list.html',
   controllerAs: 'incomesList',
   controller: function ($scope, $reactive) {
     $reactive(this).attach($scope);

     this.newIncome = {};
     this.subscribe('incomes');

     this.helpers({
       incomes: () => {
         return Incomes.find({});
       }
     });

     this.addIncome = () => {
      this.newIncome.owner = Meteor.user()._id;
       Incomes.insert(this.newIncome);
       this.newIncome = {};
     };

     this.removeIncome = (income) => {
       Incomes.remove({_id: income._id});
     };
   }
 };
});
