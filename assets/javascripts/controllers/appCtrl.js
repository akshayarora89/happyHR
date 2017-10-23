'use strict';

angular.module( 'happyHrApp' ).controller( 'AppCtrl', 
	['$scope', 'IntegrationConstants',
	function( $scope, IntegrationConstants) 
{
	$scope.RoR = IntegrationConstants.RoR;
}]);
