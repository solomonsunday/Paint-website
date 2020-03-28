(function () {
    "use strict"
    angular.module("paintApp").controller("shopingCartCtrl", ["$scope", "$state", function ($scope, $state) {

        var vm = this;
        // vm.qty = 1;
        vm.cart = [];

        var detail = localStorage.getItem("itemInCart");
        if (detail !== undefined || detail !== null) {
            vm.paints = JSON.parse(detail);
        }

        // Get the modal
        var modal = document.getElementById("modalinfo");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var leave = document.getElementsByClassName("check-out-btn")[0];

        leave.onclick = function () {
            modal.style.display = "none";
        }

        // When the user clicks the button, open the modal 
        btn.onclick = function () {
            modal.style.display = "block";
        };
        // When the user clicks anywhere outside of the modal, close it
        // window.onclick = function(event) {
        //     if (event.target == modal) {
        //         modal.style.display = "none";
        //     }
        // }

        vm.addtocart = function () { }

    }])
})();