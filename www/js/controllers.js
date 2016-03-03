angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state, $ionicHistory, $rootScope) {

  $scope.$on('user:updated', function(event) {
    // you could inspect the data to see if what you care about changed, or just update your own scope
    $scope.currentUser = CB.CloudUser.current;
  });

  $scope.logout = function () {
    CB.CloudUser.current.logOut({
      success: function(user) {
        //log out successfull
        $ionicHistory.clearCache();
        $ionicHistory.clearHistory();
        $ionicHistory.nextViewOptions({
          disableBack: true,
          historyRoot: true
        });
        $state.go('app.login');
        $scope.currentUser = CB.CloudUser.current;
        $scope.$apply();
      },
      error: function(err) {
        console.log(err);
        //Error occured in user logout
        $state.go("app.login");
      }
    });
  }

})

.controller('LoginCtrl', function($scope, $stateParams, $state, $rootScope, $ionicHistory) {


  // Form data for the login modal
  $scope.loginData = {};

  // If user is logged in already, redirect them.
  if (CB.CloudUser.current) {
    $rootScope.currentUser = CB.CloudUser.current;
    $state.go("app.dashboard");
  } else {
    $rootScope.currentUser = "";
  }
  // DISABLE back button - IMPORTANT!!!!!
  $ionicHistory.nextViewOptions({
    disableBack: true
  });


  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {

    // Login with cloudboost
    var user = new CB.CloudUser();
    user.set('username', $scope.loginData.username);
    user.set('password', $scope.loginData.password);
    user.logIn({
    success: function(user) {
      //Login successfull
      $state.go('app.dashboard');
      // Send a broadcast so the side menu is updated
      $rootScope.$broadcast('user:updated');
    },
    error: function(err) {
      //Error occured in user login
      $scope.errorMessage = JSON.parse(err).error;
      // Reset the password to empty
      $scope.loginData.password = "";
      $scope.$apply();
    }
    });
  };
})
.controller('SignupCtrl', function($scope, $stateParams, $state, $rootScope, $ionicHistory) {

  // Empty form data
  $scope.signupData = {};

  // If user is logged in already, redirect them.
  if (CB.CloudUser.current) {
    $rootScope.currentUser = CB.CloudUser.current;
    $state.go("app.dashboard");
    $scope.$apply();
  }

  // DISABLE back button - IMPORTANT!!!!!
  $ionicHistory.nextViewOptions({
    disableBack: true
  });

  // Sign up user
  $scope.doSignup = function () {
    var user = new CB.CloudUser();
    user.set('username', $scope.signupData.username);
    user.set('password', $scope.signupData.password);
    user.set('email', $scope.signupData.email);
    user.signUp({
    success: function(user) {
      //Registration successfull
      $state.go('app.dashboard');
      // Send a broadcast so the side menu is updated
      $rootScope.$broadcast('user:updated');
    },
    error: function(err) {
      //Error in user registration.
      $scope.errorMessage = JSON.parse(err).error;
    }
    });

}

})

.controller('DashboardCtrl', function($scope, $stateParams, $rootScope, $state, $ionicHistory) {


  // If user is NOT logged in.
  if (!CB.CloudUser.current) {
    $rootScope.currentUser = "";
    $state.go('app.login');
  }

  $scope.currentUser = CB.CloudUser.current;

  // DISABLE back button - IMPORTANT!!!!!
  $ionicHistory.nextViewOptions({
    disableBack: true
  });


});
