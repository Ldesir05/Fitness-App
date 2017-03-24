angular
  .module('FitnessApp.triceps') // No array, as we are "extending" the module
  .config(TricepsCtrl);

function TricepsCtrl($stateProvider) {
  // $stateProvider is an Angular service exposed by the ui-router library
  // this service allows us to define the "states" for our application
  //
  // REMEMBER: AngularJS is a single-page application framework. This means we
  // don't have the concept of "pages" but instead we use the concepts of "states"
  $stateProvider.state({
    name: 'Triceps', // name of the route
    url: '/triceps', // url endpoint for the route
    templateUrl: '/js/features/triceps/triceps.html', // The url to the view template
    controller: 'TricepsCtrl', // The name of the controller to use for this route
    controllerAs: 'TricepsVM' // The namespace for the view to access the view model
  })
}
