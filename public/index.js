var espnApp = angular.module("espnApp", []).config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
   'self',
   "http://g.espncdn.com/tournament-challenge-bracket/2015/en/module/entry?pageType=espnfrontpage"
  ])
});

espnApp.controller("TopicsController", [ "$scope", "getData", function($scope, getData){

  getData("http://tiy-espn-info.herokuapp.com/espn/topics", function(data){

    $scope.data = data
    console.log("topics", data)

  });

}]);

espnApp.controller("CarouselController", [ "$scope", "getData", function($scope, getData){

  getData("http://tiy-espn-info.herokuapp.com/espn/carousel", function(data){

    $scope.data = data
    console.log("carousel", data)
    //console.log("carousel",data[0].big)
    var a = data[0].big.links
    console.log("big-0-links",a)

    var b = data[2].big.links
    console.log("big-2-links",b)

    var c = data[3].big.links
    console.log("big-3-links",c)

    var d = data[1].big.iframe
    console.log("iframe", d)

     _.each(a, function(Bella) {
    	if (Bella.glyph) {
    		if (Bella.glyph === "insider") {
    			Bella.glyph = "http://a.espncdn.com/icons/in.gif"
    		}
    		if (Bella.glyph === "live") {
    			Bella.glyph = "http://assets.espn.go.com/i/ls.gif"
    		}
    		if (Bella.glyph === "video") {
    			Bella.glyph = "http://assets.espn.go.com/icons/watch_headlines.png"
    		}
    	}
    });

      _.each(b, function(Bella) {
    	if (Bella.glyph) {
    		if (Bella.glyph === "insider") {
    			Bella.glyph = "http://a.espncdn.com/icons/in.gif"
    		}
    		if (Bella.glyph === "live") {
    			Bella.glyph = "http://assets.espn.go.com/i/ls.gif"
    		}
    		if (Bella.glyph === "video") {
    			Bella.glyph = "http://assets.espn.go.com/icons/watch_headlines.png"
    		}
    	}
    });

       _.each(c, function(Bella) {
    	if (Bella.glyph) {
    		if (Bella.glyph === "insider") {
    			Bella.glyph = "http://a.espncdn.com/icons/in.gif"
    		}
    		if (Bella.glyph === "live") {
    			Bella.glyph = "http://assets.espn.go.com/i/ls.gif"
    		}
    		if (Bella.glyph === "video") {
    			Bella.glyph = "http://assets.espn.go.com/icons/watch_headlines.png"
    		}
    	}
    });

     $scope.doStuff = function(){
     	a = this.$index
     	console.log(a)
     	if(a === 0){
     		console.log("zero")
     		show0()
     	}
     	if(a === 1){
     		console.log("one")
     		show1()
     	}
     	if(a === 2){
     		console.log("two")
     		show2()
     	}
     	if(a === 3){
     		console.log("three")
     		show3()
     	}
     	if(a === 4){
     		console.log("four")
     		show4()
     	}

     }

  });

}]);



espnApp.controller("HeadlinesController", [ "$scope", "getData", function($scope, getData){

  getData("http://tiy-espn-info.herokuapp.com/espn/headlines", function(data){

  	
    $scope.data = data

    console.log("headlines",data);

    _.each($scope.data, function(Bella) {
    	if (Bella.glyph) {
    		if (Bella.glyph === "live") {
    			Bella.glyph = "http://assets.espn.go.com/i/ls.gif"
    		}
    		if (Bella.glyph === "video") {
    			Bella.glyph = "http://assets.espn.go.com/icons/watch_headlines.png"
    		}
    		if (Bella.glyph === "insider") {
    			Bella.glyph = "http://a.espncdn.com/icons/in.gif"
    		}
    		
    	}
    });


  });

}]);

espnApp.factory("getData", [ "$http", function($http){

  return function(url, callback) {

    $http.get(url).success(callback).error(callback)

  }

}]);
var show0 = function(){
	$(".big-container0").show()
	$(".big-container1").hide()
	$(".big-container2").hide()
	$(".big-container3").hide()
	$(".big-container4").hide()
}
var show1 = function(){
	$(".big-container0").hide()
	$(".big-container1").show()
	$(".big-container2").hide()
	$(".big-container3").hide()
	$(".big-container4").hide()
}
var show2 = function(){
	$(".big-container0").hide()
	$(".big-container1").hide()
	$(".big-container2").show()
	$(".big-container3").hide()
	$(".big-container4").hide()
}
var show3 = function(){
	$(".big-container0").hide()
	$(".big-container1").hide()
	$(".big-container2").hide()
	$(".big-container3").show()
	$(".big-container4").hide()
}
var show4 = function(){
	$(".big-container0").hide()
	$(".big-container1").hide()
	$(".big-container2").hide()
	$(".big-container3").hide()
	$(".big-container4").show()
}

$( document ).ready(function() {
    console.log( "ready!" );
    
});