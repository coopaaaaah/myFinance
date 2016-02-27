angular.module('myFinance').directive('incomesDetails', function () {
  return {
    restrict: 'E',
    templateUrl: 'client/incomes/incomes-details/incomes-details.html',
    controllerAs: 'incomeDetails',
    controller: function ($scope, $stateParams, $reactive) {
      $reactive(this).attach($scope);

      this.subscribe('incomes');

      this.helpers({
        incomes: () => {
          return Incomes.findOne({_id: $stateParams.incomeId});
        }
      });

      this.save = () => {
        Incomes.update({_id: $stateParams.incomeId}, {
          $set: {
            name: this.income.name,
            description: this.income.description
          }
        }, (error) => {
          if (error) {
            console.log('Oops, unable to update the income...');
          }
          else {
            console.log('Done!');
          }
        });
      };
    }
  }
});
