'use strict';

var ptApp = angular.module('app', ['ngRoute']);

ptApp.controller('homePage', function(){
});


ptApp.component('navigation', {
    transclude: true, // path resides called name in the html loader in webpack.js
    templateUrl:'../templates/navigation.html',
    controller: navigationController,
    controllerAs: 'vm',
    bindings: {
    }
});

navigationController.$inject = [];

function navigationController() {

}


ptApp.component('footer', {
    transclude: true, // Import from the app level
    templateUrl:'../templates/footer.html',
    controller: FooterController,
    controllerAs: 'vm',
    bindings: {
    }
});

FooterController.$inject = [];

function FooterController() {

}
// Configure paths to point to appropriate html templates and specify ui-sref='/someRandomName'
ptApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../templates/homepage.html',
            controller: 'homePage',
            controllerAs: 'vm'
        });
});