angular
  .module('FitnessApp.abs')
  .controller('AbsCtrl',AbsCtrl);

function AbsCtrl($scope) {
  var vm = this;
  $scope.abs = {
    name: [
      'Side Crunch',
      'Crunch',
      'Negative Crunches',
      'Dead Lift',
      'Sit-Up',
      'Trunk Rotation With Cable'
    ],
  }
}
