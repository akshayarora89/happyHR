angular.module( 'happyHrApp' ).directive("findJobs", 
[ "IntegrationConstants", "$rootScope",
function(IntegrationConstants, $rootScope) {
	var link = function(scope, element, attrs) {
		scope.items = [];
		// $rootScope.$on("LocationChanged", function(evt, items) {
		// 	scope.items = items;
		// });
		// scope.itemClicked = function(item) {
		// 	console.log("Footer Item Clicked!", item);
		// 	if(item.broadcastMessage)
  //     	$rootScope.$broadcast(item.broadcastMessage, item);
		// };
	};
	return {
      templateUrl: IntegrationConstants.templatePath + 'find-jobs.html',
      link: link,
      scope: {
      }
  };
}]);