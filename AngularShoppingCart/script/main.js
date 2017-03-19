var mainApp = angular.module('myMainApp', []);
mainApp.controller('myAppController', function($scope){
	$scope.itemCount = 0;
	$scope.itemValue = 0;
	$scope.storeData = {
			"ID": "store",
			"products": [{"image" : "APL", "item" : "Apple", "description": "Eat one every day to keep the doctor away!", "item1" : 12, "item2" : 90,"item3" : 0,"item4" : 2, "item5" : 0, "item6" : 1, "item7" : 2},
						{"image" :"AVC", "item" : "Avocado", "description": "Guacamole anyone?", "item1" : 16, "item2" : 90, "item3" : 0, "item4" : 1, "item5" : 1, "item6" : 1, "item7" : 2},
						{"image" :"BAN", "item" : "Banana", "description": "These are rich in Potassium and easy to peel.", "item1" : 4, "item2" : 120, "item3" : 0, "item4" : 2, "item5" : 1, "item6" : 2,"item7" :  2},
						{"image" :"CTP", "item" : "Cantaloupe", "description": "Delicious and refreshing.", "item1" : 3, "item2" : 50,"item3" :  4, "item4" : 4, "item5" : 1, "item6" : 2, "item7" : 0},
						{"image" :"FIG", "item" : "Fig", "description": "OK, not that nutritious, but sooo good!", "item1" : 10, "item2" : 100, "item3" : 0, "item4" : 0, "item5" : 0, "item6" : 1,"item7" : 2},
						{"image" :"GRF", "item" : "Grapefruit", "description": "Pink or red, always healthy and delicious.", "item1" : 11, "item2" : 50, "item3" : 4, "item4" : 4, "item5" : 1, "item6" : 1,"item7" :  1},
						{"image" :"GRP", "item" : "Grape", "description": "Wine is great, but grapes are even better.", "item1" : 8, "item2" : 100, "item3" : 0, "item4" : 3, "item5" : 0, "item6" : 1, "item7" : 1},
						{"image" :"GUA", "item" : "Guava", "description": "Exotic, fragrant, tasty!", "item1" : 8, "item2" : 50, "item3" : 4, "item4" : 4, "item5" : 0, "item6" : 1, "item7" : 2},
						{"image" :"KIW", "item" : "Kiwi", "description": "These come from New Zealand.", "item1" : 14, "item2" : 90, "item3" : 1, "item4" : 4, "item5" : 0, "item6" : 2, "item7" : 2},
						{"image" :"LYC", "item" : "Lychee", "description": "Unusual and highly addictive!", "item1" : 18, "item2" : 1, "item3" : 4, "item4" : 0, "item5" : 2, "item6" : 2, "item7" : 125},
						{"image" :"MAN", "item" : "Mango", "description": "Messy to eat, but well worth it.", "item1" : 8, "item2" : 70, "item3" : 3, "item4" : 4, "item5" : 0, "item6" : 1, "item7" : 1},
						{"image" :"ORG", "item" : "Orange", "description": "Vitamin C anyone? Go ahead, make some juice.", "item1" : 9, "item2" : 70, "item3" : 1, "item4" : 4, "item5" : 2, "item6" : 1, "item7" : 2},
						{"image" :"PAP", "item" : "Papaya",  "description":"Super-popular for breakfast.", "item1" : 5, "item2" : 60, "item3" : 3, "item4" : 4, "item5" : 2, "item6" : 2, "item7" : 2},
						{"image" :"PCH", "item" : "Peach",  "description":"Add some cream and enjoy.", "item1" : 19, "item2" : 70, "item3" : 1, "item4" : 2, "item5" : 0, "item6" : 1, "item7" : 2},
						{"image" :"PER", "item" : "Pear",  "description":"Delicious fresh, or cooked in red wine, or distilled.", "item1" : 8, "item2" : 100, "item3" : 0, "item4" : 2, "item5" : 0, "item6" : 1, "item7" : 2},
						{"image" :"PMG", "item" : "Pomegranate", "description": "Delicious, healthy, beautiful, and sophisticated!", "item1" : 19, "item2" : 110, "item3" : 0, "item4" : 2, "item5" : 0, "item6" : 2, "item7" : 0},
						{"image" :"PNP", "item" : "Pineapple", "description": "Enjoy it (but don't forget to peel first].", "item1" : 4, "item2" : 60, "item3" : 0, "item4" : 3, "item5" : 0, "item6" : 0, "item7" : 1},
						{"image" :"PSM", "item" : "Persimmon", "description": "Believe it or not, they are berries!", "item1" : 6, "item2" : 120, "item3" : 4, "item4" : 3, "item5" : 0, "item6" : 1, "item7" : 3},
						{"image" :"STR", "item" : "Strawberry", "description": "Beautiful, healthy, and delicious.", "item1" : 7, "item2" : 40, "item3" : 0, "item4" : 4, "item5" : 1, "item6" : 1, "item7" : 2},
						{"image" :"TNG", "item" : "Tangerine", "description": "Easier to peel than oranges!", "item1" : 8, "item2" : 50, "item3" : 3, "item4" : 4, "item5" : 1, "item6" : 1, "item7" : 2},
						{"image" :"WML", "item" : "Watermelon", "description": "Nothing comes close on those hot summer days.", "item1" : 4, "item2" : 90, "item3" : 4, "item4" : 4, "item5" : 0, "item6" : 1, "item7" : 1}
						]};

	$scope.addToCart = function(val){

		//alert(itemValue);
		$scope.itemValue += (val*1);
		$scope.itemCount++;
	}


	
});