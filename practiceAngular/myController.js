var app = angular
				.module('myModule', [])
				.controller('myCrl', function($scope)
									{
										var objInfo = {
											firstName : "Bhupendra",
											lastName : "Solanki",
											gender : "Male",
											imgName : "Plant",
											imgPath: "Images/plant.png"
										};
										var employees = [
															{firstName : "Bhupendra", lastName : "Solanki", gender : "Male", salary : 75000}
															,{firstName : "BOB", lastName : "John", gender : "Male", salary : 55000}
															,{firstName : "Tim", lastName : "Shake", gender : "Male", salary : 65000}
															,{firstName : "Robert", lastName : "King", gender : "Male", salary : 75000}
															,{firstName : "Mickel", lastName : "Jackson", gender : "Male", salary : 85000}
															,{firstName : "Sandy", lastName : "David", gender : "Male", salary : 5000}
														];
										var countries = [
														{
															name:"UK",
															cities:[
																{name:"London"}
																,{name:"Mancister"}
																,{name:"Parias"}
															]
														}	
														,{
															name:"USA",
															cities:[
																{name:"Washington DS"}
																,{name:"Newyork"}
																,{name:"colorodo"}
															]
														}
														,{
															name:"India",
															cities:[
																{name:"Delhi"}
																,{name:"Noida"}
																,{name:"Jaipur"}
																,{name:"Jodhpur"}
															]
														}
										];				
										$scope.employeInfo = objInfo;
										$scope.message = "Hello Angular!";
										$scope.employees = employees;
										$scope.countries = countries;


									});