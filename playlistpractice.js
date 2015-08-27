//Example for a playlist

var app = angular.module ("playlistApp", ["ng-route"])

//Page Controller
app.controller("PageController", function($scope, $routeParams){

$scope.page="Hi from page"

	$scope.$on("click:button",function(uselessStuff, i){
		$scope.page ="hello i said: " + i

		$scope.$on("clicked:song", function (whatever, song){

			$scope.$broadcast("change:song", song)


		})

		$scope.$on("get:songs:", function(){
			$scope.broadcast("get:songs")
		}

})

//Song Controller
app.controller("SongController", function($scope, $routeParams){

	var howlSong

	$scope.on("change:song", function(whatever, song){
		if(howlSong){
			howlSong.stop()

		$scope.song=song

		howlSong = new Howl ({
			url: [song.url],
		}) .play()
		$scope.isPlaying = true
		})

	$scope.playPause=function(){
		if($scope.isPlaying){

			howlSong.pause()
		}
			else{
				howlSong.play()
			}
			$scope.isPlaying = !$scope.isPlaying
	}	

	$scope.song = {}

	})

		//Goes up the chain with emit and opposite is broadcast.  Every scope is going to be
		//the child of some other scope.

	}



})

//Admin Controller
app.controller("AdminController", function($scope){
	// this will not be needed when having individual pages for each contorller$scope.admin=true
	$scope.deleteSong=function(song, index){
		$scope.songs.splice(index, 1)

	}
	$scope.addSong=function(){
		$scope.song.push
		Title: $scope.title
		Artist: $scope.artist
		URL:  $scope.url
	}
}


//List Controller
app.controller("listController", function($scope){

	//This will get the song from the array with that number.  For Ex: 5 will get song 5 
	if($routeParams.id{
		var id = parseInt(routeParams.id)
		if(id){
			$timeout(function(song){
				var song = $scope.songs[id - 1]
				$scope.clickSong(song)
		}), 20)
	})

	$scope.$on("get:songs", function(){
		$scope.$emit("song:list", $scope.songs)
	}

	$scope.$on("song:clicked", function(uselessStuff, i){
		$scope.$emit("song:lit", $scope.songs)
	}

	$scope.clickSong = function(song){
		$scope.$emit("clicked:song", song)

	}

	$scope.song= [
		{ title: "Alone At Night", 
		artist: "Psychic Rites", 
		url:""},
		{ title: "Kitty", 
		artist: "Presidents of the United States", 
		url:""},
		{ title: "Mine", 
		artist: "Got7", 
		url:"/music/"},
		{ title: "Derezzed(The Glitch Mob Remix)", artist: "Daft Punk", url:""},
		{ title: "Like This", 
		artist: "Jkwon Feat Andy Milonakis", 
		url:""},
		{ title: "", 
		artist: "", 
		url:""}

	]
})

//Routing to different pages
app.config(function($routeProvider, $locationProvider){

	$routeProvider
	.when("/song/song_id", {
		templateUrl:"templates/landing.html",
		conroller: "SongController"
	})
	.when("/admin",{
		templateUrl:"templates/admin.html",
		controller: "AdminController"
	})
	.otherwise({
	templateUrl: "templates/landing.html",
	
	})



})

