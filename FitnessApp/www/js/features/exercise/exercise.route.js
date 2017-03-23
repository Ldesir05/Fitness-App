
angular
  .module('FitnessApp.exercise') // No array, as we are "extending" the module
  .config(ExerciseCtrl);

function ExerciseCtrl($stateProvider) {
  // $stateProvider is an Angular service exposed by the ui-router library
  // this service allows us to define the "states" for our application
  //
  // REMEMBER: AngularJS is a single-page application framework. This means we
  // don't have the concept of "pages" but instead we use the concepts of "states"
  $stateProvider.state({
    name: 'Exercise', // name of the route
    url: '/', // url endpoint for the route
    templateUrl: '/FitnessApp/features/exercise/exercise.html', // The url to the view template
    controller: 'ExerciseCtrl', // The name of the controller to use for this route
    controllerAs: 'ExerciseVM' // The namespace for the view to access the view model
  })
}
