var crudApp = angular.module('serviceApp', ['gnRoute']);

crudApp.config(function($routeProvider){
	$routeProvider
	.when('register',{
		templteUrl: 'view/register.html'
	})
	.when('login',{
		templteUrl: 'view/login.html'
	})
	.when('/',{
		templteUrl: 'view/login.html'
	})
})