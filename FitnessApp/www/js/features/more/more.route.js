angular
  .module('FitnessApp.more') // No array, as we are "extending" the module
  .config(MoreCtrl);

function MoreCtrl($stateProvider) {
  // $stateProvider is an Angular service exposed by the ui-router library
  // this service allows us to define the "states" for our application
  //
  // REMEMBER: AngularJS is a single-page application framework. This means we
  // don't have the concept of "pages" but instead we use the concepts of "states"
  $stateProvider.state({
    name: 'More', // name of the route
    url: '/more', // url endpoint for the route
    templateUrl: '/js/features/more/more.html', // The url to the view template
    controller: 'MoreCtrl', // The name of the controller to use for this route
    controllerAs: 'MoreVM' // The namespace for the view to access the view model
  })
}
