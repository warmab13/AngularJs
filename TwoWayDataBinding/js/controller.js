var app = angular.module("MyFirstApp",[]);

	app.controller("FirstController", function($scope){
		$scope.nombre = "Alonso";
		$scope.newComment = {};
		$scope.comments= [
			{
				comment:"Good Tutorial",
				username:"CF"
			},
			{
				comment:"Good Tutorial",
				username:"another_user"
			}
		];
		$scope.addComment=function(){
			$scope.comments.push($scope.newComment);
			$scope.newComment = {};
		}
	});
