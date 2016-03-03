angular.module('myFinance').directive('incomesList', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/incomes/incomes-list/incomes-list.html',
    controllerAs: 'incomesList',
    controller: function($scope, $reactive) {
      $reactive(this).attach($scope);

      this.newIncome = {};
      $scope.incomes = {};

      this.subscribe('incomes');

      Meteor.call('getIncomesData', function(err, data) {
        if (!err) {
          console.log(data);
          $scope.incomes = data;
          console.log($scope.incomes);
        } else {
          console.log("error");
        }
      });

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
