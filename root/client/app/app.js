'use strict';

var ptApp = angular.module('app', ['ngRoute']);

ptApp.controller('homePage', function(){
});


ptApp.controller('pricingPage', function($log){
    var vm = this;

    vm.payload = {
        name: '',
        address: '',
        address2: '',
        city: '',
        zipCode: '',
        creditCardNumber: '',
        billingZip: '',
        CvvCode: '',
        promoCode: ''
    };



    vm.options = [
        {
            label: "Public Practitioner Profile",
            option: 'free'
        },
        {
            label: "Practitioner Search",
            option: 'free'
        },
        {
            label: "Blog",
            option: 'free'
        },
        {
            label: "Practitioner Referral Program",
            option: 'free'
        },
        {
            label: "Online Health Store",
            option: 'prem'
        },
        {
            label: "Social media Management",
            option: 'prem'
        },
        {
            label: "Contact Management",
            option: 'prem'
        },
        {
            label: "Email Marketing",
            option: 'prem'
        },
        {
            label: "Marketing Tools",
            option: 'prem'
        },
        {
            label: "Secure Contact Portal",
            option: 'prem'
        }
    ];

    vm.submitMe = function submitMe(){
        $log.info(vm.payload);
    };
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

ptApp.directive('script', function() {
    return {
        restrict: 'E',
        scope: false,
        link: function (scope, elem, attr) {
            if (attr.type === 'text/javascript-lazy') {
                var code = elem.text();
                var f = new Function(code);
                f();
            }
        }
    };
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
        controller: 'pricingPage',
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