'use strict';

ptApp.component('footer', {
    transclude: true, // Import from the app level
    templateUrl:'footer/footer.html',
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