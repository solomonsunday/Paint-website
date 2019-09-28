(function() {
    "use strict"
    angular.module("paintApp").controller("shopingCartCtrl", ["$scope", "$state", function($scope, $state) {

        var vm = this;
        vm.qty = 1;
        vm.cart = [];

        var detail = localStorage.getItem("detail");
        if (detail !== undefined || detail !== null) {
            vm.paint = JSON.parse(detail);
        }

        // vm.addtocart = function() {
        //     var modalInput = document.getElementById("item");
        //     vm.tasks.push(modalInput.value);
        //     if (boardname !== null) {
        //         alert("Enter a Project Name");
        //         brake();
        //     }
        //     modalInput.value = "";
        // }

    }])
})();