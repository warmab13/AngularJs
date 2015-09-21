var app = angular.module("MyFirstApp",[]);

	app.controller("FirstController", ["$scope", "$http",function(m){
		m.nombre = "Alonso";
		m.newComment = {};
		m.comments= [
			{
				comment:"Good Tutorial",
				username:"CF"
			},
			{
				comment:"Good Tutorial",
				username:"another_user"	
			}
		];
		m.addComment=function(){
			m.comments.push(m.newComment);
			m.newComment = {};
		}
	}]);
