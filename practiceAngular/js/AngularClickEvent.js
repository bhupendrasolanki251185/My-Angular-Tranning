var myApp = angular.module('myApp', []);
myApp.controller('cntrller', function($scope){

	var technologies = [
						{name: "C#", like:0, dislike:0}
						,{name: "ASP.Net", like:0, dislike:0}
						,{name: "AS3", like:0, dislike:0}
						,{name: "Javascript", like:0, dislike:0}
						];
	$scope.technologies = technologies;
	
	$scope.likeTechnology = function(technology){
		technology.like++;
	};
	
	$scope.dislikeTechnology = function(technology){
		technology.dislike++;
	};			
	
});