var app = angular.module("mainModule",[]);
app.controller("FirstController", function($scope){
		$scope.name = "Alonso";
		/*setTimeout(function(){

			//console.log($scope.name);
			//$scope.$digest(); Es no es la forma adecuada de sincronizar las cosas para eso existe apply
			$scope.$apply(function(){
				$scope.name = "Codigo de Alonsito";
			});
		}, 2000);*/

/*Asi no se hacen las cosas con Angular JS	document.querySelector("#mi_boton").addEventListener("click", function(){
	$scope.$apply(function(){
		$scope.name = "CodigoFacilito";*/
	});
