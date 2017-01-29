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

component.config(($stateProvider) => {
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
