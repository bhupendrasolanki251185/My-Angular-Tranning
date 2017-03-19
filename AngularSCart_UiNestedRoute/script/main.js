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
		views :{
			"": {
					templateUrl : 'view/storeInfo.html',
					controller : 'storeInfoController'
			},
			"view1@storeInfo": { 
				templateUrl : 'view/specification.html',
				controller : 'storeInfoController'
			},
			"view2@storeInfo": { 
				templateUrl : 'view/cost.html',
				controller : 'storeInfoController'
			}	
			
		}
	})
	
	.state('storeInfo.specific',{
		url:"/specific",
		templateUrl : 'view/specification.html',
		controller : 'storeInfoController'
	})
	.state('storeInfo.cost',{
		url:"/cost",
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

}]);
