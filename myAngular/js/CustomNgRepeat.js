var app=angular.module("myApp", []);

app.controller("myCtrl", function($scope)

{

alert("In Ng Repeat");

var employees=[
			{'name':'Prateek', 'age':'28', 'Qualifcation':'B.Tech', 'School' : 'GWMS'},
			{'name':'Preeti',  'age':'27', 'Qualifcation':'MCA',    'School' :'MWGS'},
			
			{'name':'Komal', 'age':'24', 'Qualifcation':'B.Tech', 'School'   : 'ABES'},
	
			{'name':'Himanshu', 'age':'25', 'Qualifcation':'B.Tech', 'School'   : 'ABES'},	

			{'name':'Rahul', 'age':'25', 'Qualifcation':'B.Tech', 'School'   : 'ABES'},	
			{'name':'Harshitha', 'age':'18', 'Qualifcation':'B.Tech', 'School'   :'ABES'},	
			{'name':'Prince', 'age':'20', 'Qualifcation':'B.Tech', 'School'   : 'ABES'},	
			{'name':'Shivam', 'age':'22', 'Qualifcation':'B.Tech', 'School'   : 'ABES'},	
			{'name':'Ayushi', 'age':'22', 'Qualifcation':'B.Tech', 'School'   : 'ABES'},	
			{'name':'Vaibhav', 'age':'15', 'Qualifcation':'B.Tech', 'School'   : 'ABES'}
	      ];


$scope.employees=employees;


});
