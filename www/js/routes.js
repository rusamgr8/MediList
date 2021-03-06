angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('tabsController.addPerson', {
    url: '/person/add',
    cache : false,
    views: {
      
      'tab3': {
        templateUrl: 'templates/addPerson.html',
        controller: 'addPersonCtrl'
      }
    }
  })

  .state('tabsController.createMediLIst', {
    url: '/medilist/create',
    cache : false,
    views: {
      'tab2': {
        templateUrl: 'templates/createMediLIst.html',
        controller: 'createMediLIstCtrl'
      }
    }
  })

  .state('tabsController.mediList', {
    url: '/homepage',
    cache : false,
    views: {
      'tab1': {
        templateUrl: 'templates/mediList.html',
        controller: 'mediListCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tabs',
    cache: false,
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.signup', {
    url: '/signup',
    cache: false,
    views:{
      'tab4': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('tabsController.login', {
    url: '/login',
    cache : false,
    views:{
      'tab4': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('tabsController.selectPerson', {
    url: '/person/select',
    views: {
      'tab2': {
        templateUrl: 'templates/selectPerson.html',
        controller: 'selectPersonCtrl'
      }
    }
  })

  .state('tabsController.editMediList', {
    url: '/medilist/edit',
    cache: false,
    views: {
      'tab1': {
        templateUrl: 'templates/editMediList.html',
        controller: 'editMediListCtrl'
      }
    }
  })

  .state('tabsController.editMedicine', {
    url: '/medilist/edit/medicine',
    cache: false,
    views: {
      'tab1': {
        templateUrl: 'templates/editMedicine.html',
        controller: 'editMedicineCtrl'
      }
    }
  })

  .state('tabsController.profile', {
    url: '/profile',
    cache : false,
    views: {
      'tab4': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabsController.changePassword', {
    url: '/profile/edit/password',
    views: {
      'tab4': {
        templateUrl: 'templates/changePassword.html',
        controller: 'changePasswordCtrl'
      }
    }
  })

  .state('tabsController.editProfile', {
    url: '/profile/edit',
    views: {
      'tab4': {
        templateUrl: 'templates/editProfile.html',
        controller: 'editProfileCtrl'
      }
    }
  })

  .state('medicalStores', {
    url: '/medical stores',
    templateUrl: 'templates/medicalStores.html',
    controller: 'medicalStoresCtrl'
  })

//$urlRouterProvider.otherwise('/tabs/tab1/homepage')

  

});