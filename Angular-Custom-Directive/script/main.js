/**
*  Module for custom service
*
* Description
*/


var myApp = angular.module('myCalcApp', []);

myApp.controller('myCalcController', function($scope, myCalcService){

});	

myApp.directive('calculator', function(){
	// Runs during compile
	return {
	    restrict: 'E',
	    templateUrl: 'view/calculator.html',
	    link: function($scope, iElm, iAttrs, controller) {
			console.log($scope, iElm, iAttrs, controller);
		}
  	};
});
