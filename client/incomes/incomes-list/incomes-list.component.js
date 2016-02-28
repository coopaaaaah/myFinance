angular.module('myFinance').directive('incomesList', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/incomes/incomes-list/incomes-list.html',
    controllerAs: 'incomesList',
    controller: function($scope, $reactive) {
      $reactive(this).attach($scope);

      this.newIncome = {};

        this.relevantId = 10;

        this.subscribe('incomes');

        this.relevantId = 50; // This will cause the subscribe arguments method to run again

      this.addIncome = () => {
        this.newIncome.owner = Meteor.user()._id;
        Incomes.insert(this.newIncome);
        this.newIncome = {};
      };

      this.removeIncome = (income) => {
        Incomes.remove({
          _id: income._id
        });
      };
    }
  };
});
