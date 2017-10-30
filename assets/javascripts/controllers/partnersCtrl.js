'use strict';

angular.module( 'happyHrApp' ).controller( 'PartnersCtrl', 
	['$scope', 'JobService',
	function( $scope, JobService) 
{
	JobService.getPartnersList().get(function(partnersData) {
    if(partnersData.data){
    	$scope.stateList = partnersData.data.stateList;
    	$scope.partners = partnersData.data.partnerData;
    }
  });
  $scope.setPartnerData = function(partner) {
    $scope.selectedPartner = partner;
  }
}]);
