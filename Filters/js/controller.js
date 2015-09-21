var app = angular.module("mainModule",[]);
	app.filter("removeHtml", function(){
		return function(text){
			return String(text).replace(/<[^>]+>/gm, '');
		}
	}).controller("FiltersController", function($scope){
		//$scope.mi_html = "<p>Hola mundo</p>";
		$scope.mi_html = {};
		$scope.mi_html.title = "Hola";
		$scope.mi_html.body = "Hola mundo";
		$scope.costo = 2;
	});
