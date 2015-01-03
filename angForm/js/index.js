var myModule = angular.module('myModule', []);

myModule.controller('myController', function($scope, userRepository) {

    $scope.textChanged = function() {
    
    		var zipCode = $scope.zip;
    	
    		if (zipCode.length===5 && !isNaN(zipCode) ) {
    			userRepository.getAllUsers(zipCode).success(function(users) {
       			$scope.country = users.country;
    			$scope.state = users.state;
    			$scope.city = users.city;
        		
      
    		   });
    
   		}
   	};
    

});

myModule.factory('userRepository', function($http) {
    return {
        getAllUsers: function($zip) {
            var url = 'http://ziptasticapi.com/' + $zip;
            return $http.get(url);
        }
    };
});