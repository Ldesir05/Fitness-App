angular
  .module('FitnessApp.back')
  .controller('BackCtrl',BackCtrl);

function BackCtrl($scope) {
  var vm = this;
  $scope.back = {
    name: [
      'Pull Up\s',
      'Bend Over Rows',
      'Cable Pull Down',
      'Dead Lift',
      'Single Arm Row',
      'T-Bar',
      'Back Extentions'
    ],
  }
}

