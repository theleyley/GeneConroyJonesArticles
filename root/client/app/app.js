'use strict';

var ptApp = angular.module('app', ['ngRoute']);

ptApp.controller('homePage', function(){

});


ptApp.component('header', {
    transclude: true, // path resides called name in the html loader in webpack.js
    templateUrl:'../templates/header.html',
    controller: HeaderController,
    controllerAs: 'vm',
    bindings: {
        linkName: "@"
    }
});

HeaderController.$inject = ['$log'];

function HeaderController($log) {
    var vm = this;

    $log.info(vm);
}


ptApp.component('footer', {
    transclude: true, // Import from the app level
    templateUrl:'../templates/footer.html',
    controller: FooterController,
    controllerAs: 'vm',
    bindings: {
    }
});

FooterController.$inject = ['$log'];

function FooterController($log) {
    var vm = this;

    $log.info(vm);
}
// Configure paths to point to appropriate html templates and specify ui-sref='/someRandomName'
ptApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "index.html"
        });
});