'use strict';

var ptApp = angular.module('app', ['ngRoute']);

ptApp.controller('homePage', function(){
});


ptApp.controller('productsPage', function(){
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

ptApp.component('ptLogo',{
    transclude: true,
    templateUrl: '../templates/pt-logo.html',
    controller: function($scope, $element){
        var vm = this;
        if(vm.type) {
            $element.append('<a class="navbar-brand brand" href="/">Practice<span class="split">Tab</span></a>');
        } else {
            $element.append('<span class="brand" style="color: RED">practice<span class="split">tab</span></span>');
        }
    },
    controllerAs: 'vm',
    bindings: {
        look: '@'
    }
});

// Configure paths to point to appropriate html templates and specify ui-sref='/someRandomName'
ptApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../templates/homepage.html',
            controller: 'homePage',
            controllerAs: 'vm'
        })
        .when('/products', {
        templateUrl: '../templates/products.html',
        controller: 'productsPage',
        controllerAs: 'vm'
    });
    $locationProvider.html5Mode(true);
});