angular.module('rohausApp', ['ngRoute'])
.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'client/templates/main.html',
    controller: 'MainCtrl'
  })
  .when('/resume', {
    templateUrl: 'client/templates/resume.html',
    controller: 'ResumeCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
