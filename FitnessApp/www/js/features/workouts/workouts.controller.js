angular
  .module('FitnessApp.workouts')
  .controller('WorkoutsCtrl',WorkoutsCtrl);

function WorkoutsCtrl($scope){
// code here......
  var vm = this;

  $scope.triceps = [
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


