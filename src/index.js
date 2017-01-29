import angular from 'angular'
import 'angular-ui/ui-router';

import './index.css!';

import layoutHtml from './index.html!text';
import headerHtml from  './partials/header.tpl.html!text';
import footerHtml from  './partials/footer.tpl.html!text';
import navigationHtml from  './partials/navigation.tpl.html!text';

import ComponentCtrl from './Ctrl.js';

/**
 * @desc Description of main module
 * @type{angular.Module}
 */
const component = angular.module('componentName.home', [
  'ui.router'
]);

component.config(($stateProvider, $locationProvider, $httpProvider, $urlRouterProvider) => {
  /**
   * @desc
   *  - "layout" is abstract state is defined to be used in parent app
   * @example Your'e child state could be "layout.{your'e app name}"
   *  - for simplicity "ui-view" could be used as common state directive
   *  - If is necessary to be added extra state placeholder,
   *    I'll prefer to create additional template with attention in bundling in order to have some kind of shared dependencies, for example both templates will use same "ui.router" .etc
   */
  $stateProvider
    .state('layout', {
      abstract: true,
      views: {
        layout: {
          template: layoutHtml
        }
      }
    })
    .state('layout.app', {
      url: '/layout-smart',
      views: {
        "content@layout": {
          template: "<div ui-view></div>"
        },
        "header@layout": {
          template: headerHtml
        },
        "footer@layout": {
          template: footerHtml
        },
        "navigation@layout": {
          template: navigationHtml
        },
        "shortcut@layout": {
          template: ''
        }
      }
    });

  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false
  });

  $httpProvider.useApplyAsync(true);

  /**
   * @desc During implementation have to be overwritten
   */
  let defaultRoute = $urlRouterProvider.otherwise('/layout-smart');

  return defaultRoute;
});

component.component('home', {
  template: layoutHtml
  //,controller: ComponentCtrl
});


component.component('home2', {
  template: '<h1>Home @@@@</h1><p>Hello, {{ $ctrl.user.name }} !</p>',
  controller: ComponentCtrl
});

export default component;
