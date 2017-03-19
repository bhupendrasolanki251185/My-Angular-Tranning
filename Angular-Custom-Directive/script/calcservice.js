myApp.service('myCalcService', function(){
	
	this.getMyName = function(){
		return "Bhupendra Solanki's Calcutor";
	}

	this.addition = function(a,b){
		return a + b;
	}

	this.subtraction = function(a,b){
		return a - b;
	}

	this.mult = function(a,b){
		return a * b;
	}

	this.division = function(a,b){
		return a / b;
	}
});