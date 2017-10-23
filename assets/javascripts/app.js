'use strict';

// Main module of the application.

angular.module( 'happyHrApp', [])
.service('API',
  [
  function () {
      this.url = function () {
          return "https://cosmos-crm.herokuapp.com";
      };
  }])
.constant('AuthEvents', {
  loginSuccess: false,
  loginFailed: false,
  notAuthenticated: "notAuthenticated",
  notAuthorized: "notAuthorized",
  sessionTimeout: "sessionTimeout"
})
.constant('IntegrationConstants', {
  templatePath : false ? '' : 'assets/templates/'
})
// .config( ['$routeProvider', 'uiGmapGoogleMapApiProvider', '$httpProvider', 'IntegrationConstants', '$injector',
//   function( $routeProvider, uiGmapGoogleMapApiProvider, $httpProvider, IntegrationConstants, $injector ) {
//   // Specifying the route provider as a string above ensures that the correct angular provider
//   // is passed to the function. Rails will shorten variable names as a part of minification
//   // in the production build, but not strings

//   // $routeProvider.when( '/', { templateUrl: 'careperson-splash.html', controller: 'AdminCtrl', title: "Care Person" } );

//   $routeProvider.when( '/',      { templateUrl: IntegrationConstants.templatePath + 'main.html',  controller: 'MainCtrl', title: "Dashboard" } );
//   $routeProvider.when( '/staff', { templateUrl: IntegrationConstants.templatePath + 'staff.html', controller: 'StaffCtrl', title: "Staff" } );
//   $routeProvider.when( '/scheduling', { templateUrl: IntegrationConstants.templatePath + 'assessments.html', controller: 'AssessmentsCtrl', title: "Scheduling" } );
//   $routeProvider.when( '/assessments', { templateUrl: IntegrationConstants.templatePath + 'completed.html', controller: 'CompletedCtrl', title: "Assessments" } );
//   $routeProvider.when( '/availabilities', { templateUrl: IntegrationConstants.templatePath + 'availabilities.html', controller: 'AvailabilitiesCtrl', title: "Availabilities" } );
//   $routeProvider.when( '/roster', { templateUrl: IntegrationConstants.templatePath + 'roster.html', controller: 'RosterCtrl', title: "Roster" } );
//   $routeProvider.when( '/admin', { templateUrl: IntegrationConstants.templatePath + 'admin.html', controller: 'AdminCtrl', title: "Admin" } );
//   $routeProvider.when( '/login', { 
//     templateUrl: IntegrationConstants.templatePath + 'login.html',
//     controller: 'LoginCtrl',
//     resolve: {
//       init: function() {
//         return function(AuthZeroService) {
//           AuthZeroService.login();
//         };
//       }
//     },
//     title: "Login" 
//   });
//   $routeProvider.when( '/log', { templateUrl: IntegrationConstants.templatePath + 'log.html', controller: 'LogCtrl', title: "Call Log" } );
//   $routeProvider.when( '/clients', { templateUrl: IntegrationConstants.templatePath + 'clients.html', controller: 'ClientsCtrl', title: "Clients" } );
//   $routeProvider.when( '/programs', { templateUrl: IntegrationConstants.templatePath + 'programs.html', controller: 'ProgramsCtrl', title: "Services" } );
//   $routeProvider.when( '/actionables', { templateUrl: IntegrationConstants.templatePath + 'actionables.html', controller: 'ActionablesCtrl', title: "Actionables" } );
  
//   $routeProvider.when( '/careperson', { templateUrl: IntegrationConstants.templatePath + 'careperson-splash.html', controller: 'AdminCtrl', title: "Care Person" } );
//   $routeProvider.when( '/organisation', { templateUrl: IntegrationConstants.templatePath + 'careperson-organisation.html', controller: 'AdminCtrl', title: "Your Organisation" } );
//   $routeProvider.when( '/reports', { templateUrl: IntegrationConstants.templatePath + 'careperson-reports.html', controller: 'MainCtrl', title: "Your Reports" } );
//   $routeProvider.when( '/carepeople', { templateUrl: IntegrationConstants.templatePath + 'careperson-staff.html', controller: 'StaffCtrl', title: "Your Staff" } );
//   $routeProvider.when( '/careperson-clients', { templateUrl: IntegrationConstants.templatePath + 'clients.html', controller: 'ClientsCtrl', title: "Your Clients" } );
//   $routeProvider.when( '/careperson-services', { templateUrl: IntegrationConstants.templatePath + 'programs.html', controller: 'ProgramsCtrl', title: "Services" } );
//   $routeProvider.when( '/careperson-actionables', { templateUrl: IntegrationConstants.templatePath + 'actionables.html', controller: 'ActionablesCtrl', title: "Actionables" } );
//   $routeProvider.when( '/careperson-calendar', { templateUrl: IntegrationConstants.templatePath + 'careperson-calendar.html', controller: 'CarepersonCalendarCtrl', title: "Calendar" } );
  
//   $routeProvider.otherwise( { redirectTo: '/' } );

//   uiGmapGoogleMapApiProvider.configure({
//     key: 'AIzaSyAMSMK6Jjk1DZsKfgvf_qLE0t0bS7T60IM',
//     v: '3.17',
//     libraries: 'geometry,visualization,places'
//   });

//   $httpProvider.interceptors.push("AuthInterceptor");
//   $httpProvider.interceptors.push("Pretender");
//   if (!IntegrationConstants.RoR) {
//     var angularAuth0Provider = $injector.get("angularAuth0Provider");
//     angularAuth0Provider.init({
//       clientID: 'Km2qIKWGT98I57DfzOQ50n0qj6e8KgbW',
//       domain: 'optilyzeau.au.auth0.com',
//       responseType: 'token id_token',
//       audience: 'https://optilyzeau.au.auth0.com/userinfo',
//       redirectUri: IntegrationConstants.frontEnd + '/',
//       scope: 'openid email'
//     });
//   }
// }])
// .run(
//   ['$templateCache', '$injector', '$rootScope', '$location', 'IntegrationConstants', 'AuthZeroService', 
//   function ($templateCache, $injector, $rootScope, $location, IntegrationConstants, AuthZeroService) {
//     $templateCache.put('searchbox.tpl.html', '<input class="form-control" type="text" placeholder="Add New Address">');
//     $templateCache.put('caButtonDefault.tpl.html', '<button class="btn ca-btn-default>');
//     $rootScope.$on( "$routeChangeStart", function(event, next, current) {
//       var AuthToken = $injector.get("AuthToken");
//       var token = AuthToken.get();
//       if(!IntegrationConstants.RoR) {
//         if(!token || token == "undefined") {
//           $location.path('/login');
//         }
//       }
//     });
//     $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
//         if (current && current.$$route) {
//           $rootScope.title = current.$$route.title;
//         }
//     });
//     AuthZeroService.handleAuthentication(function() {
//       $rootScope.loginIfNecessary();
//       $rootScope.loadProgram();
//     });
//   }]
// )

