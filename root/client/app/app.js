'use strict';

var ptApp = angular.module('ptApp', ['ui.router']);

ptApp.config(function($stateProvider) {

    var landingState = {
        name: 'landing',
        url: '/',
        templateUrl: 'landing.html',
        controller: 'LandingCtrl as ctrl'
    };

    var aboutState = {
        name: 'about',
        url: '/about',
        templateUrl: 'home/about.html',
        controller: 'AboutCtrl as ctrl'
    };

    $stateProvider.state(landingState);
    $stateProvider.state(aboutState);
});

module.exports = {
    ptApp: ptApp
};
