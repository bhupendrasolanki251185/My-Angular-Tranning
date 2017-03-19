mainApp.controller('admincontroller', function($http, $scope){

	//console.log("admincontroller", $scope);
	$scope.storeAdminData = [];
	var loadJSONData = function(){

		$http.get('assets/storedata.json')
		.success(function(data){
			$scope.storeAdminData = data.products;

		});
	}

	$scope.addData = function(){
		$scope.storeAdminData.push({"image" : "APL", "item" : "Apple", "description": "Eat one every day to keep the doctor away!", "item1" : 12, "specfication" : "Fresho is our brand of fresh fruits and vegetables which are individually handpicked everyday by our experienced and technically competent buyers. Our buying, storing and packaging processes are tailored to ensure that only the fresh, nutrient dense, healthy and delicious produce reaches your doorstep. We guarantee the quality of all Fresho products. If you're not satisfied with the freshness of the items, you can hand them back to our Customer Experience Executive (CEE) for a full refund. Royal gala apples are bright red, thin skinned, white fleshed fruits with a mild sweet flavour and are native to New Zealand. Product image shown is for representation purpose only, the actually product may vary based on season, produce & availability."});
		console.log($scope.storeAdminData);
		$http.post('/assets/storedata.json', $scope.storeAdminData)
		.success(function(data){
			console.log("success.......")

		});
	}

	loadJSONData();

	
	

});