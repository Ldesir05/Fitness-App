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
//   var test = $ionicPopup.show({
//     template: `Lay down on a bench, the bar should be directly above your eyes, the knees are somewhat angled and the feet are firmly on the floor. Concentrate, breath deeply and grab the bar more than shoulder wide. Bring it slowly down till it briefly touches your chest at the height of your nipples. Push the bar up.
//
// If you train with a high weight it is advisable to have a spotter that can help you up if you can't lift the weight on your own.
//
// With the width of the grip you can also control which part of the chest is trained more:
//
// wide grip: outer chest muscles
// narrow grip: inner chest muscles and triceps`,
//     title: `bench press`
//
//   })
};
