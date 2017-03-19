var mainApp = angular.module('myMainApp', ['ui.router']);

mainApp.controller('myAppController', function($scope){
	
	
});

mainApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/storeInfo');

	$stateProvider
			.state('storeInfo',{
				url: "/storeInfo",
				templateUrl : 'storeInfo.html'
			})
	
}]);



