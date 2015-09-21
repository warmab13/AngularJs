angular.module("mainModule",[])
	.run(function($rootScope){
	$rootScope.nombre = "CodigoFacilito"
})
.controller("FirstController", function($scope){
	$scope.nombre = "CF";
	setTimeout(function(){
		$scope.$apply(function(){
			$scope.nombre = "Alonso"
		});
	}, 1000);
})
.controller("ChildController", function($scope){

});
