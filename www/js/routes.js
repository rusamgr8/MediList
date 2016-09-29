angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('addPerson', {
    url: '/person/add',
    cache : false,

        templateUrl: 'templates/addPerson.html',
        controller: 'addPersonCtrl'

  })
  .state('person',{
    url: '/person/:personId',
    cache: false,

        templateUrl: 'templates/person.html',
        controller: 'personCtrl'

  })
  .state('createMediLIst', {
    url: '/medilist/create',
    cache : false,

        templateUrl: 'templates/createMediLIst.html',
        controller: 'createMediLIstCtrl'

  })

  .state('mediList', {
    url: '/homepage',
    cache : false,
    templateUrl: 'templates/mediList.html',
    controller: 'mediListCtrl'

  })


  .state('signup', {
    url: '/signup',
    cache: false,
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('login', {
    url: '/login',
    cache : false,
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'

  })

  .state('selectPerson', {
    url: '/person/select',

        templateUrl: 'templates/selectPerson.html',
        controller: 'selectPersonCtrl'

  })

  .state('editMediList', {
    url: '/medilist/edit',
    cache: false,

        templateUrl: 'templates/editMediList.html',
        controller: 'editMediListCtrl'

  })

  .state('editMedicine', {
    url: '/medilist/edit/medicine',
    cache: false,

        templateUrl: 'templates/editMedicine.html',
        controller: 'editMedicineCtrl'

  })

  .state('profile', {
    url: '/profile',
    cache : false,

        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'

  })

  .state('changePassword', {
    url: '/profile/edit/password',

        templateUrl: 'templates/changePassword.html',
        controller: 'changePasswordCtrl'

  })

  .state('editProfile', {
    url: '/profile/edit',

        templateUrl: 'templates/editProfile.html',
        controller: 'editProfileCtrl'
    
  })

  .state('medicalStores', {
    url: '/medical stores',
    templateUrl: 'templates/medicalStores.html',
    controller: 'medicalStoresCtrl'
  })

//$urlRouterProvider.otherwise('/tabs/tab1/homepage')



});
