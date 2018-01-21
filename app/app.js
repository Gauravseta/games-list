
angular.module("mainApp",['games.controllers','games.services','ui.router'])
		.config(function($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise("/gamesList");
			$stateProvider.state('gamesList',{
				url:'/gamesList',
				templateUrl:"partials/gamesList.view.html",
				controller:"gamesListController"
			});
			
			
		})
		.controller("mainController",['$scope','dataServices','$rootScope',function($scope,dataServices,$rootScope){
			/* any initialization at parent can be done here */		
		}]);

