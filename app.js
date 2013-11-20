angular.module('rohausApp', [])
.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/templates/main.html',
    controller: 'MainCtrl'
  })
  .when('/resume', {
    templateUrl: '/templates/resume.html',
    controller: 'ResumeCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
