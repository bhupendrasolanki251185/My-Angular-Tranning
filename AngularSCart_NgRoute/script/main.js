var mainApp = angular.module('myMainApp', ['ngRoute']);

mainApp.controller('myAppController', function($scope){
	
	
});

mainApp.config(function($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl : 'view/storeInfo.html',
		controller : 'storeInfoController'
	})
	.when('/addtocart',{
		templateUrl : 'view/addtocart.html',
		controller : 'addtocartcontroller'
	})
	.when('/itemview',{
		templateUrl : 'view/itemview.html',
		controller : 'addtocartcontroller'
	})
	.otherwise({
        redirectTo: '/storeInfo'
      });
	
});






