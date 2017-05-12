var app = angular.module("foodApp", []);

app.controller("foodCtrl", ($scope) => {
	$scope.food = "Callan's favorite food is cookies. I'm 99% certain.";
});

