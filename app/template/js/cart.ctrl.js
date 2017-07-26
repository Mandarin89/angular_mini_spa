app.controller('cartCtrl', ['$scope','$rootScope', function($scope,$rootScope){

	$scope.cartEmpty = function(){
		if(Object.keys($scope.cartArray).length > 0)
			return true;
	}
	
	$scope.removeItem = function(k){
		delete $scope.cartArray[k];
	}
	
	$scope.total = function(){
		var total = 0;
		angular.forEach($rootScope.cartArray, function(value, key){
			total = total + parseFloat(value.q)*parseFloat(value.price);
		});
		return total;
	}

}]);