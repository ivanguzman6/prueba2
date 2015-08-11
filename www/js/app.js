// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state ( 'pagina1' , {
        url:"/pagina1" ,
        templateUrl:'paginas/pagina1.html', 
		controller:'pagina1Ctrl'
    })
	
	.state ( 'pagina2' , {
        url:"/pagina2" ,
		abstract: true,
        templateUrl:'paginas/pagina2.html ' 
    })
	
	.state ( 'pagina2.hijo1' , {
        url:"/hijo1" ,
		views: {
      'pagina2-hijo1': {
        templateUrl: 'paginas/pagina2-hijo1.html',
        controller: 'hijo1Ctrl'
      }
    }
  })
	
	.state ( 'pagina2.hijo2' , {
        url:"/hijo2" ,
		views: {
      'pagina2-hijo2': {
        templateUrl: 'paginas/pagina2-hijo2.html',
        controller: 'hijo2Ctrl'
     }
    }
  })
	
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('pagina1');

});



