angular
  .module('FitnessApp.exercise')
  .controller('ExerciseCtrl',ExerciseCtrl);

function ExerciseCtrl($scope) {
  var vm = this;
  $scope.exerciseArea =[
    {
      name:'Chest',
      route:'chest'
    },
    {
      name:'Shoulders',
      route:'s'
    },
    {
      name:'Abs',
      route:'../abs.html'
    },
    {
      name:'Back',
      route:'../back.html'
    },
    {
      name:'Leg',
      route:'../leg.html'
    },
    {
      name:'Biceps',
      route:'../biceps.html'
    },
    {
      name:'Triceps',
      route:'../triceps.html'
    }
  ];
  $scope.workout = {
      name: [
        'Chest',
        'Shoulders',
        'Abs',
        'Back',
        'Leg',
        'Biceps',
        'Triceps'
      ]
  }
}
