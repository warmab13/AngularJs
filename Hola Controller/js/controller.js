var app = angular.module("MyFirstApp",["ngResource"]);

	app.controller("FirstController", function($scope){
		$scope.nombre = "Alonso";
	});

/*Tambien se puede hacer asi
angular.module("MyFirstApp",[]).controller("FirstController", function($scope){
		$scope.nombre = "Alonso";
	});

*/

/*Tambien se pueden registrar los modulos dentro de angular.
Esto permite mandarle a hablar al modulo desde cualquier vista o archivo
angular.module("MyFirstApp", []);
*/