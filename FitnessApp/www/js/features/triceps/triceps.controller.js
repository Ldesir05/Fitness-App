angular
  .module('FitnessApp.triceps')
  .controller('TricepsCtrl',TricepsCtrl);

function TricepsCtrl($scope) {
  var vm = this;
  $scope.triceps = {
    name: [
      'Barbell Triceps Extension',
      'Dips Between Two Benches',
      'Dumbbell Triceps Extension',
      'French Press(Skull-crusher) Dumbbells',
      'French Press(Skull-crusher) SZ Bar',
      'Standing Rope Forearm',
      'Triceps Extension with Bar',
      'Triceps Dips'
    ]
  }
}
