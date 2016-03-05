angular.module('myFinance').directive('incomesList', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/incomes/incomes-list/incomes-list.html',
    controllerAs: 'incomesList',
    controller: function($scope, $reactive, $stateParams) {
      $reactive(this).attach($scope);

      this.newIncome = {};
      this.sort = {
        name: 1
      };

      this.helpers({
        incomes: () => {
          return Incomes.find({}, { sort : this.getReactively('sort') });
        }
      });

      this.subscribe('expenses', () => {
        return [{
          sort: this.getReactively('sort')
        }];
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
