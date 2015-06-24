var app = angular.module('photoApp', []);
var api =""; //put you flickr api key here
var photoset_id = ""; //your photoset id
var user_id = ""; //your user id
var template_name = "carousel.html";
var flickr_json = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key="+api+"&photoset_id="+photoset_id+"&user_id="+user_id+"&format=json&jsoncallback=JSON_CALLBACK";
app.controller('photoCtrl', function($scope, $http) {
	$scope.intervalTime = 50000; //set for carousel change break 
	$scope.user_id = user_id;
	$scope.photoset_id = photoset_id;
	$http.jsonp(flickr_json)
	.success(function (response) {
		$scope.photo = response.photoset.photo;
		$scope.photoset = response.photoset;
	});
})
.directive('myPhoto', function() {
  return {
	restrict: 'E',
	templateUrl: template_name
  };
});


