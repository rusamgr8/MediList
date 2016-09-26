// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services','ui.router'])

.run(["$ionicPlatform","$rootScope","UserService","$location",function($ionicPlatform,$rootScope,UserService,$location) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

     CB.CloudApp.init('objilwmlieyf', '5b3b0f7c-7fab-42b8-a297-fd476d98d1fc');
    if (!CB.CloudUser.current) {
      $rootScope.currentUser = CB.CloudUser.current;
    } else {
      $rootScope.currentUser = "";
    }
    var routesThatDontRequireAuth = ['/login'];

  // check if current location matches route  
  var routeClean = function (route) {
    console.log("routeClean called");
    return _.find(routesThatDontRequireAuth,
      function (noAuthRoute) {
        return _.includes(route, noAuthRoute);
      });
  };

  $rootScope.$on('$stateChangeStart', function (ev, to, toParams, from, fromParams) {
    // if route requires auth and user is not logged in
    console.log($location.url() + "   "+ UserService.isLoggedIn() );
    if (!routeClean($location.url()) && !UserService.isLoggedIn()) {
      // redirect back to login
      $location.path('/login');
    }
    /*else if (routeAdmin($location.url() && !UserService.validateRoleAdmin())) {
      // redirect to error page
      $location.path('/error');
    }*/
  });
  });

  
}])