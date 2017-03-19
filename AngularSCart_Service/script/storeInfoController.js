mainApp.controller('storeInfoController', function($http, $scope){
	$scope.itemCount = 0;
	$scope.itemValue = 0;
	$scope.storeData = {};
	$scope.currentItem = "";
	$scope.specification = ""

	var loadJSONData = function(){

		$http.get('assets/storedata.json')
		.success(function(data){
			$scope.storeData = data;
			$scope.limit = $scope.storeData.products.length;
		});
	}
	
	loadJSONData();

	$scope.addToCart = function(val){
		$scope.itemValue += (val*1);
		$scope.itemCount++;
	}

	$scope.showSpecification =function(item, spec){
		$scope.currentItem = item;
		$scope.specification = spec;
	}

	
	

console.log("storeInfo.....");

});