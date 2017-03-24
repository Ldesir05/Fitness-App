angular
  .module('FitnessApp.chest') // No array, as we are "extending" the module
  .config(ChestCtrl);

function ChestCtrl($stateProvider) {
  // $stateProvider is an Angular service exposed by the ui-router library
  // this service allows us to define the "states" for our application
  //
  // REMEMBER: AngularJS is a single-page application framework. This means we
  // don't have the concept of "pages" but instead we use the concepts of "states"
  $stateProvider.state({
    name: 'Chest', // name of the route
    url: '/chest', // url endpoint for the route
    templateUrl: '/js/features/chest/chest.html', // The url to the view template
    controller: 'ChestCtrl', // The name of the controller to use for this route
    controllerAs: 'ChestVM' // The namespace for the view to access the view model
  })
}
