var app = angular.module('app', ['ui.router']);


app.config(function($stateProvider, $locationProvider){
	$locationProvider.html5Mode(true).hashPrefix('/');
	$stateProvider
		.state('home', {
		url: '',
		templateUrl: 'home.html'
	})
		.state('about', {
		url: '/about',
		templateUrl: 'welcome.html'
	})
//		.otherwhise('home');
});