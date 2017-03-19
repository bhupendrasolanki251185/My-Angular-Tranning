var app = angular.module('myApp', []);
app.controller('myCntroller', function($scope){
	console.log(typeof($scope), angular);
	var names=["Bhupi", "Ranu", "kapil", "ankush", "rahul"];

	$scope.fn = "Bhupendra";
	$scope.ln = "Solanki";
	$scope.names = names;

	$scope.data = [
		{'name':'amit','address':'noida','salary':23456},
		{'name':'anuj','address':'delhi','salary':15000},
		{'name':'sunil','address':'gurgaoun','salary':40000},
	];

	$scope.limit = 1;

});