// JavaScript Document
var app=angular.module("myApp",['ngRoute'])
app.config(function($routeProvider)
{
	$routeProvider
	.when('/',
	{
		     templateUrl:'layout/home.html',
			 controller:'home'
	})
	.when('/about',
	{
		     templateUrl:'layout/about.html',
			 controller:'about'
	})
	.when('/contact',
	{
		     templateUrl:'layout/contact.html',
			 controller:'contact'
	})
})
app.controller("home",function($scope)
{
	$scope.data="Hello ducat"
})
app.controller("about",function()
{
	
})
app.controller("contact",function()
{
	
})