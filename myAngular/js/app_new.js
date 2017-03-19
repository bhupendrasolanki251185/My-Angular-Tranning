var app=angular.module("myApp",['ngRoute'])


app.config (function($routeProvider)
{   $routeProvider
				.when('/',
				{
					templateUrl:'layouts/About.html',
					controller:'about'
					
					
				})
				.when("/home",
				{
					templateUrl:"layouts/Home.html",
					controller:"home"
					
					
				})
				.when("/courses",
				{
					templateUrl:'layouts/Course.html',
					controller:'course'
				})
	
});

app.controller("about", function($scope){
	
	$scope.message="Your application has been Routed into About.HTML";
	
	
});

app.controller("home", function($scope){
	
	$scope.message="Your application has been Routed into Home.HTML";
	
});

app.controller("course", function($scope)
{
	$scope.message="Your application has been Routed into Courses.HTML";
});

app.controller("MyController", function($scope){
$scope.welcomeMessage="Welcome to First Angular";

	
});


