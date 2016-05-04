	mainApp.controller('HomeController', ['$scope','$http', function($scope,$http) {


		  	// Simple GET request example:
		  	$http({
		  		method: 'GET',
		  		url: 'users.json'
		  	}).then(function successCallback(response) {
	    		//$scopeis callback will be called asynchronously
	    		// when the response is available
	    		$scope.users=response.data;
	    		//console.log(response.data);
			}, function errorCallback(response) {
	    		// called asynchronously if an error occurs
	    		// or server returns response with an error status.
	    		alert("error!!");
			});
	  }]);