angular
  .module('FitnessApp.chest')
  .controller('ChestCtrl',ChestCtrl);

function ChestCtrl($scope,$ionicPopup) {
  var vm = this;
  $scope.chestWorkouts = [
      'Bench Press',
      'Decline Bench Press',
      'Dumbbell Fly\'s',
      'Incline Bench Press',
      'Dips',
      'Cable Fly\'s',
      'Dumbbell Pull over'
    ]

};
// adding an image to the div's
// {
//   name: 'BenchPress',
//     img:
// }
