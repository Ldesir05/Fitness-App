angular
  .module('FitnessApp.shoulder')
  .controller('ShoulderCtrl',ShoulderCtrl);

function ShoulderCtrl($scope) {
  var vm = this;
  $scope.shoulder = {
    name: [
      'Lateral Dumbbell Raises',
      'Lateral Raises on Cable, One Armed',
      'Lateral To Front Raises',
      'Shoulder Press, Barbell',
      'Shoulder Press, Dumbbells',
      'Shrugs, Barbells',
      'Shrugs, Dumbbells',
    ]
  }
}

