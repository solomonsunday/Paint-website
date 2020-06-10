(function () {
    'use strict'
    var app = angular.module('paintApp', ['ui.router', 'ui.bootstrap'])
        .config(function ($stateProvider, $urlRouterProvider) {

            var $rootscope = [];
            $stateProvider
                .state('index', { url: '/index', abstract: true, templateUrl: 'app/layout/masterpage.html', controller: 'indexCtrl as vm' })
                .state('index.home', { url: '/home', views: { 'mainContent': { templateUrl: 'app/views/home/home.html', controller: 'homeCtrl as vm' } } })
                .state('index.shop', { url: '/shop', views: { 'mainContent': { templateUrl: 'app/views/shop/shop.html', controller: 'shopCtrl as vm' } } })
                // .state('index.previewitem', { url: '/partial', views: { 'mainContent': { templateUrl: 'app/common/partial/previewitem.html', controller: 'previewitemCtrl as vm' } } })
                .state('index.previewitem', { url: '/previewitem', views: { 'mainContent': { templateUrl: 'app/views/previewitem/previewitem.html', controller: 'previewitemCtrl as vm' } } })
                .state('index.shoping-cart', { url: '/shoping-cart', views: { 'mainContent': { templateUrl: 'app/views/shoping-cart/create-shopping-cart.html', controller: 'shopingCartCtrl as vm' } } })



            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/index/home');

        })
    app.run(function ($rootScope) {
        $rootScope.cart = [];


        $rootScope.cart = $rootScope.cart || [];

    })
}())