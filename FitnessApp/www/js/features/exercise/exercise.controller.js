angular
  .module('FitnessApp.exercise')
  .controller('ExerciseCtrl',ExerciseCtrl);

function ExerciseCtrl($scope) {
  var vm = this;
  $scope.workout = {
      name: [
        'Chest',
        'Shoulders',
        'Abs',
        'Back',
        'Leg',
        'Biceps',
        'Triceps'
      ],
  }
}
