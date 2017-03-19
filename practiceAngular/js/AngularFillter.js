var myApp = angular.module('myApp', []);
myApp.controller('cntrller', function($scope){

	var technologies = [
						 {name: "C#", like:0, dislike:0}
						,{name: "ASP.Net", like:0, dislike:0}
						,{name: "AS3", like:0, dislike:0}
						,{name: "Javascript", like:0, dislike:0}
						];
	$scope.technologies = technologies;
	$scope.averageStatus = 0;

	$scope.likeTechnology = function(technology){
		technology.like++;
		//averageLikes(technology);
	};
	
	$scope.dislikeTechnology = function(technology){
		technology.dislike++;
		//averageLikes(technology);

	};

	$scope.averageLikes = function(technology)
	{
		var avg = (technology.like - technology.dislike);
		if(avg <= 0)
		{
			 return 0;
		}
		else
		{
			return avg;
		}
	};			
	
});