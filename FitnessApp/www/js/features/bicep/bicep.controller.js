angular
  .module('FitnessApp.bicep')
  .controller('BicepCtrl',BicepCtrl);

function BicepCtrl($scope) {
  var vm = this;
  $scope.bicep = {
    name: [
      'Bicep Curl with Cable',
      'Bicep Curl with Barbell',
      'Bicep Curl with Bumbell',
      'Hammer Curls',
      'Hammer Curls with Cable',
      'Barbell Lunges Walking',
      'Preacher Curls',
      'Dips'
    ]
  }
}
