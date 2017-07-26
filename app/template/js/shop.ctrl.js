app.controller('shopCtrl', ['$scope','$rootScope','$http', function($scope,$rootScope,$http){

	$scope.changeQuantity = function(k,m,el){

		if(m == 1 && parseInt($scope.products[k]["q"])<parseInt($scope.products[k]["quantity"]))
			$scope.products[k]["q"] = parseInt($scope.products[k]["q"]) + 1; 

		if(m == 0 && parseInt($scope.products[k]["q"])>1)
			$scope.products[k]["q"] = parseInt($scope.products[k]["q"]) - 1;
	}

}]);