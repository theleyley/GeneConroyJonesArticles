'use strict';

var ptApp = angular.module('app', ['ngRoute']);

ptApp.controller('homePage', function(){
});


ptApp.controller('productsPage', function(){
});

ptApp.controller('companyPage', function(){
});

ptApp.controller('contactPage', function(){
});


ptApp.component('ptLogo',{
    transclude: true,
    templateUrl: '../templates/pt-logo.html',
    controller: function($scope, $element){
        var vm = this;
        if(vm.type) {
            $element.append('<span class="brand">practice<span class="split">tab</span></span>');
        } else {
            $element.append('<a class="navbar-brand brand" href="/">Practice<span class="split">Tab</span></a>');
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
        .when('/pricing', {
        templateUrl: '../templates/pricing.html',
        controller: 'productsPage',
        controllerAs: 'vm'
        })
        .when('/company', {
            templateUrl: '../templates/company.html',
            controller: 'companyPage',
            controllerAs: 'vm'
        })
        .when('/contact', {
            templateUrl: '../templates/contact.html',
            controller: 'contactPage',
            controllerAs: 'vm'
        });
    $locationProvider.html5Mode(true);
});