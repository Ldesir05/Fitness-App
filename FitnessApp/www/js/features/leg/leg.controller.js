angular
  .module('FitnessApp.leg')
  .controller('LegCtrl',LegCtrl);

function LegCtrl($scope) {
  var vm = this;
  $scope.leg = {
    name: [
      'Squats',
      'Front-Squats',
      'Leg Press',
      'Stiff Legs',
      'Leg Extension',
      'Barbell Lunges Walking',
      'Leg Curls'
    ]
  }
}

