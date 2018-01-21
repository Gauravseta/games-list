angular.module("games.services",['ui.router'])
		.factory("dataServices",function($http){
			var obj=this;
			
			//Util to get All Games
			obj.getAllGames=function(){
				return $http({url:'http://starlord.hackerearth.com/gamesarena'});
			};
			return obj;	
		});
