angular.module('app.controllers', [])
  
.controller('addPersonCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('createMediLIstCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('mediListCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('signupCtrl', ['$scope', '$stateParams', 'UserService', function ($scope, $stateParams, UserService) {
	$scope.user = {};
	console.log("coming inside");
	$scope.signup = function(){
      console.log('coming inside signup');
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
   
.controller('loginCtrl', ['$scope', '$stateParams', 'UserService', '$rootScope', '$state',
function ($scope, $stateParams , UserService ,$rootScope, $state) {
	console.log("coming inside");
  // If user is logged in already, redirect them.
  if (CB.CloudUser.current) {
    $rootScope.currentUser = CB.CloudUser.current;
    $state.go("tabsController.mediList");
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
   
.controller('profileCtrl', ['$scope', '$stateParams', '$ionicHistory','$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$ionicHistory,$state) {
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
 