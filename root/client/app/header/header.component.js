'use strict';

ptApp.component('header', {
    transclude: true, // path resides called name in the html loader in webpack.js
    templateUrl:'header/header.html',
    controller: HeaderController,
    controllerAs: 'vm',
    bindings: {
    }
});

HeaderController.$inject = ['$log'];

function HeaderController($log) {
    var vm = this;

    $log.info(vm);
}