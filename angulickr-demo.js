var app = angular.module('photoApp', []);
var api ="43590e7441b4a68b6f487ae4505811ef";
var photoset_id = "72157644175453400";
var user_id = "54754870@N06";
var templateName = "carousel.html";
var flickrJSON = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key="+api+"&photoset_id="+photoset_id+"&user_id="+user_id+"&format=json&jsoncallback=JSON_CALLBACK";
app.controller('photoCtrl', function($scope, $http) {
	$scope.intervalTime = 50000;
	$scope.user_id = user_id;
	$scope.photoset_id = photoset_id;
	$http.jsonp(flickrJSON)
	.success(function (response) {
		$scope.photo = response.photoset.photo;
		$scope.photoset = response.photoset;
	});
})
.directive('myPhoto', function() {
  return {
	restrict: 'E',
	templateUrl: templateName
  };
});
