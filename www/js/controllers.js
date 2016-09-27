angular.module('app.controllers', [])
  
.controller('addPersonCtrl', ['$scope', '$stateParams','$state', '$rootScope', 'PersonService', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state,$rootScope,PersonService) {
  if (!CB.CloudUser.current) {
    console.log("user not logged in");
    $rootScope.currentUser = "";
    $state.go('tabsController.login');
  }

  $scope.person = {};

  $scope.addPerson = function(){
    $scope.person.requestors = [$rootScope.currentUser];
    console.log($scope.person);
    PersonService.addPerson($scope.person)
    .then(function(person){
      console.log("person added: "+person);
    },function(error){
      console.log("")
    })
  }
}])
   
.controller('createMediLIstCtrl', ['$scope', '$stateParams','$rootScope','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $rootScope, $state) {
  if (!CB.CloudUser.current) {
    console.log("user not logged in");
    $rootScope.currentUser = "";
    $state.go('tabsController.login');
  }

}])
   
.controller('mediListCtrl', ['$scope', '$stateParams', '$state','$rootScope',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$state,$rootScope) {
  if (!CB.CloudUser.current) {
    console.log("user not logged in");
    $rootScope.currentUser = "";
    $state.go('tabsController.login');
  }

}])
      
.controller('signupCtrl', ['$scope', '$stateParams', 'UserService', function ($scope, $stateParams, UserService) {
	$scope.user = {};
	console.log("coming inside");
	$scope.signup = function(){
      console.log('coming inside signup');
      // If user is logged in already, redirect them.
      if (CB.CloudUser.current) {
        $rootScope.currentUser = CB.CloudUser.current;
        $state.go("tabsController.mediList");
        $scope.$apply();
      }

      // DISABLE back button - IMPORTANT!!!!!
      $ionicHistory.nextViewOptions({
        disableBack: true
      });
      console.log($scope.user);
      UserService.signup($scope.user)
    	.then(function(){
    		$rootScope.currentUser = user;
	      	$state.go('tabsController.mediList')
	    },function(){
	      console.log("not a great choice")
	    });  
    };
}])
   
.controller('loginCtrl', ['$scope', '$stateParams', 'UserService', '$rootScope', '$state','$ionicHistory',
function ($scope, $stateParams , UserService ,$rootScope, $state,$ionicHistory) {
	console.log("coming inside");
  // If user is logged in already, redirect them.
  if (CB.CloudUser.current) {
    $rootScope.currentUser = CB.CloudUser.current;
    $state.go("tabsController.profile");
  } else {
    $rootScope.currentUser = "";
  }
  // DISABLE back button - IMPORTANT!!!!!
  $ionicHistory.nextViewOptions({
    disableBack: true
  });
	$scope.user ={};
	$scope.login = function() {
    console.log($scope.user);
    UserService.login($scope.user)
    .then(function(user){
      $rootScope.currentUser = user;
      $rootScope.$broadcast('user:updated');
      $state.go('tabsController.mediList');
    },function(err)
    {
      console.log("not a great choice")
    });
  }

}])
   
.controller('selectPersonCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('editMediListCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('editMedicineCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('profileCtrl', ['$scope', '$stateParams', '$ionicHistory','$state', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
// If user is NOT logged in.
  

function ($scope, $stateParams,$ionicHistory,$state,$rootScope) {

  if (!CB.CloudUser.current) {
    console.log("user not logged in");
    $rootScope.currentUser = "";
    $state.go('tabsController.login');
  }
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
        $state.go('tabsController.login');
        $scope.currentUser = CB.CloudUser.current;
        $scope.$apply();
      },
      error: function(err) {
        console.log(err);
        //Error occured in user logout
        $state.go("tabsController.login");
      }
    });
  }

}])
   
.controller('changePasswordCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('editProfileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('medicalStoresCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 