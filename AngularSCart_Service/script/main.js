var mainApp = angular.module('myMainApp', ['ui.router']);

mainApp.controller('myAppController', function($scope){
	console.log("loaded....");
	
});


mainApp.config(['$stateProvider', '$urlRouterProvider' ,function($stateProvider, $urlRouterProvider) {
	
	//url is just a alias..

	$urlRouterProvider.otherwise("/views");

	$stateProvider

	//This will load only one view at time
	.state('storeInfo',{
		url:"/views",
		templateUrl : 'view/storeInfo.html',
		controller : 'storeInfoController'
	})
	
	.state('storeInfo.specific',{
		url:"/specific",
		templateUrl : 'view/specification.html',
		controller : 'specificationController'
	})
	.state('storeInfo.cost',{
		url:"/specific",
		templateUrl : 'view/cost.html',
		controller : 'storeInfoController'
	})
	.state('addtocart',{
		url:"/cart",
		templateUrl : 'view/addtocart.html',
		controller : 'addtocartcontroller'
	})
	.state('itemview',{
		url: "/details",
		templateUrl : 'view/itemview.html',
		controller : 'addtocartcontroller'
	})
	.state('admin', {
		url: "/AdminPage",
		templateUrl : 'view/admin.html',
		controller : 'admincontroller'

	})

}]);
