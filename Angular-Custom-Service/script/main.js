/**
*  Module for custom service
*
* Description
*/


var myApp = angular.module('myCalcApp', []).controller('myCalcController', function($scope, myCalcService){
	$scope.name =  myCalcService.getMyName();
	var arrData = [], curntOperator = "";
	$scope.strText = "";

	$scope.showNumber = function(numText){
			$scope.strText += numText;
	}

	$scope.performOperation = function(operator){
		curntOperator = operator;
		arrData[0] = parseInt($scope.strText);
		$scope.strText = "";
	}

	$scope.showOnEqualOperator = function(){
		arrData[1] = parseInt($scope.strText);
		console.log(curntOperator, "-----");
		//equlClicked = true;
		if(curntOperator == "+")
		{
			$scope.strText = myCalcService.addition(arrData[0], arrData[1]);
			arrData = [];
		}
		else if(curntOperator == "-")
		{
			$scope.strText = myCalcService.subtraction(arrData[0], arrData[1]);
			arrData = [];
		}else if(curntOperator == "÷")
		{
			$scope.strText = myCalcService.mult(arrData[0], arrData[1]);
			arrData = [];
		}else if(curntOperator == "x")
		{
			$scope.strText = myCalcService.division(arrData[0], arrData[1]);
			arrData = [];
		}
	};



});				