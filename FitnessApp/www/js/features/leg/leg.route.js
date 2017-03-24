angular
  .module('FitnessApp.leg') // No array, as we are "extending" the module
  .config(LegCtrl);

function LegCtrl($stateProvider) {
  // $stateProvider is an Angular service exposed by the ui-router library
  // this service allows us to define the "states" for our application
  //
  // REMEMBER: AngularJS is a single-page application framework. This means we
  // don't have the concept of "pages" but instead we use the concepts of "states"
  $stateProvider.state({
    name: 'leg', // name of the route
    url: '/leg', // url endpoint for the route
    templateUrl: '/js/features/leg/leg.html', // The url to the view template
    controller: 'LegCtrl', // The name of the controller to use for this route
    controllerAs: 'LegVM' // The namespace for the view to access the view model
  })
}
