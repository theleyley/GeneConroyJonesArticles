'use strict';

var ptApp = angular.module('app', []);

ptApp.controller('LoveRules', function(){
    var app = this;
    app.greeting = 'Hi my dearest and most beautiful Jarred love love!';
    app.note = 'I love you more than you know.\n\nIt\'s always going to be okay.\n\nI hope this helps out.\n\nINANU!';
    app.signoff = 'Love,\nboo';
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