angular
  .module('FitnessApp.chest')
  .controller('ChestCtrl',ChestCtrl);

function ChestCtrl($scope) {
  var vm = this;
  $scope.chest = {
    name: [
      'Bench Press',
      'Decline Bench Press',
      'Dumbbell Fly\'s',
      'Incline Bench Press',
      'Dips',
      'Cable Fly\'s',
      'Dumbbell Pull over'
    ],
  }
}
