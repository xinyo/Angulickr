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


//this part is simple light box function, feel free to remove if you dont need it or have better solution;
//CARE because angular create DOM after jQuery can actually find it, see below to know how all clicks that happen anywhere in the body are tested to see if they originated from an element matching the selector. 
jQuery(function($) {
	
	$(document.body).on("click", ".lightbox_trigger", function() {  
		var image_href = $(this).attr("src");
		var win_height = $( window ).height();
		if($("#lightbox").length >0){
			$("#content").html('<img src="'+image_href+'"/>');

			$("#lightbox").fadeIn("slow");
			var con_height = $("#content").height();
			var diff = (win_height - con_height)/2;
			//console.log(diff);
			$("#content").css("margin-top",diff+"px");
		}
		else { //#lightbox does not exist 
			//console.log("#lightbox not exist");
		}
		//console.log($(".lightbox_trigger").length);
	});
	$('#lightbox').click (function() {
		$('#lightbox').fadeOut("fast");
	});

});
