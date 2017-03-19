// JavaScript Document
var app=angular.module("MyApp",[])
app.controller("MyCtrl",function($scope)
{
	$scope.lim=2;
	$scope.data=[{'name':'sumit','age':30,'salary':2345.67},
	{'name':'anuj','age':24,'salary':3345.67},
	{'name':'anuj1','age':24,'salary':3345.67},
	{'name':'anuj2','age':24,'salary':3345.67}];
	$scope.myData={};
	$scope.abc=function()
	{
		console.log($scope.myData);
	}
});
