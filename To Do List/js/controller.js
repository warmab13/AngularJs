angular.module("ToDoList", ["LocalStorageModule"])
	.controller("ToDoController", function($scope, localStorageService){
	if(localStorageService.get("angular.todoList")){
		$scope.todo=localStorageService.get("angular.todoList");	
	}
	else{
		$scope.todo=[];
	}
	//$scope.todo=[];
	/*{
		description: "Terminar el curso de Angular",
		date: "3-03-15 2:00pm"
		}
	*/
	/*
	Revisa si hay algun cambio en el control y permiete observar el comportamiento, cada vez se actualiza la lista hay que actualizarlo, en este caso este watch no funciona para arreglos.
	$scope.$watch(function(){
		return $scope.newActv;
	}, function(newValue, oldValue){
		console.log(newValue);
		console.log(oldValue);
		
	});*/
	/*Este watch funciona para verificar el estado de la coleccion y siempre esta esperando a que la lista sufra un cambio.*/
	$scope.$watchCollection('todo', function(newValue, oldValue){
	localStorageService.set("angular.todoList",$scope.todo);
	});
	
	$scope.addActv = function(){
		$scope.todo.push($scope.newActv);
		$scope.newActv = {};
	}
	$scope.clean = function(){
		$scope.todo = [];
	}
});