angular.module("CustomDirective", [])
.directive("myAutoComplete", function(){
	function link(scope, element, attrs){
		$(element).autocomplete({
			source: scope[attrs.myAutoComplete],
			select: function(ev,ui){
			if(ui.item){
				scope.optionSelected(ui.item.value);
			}
			},focus: function(ev,ui){
				ev.preventDefault();
				$(this).val(ui.item.label);
			}
		});
	};
	return {
		link: link
	};
})
.directive('backImg', function(){
	return function(scope, element, attrs){
		//attrs.backImg//Esto no
		attrs.$observe('backImg', function(value){
			element.css({
				"background": "url("+value+")",
				"background-size": "cover",
				"background-position": "center"
			});
		});
	}
})
.controller("AppCtrl",function($scope, $http){
	$http.get("https://api.github.com/users/warmab13/repos")
	.success(function(data){
		$scope.repos = data;
		for(var i = data.length - 1; i>=0; i--){
			var repo = data[i];
			$scope.repos.push(repo.name);
		}
	})
	.error(function(err){
		console.log(err);
	});

	$scope.optionSelected = function(data){
		$scope.$apply(function(){
			$scope.main_repo = data;
		});
	}
});
