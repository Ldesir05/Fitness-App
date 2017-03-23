
angular
  .module('FitnessApp.workouts') // No array, as we are "extending" the module
  .config(WorkoutsCtrl);

function WorkoutsCtrl($stateProvider) {
  // $stateProvider is an Angular service exposed by the ui-router library
  // this service allows us to define the "states" for our application
  //
  // REMEMBER: AngularJS is a single-page application framework. This means we
  // don't have the concept of "pages" but instead we use the concepts of "states"
  $stateProvider.state({
    name: 'workouts', // name of the route
    url: '/workouts', // url endpoint for the route
    templateUrl: '/js/features/workouts/workouts.html', // The url to the view template
    controller: 'WorkoutsCtrl', // The name of the controller to use for this route
    controllerAs: 'WorkoutsVM' // The namespace for the view to access the view model
  })
}
