'use strict';

var ptApp = angular.module('app', []);

ptApp.controller('LoveRules', function(){
    var app = this;
    app.greeting = 'Hi my dearest and most beautiful Jarred love love!';
    app.note = 'I love you more than you know.\n\nIt\'s always going to be okay.\n\nI hope this helps out.\n\nINANU!';
    app.signoff = 'Love,\nboo';
});
