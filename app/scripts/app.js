'use strict';

/**
 * @ngdoc overview
 * @name stockljpApp
 * @description
 * # stockljpApp
 *
 * Main module of the application.
 */


var stockljpApp = angular.module('stockljpApp', ['ngRoute']);

// routes
stockljpApp.config(function($routeProvider) {
    $routeProvider
 
        // route for the home page
        .when('/', {
            templateUrl : 'views/main.html',
            controller  : 'MainCtrl'
        })
 
        // route for the materiel page
        .when('/materiel', {
            templateUrl : 'views/materiel.html',
            controller  : 'MaterielCtrl'
        });
 
});

// create the controller and inject Angular's $scope
stockljpApp.controller('MainCtrl', function($scope) {
    // create a message to display in our view
    $scope.info = 'Welcome to Oodles';
});
 
stockljpApp.controller('MaterielCtrl', function($scope) {
    $scope.info = 'About Oodles';
});
 