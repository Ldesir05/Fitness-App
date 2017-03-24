angular
  .module('FitnessApp.shoulder') // No array, as we are "extending" the module
  .config(ShoulderCtrl);

function ShoulderCtrl($stateProvider) {
  // $stateProvider is an Angular service exposed by the ui-router library
  // this service allows us to define the "states" for our application
  //
  // REMEMBER: AngularJS is a single-page application framework. This means we
  // don't have the concept of "pages" but instead we use the concepts of "states"
  $stateProvider.state({
    name: 'shoulder', // name of the route
    url: '/shoulder', // url endpoint for the route
    templateUrl: '/js/features/shoulder/shoulder.html', // The url to the view template
    controller: 'ShoulderCtrl', // The name of the controller to use for this route
    controllerAs: 'ShoulderVM' // The namespace for the view to access the view model
  })
}

