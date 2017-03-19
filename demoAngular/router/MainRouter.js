var app = angular.module('myApp', ['ngRoute']);

app.controller('myController', function($scope){
		
});

app.config(function($routeProvider) {

	$routeProvider
	.when('/',{
			templateUrl : 'layout/home.html',
			controller : 'home'
	})
	.when('/search',{
			templateUrl : 'layout/search.html',
			controller : 'search'
	});
	
});

app.controller('home', function($scope){
	console.log("home", $scope)
	$scope.data = "bhupendra solanki";
});

app.controller('search', function($scope){
	console.log("search", $scope)
});



