

(function() {
    'use strict'
    var app = angular.module('paintApp', ['ui.router', 'ui.bootstrap'])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('index', { url: '/index', abstract: true, templateUrl: 'app/layout/masterpage.html' })
                .state('index.home', { url: '/home', views: { 'mainContent': { templateUrl: 'app/views/home/home.html', controller: 'homeCtrl as vm' } } })
                .state('index.shop', { url: '/shop', views: { 'mainContent': { templateUrl: 'app/views/shop/shop.html',controller: 'shopCtrl as vm' } } })
                .state('index.previewitem', { url: '/partial', views: { 'mainContent': { templateUrl: 'app/common/partial/previewitem.html', controller: 'previewitemCtrl as vm' } } })
              


            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/index/home');

        })


}())