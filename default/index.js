import angular from 'angular'
import 'angular-ui/ui-router';

import ComponentCtrl from './Ctrl.js';

/**
 * @desc Description of main module
 * @type{angular.Module}
 */
const component = angular.module('componentName.home', [
  'ui.router'
]);

component.config(($stateProvider) => {
  /*$stateProvider
    .state('layoutDefault', {
      abstract: true,
      views: {
        layoutDefault: {

        }
      }
      url: '/layout-default',
      template: '<home></home>'
    })*/
});


component.component('home', {
  template: '<h1>Home</h1><p>Hello, {{ $ctrl.user.name }} !</p>',
  controller: ComponentCtrl
});


component.component('home2', {
  template: '<h1>Home @@@@</h1><p>Hello, {{ $ctrl.user.name }} !</p>',
  controller: ComponentCtrl
});

export default component;
