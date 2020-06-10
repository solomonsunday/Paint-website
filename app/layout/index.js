(function () {
    "use strict"
    angular.module("paintApp").controller("indexCtrl", ["$scope", "$state", "$rootScope", function ($scope, $state, $rootScope) {

        var vm = this;
        // vm.qty = 1;
        vm.cart = [];

        // Catch the event to add
        $scope.$on('addProduct', function (event, data) {
            console.log(event);
        });


    }])
})();