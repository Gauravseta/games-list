angular.module('games.controllers',['ui.router'])
	.controller('gamesListController',['$scope','dataServices','$state','$stateParams','$rootScope',function($scope,dataServices,$state,$stateParams,$rootScope){

	      $scope.headerTitle="Cogoport Games Arena";  //Text to display in top header

	     $scope.searchKeyword='';
	     $scope.sortTextBy='score';  // By default sort list in ascending order. (score-> Ascending,-score-> Descending)

	     $scope.sort=function(text){
			$scope.sortTextBy=text;
		}

	   /* Fetch all gameslist using services*/
	     dataServices.getAllGames().then(function(success){
			$scope.listsOfGames=success.data.slice(1);
			$scope.totalGamesCount=$scope.listsOfGames.length;
	     });
	
        }]);

