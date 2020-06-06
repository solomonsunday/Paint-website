(function () {
    "use strict"
    angular.module("paintApp").controller("shopingCartCtrl", ["$scope", "$state", function ($scope, $state) {

        var vm = this;
        // vm.qty = 1;
        vm.cart = [];
        vm.total = 0;

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

        vm.addtocart = function () { };


        $scope.remove = function (paint) {
            var index = $scope.vm.paints.indexOf(paint);
            $scope.vm.paints.splice(index, 1);
            localStorage.setItem('itemInCart', JSON.stringify($scope.vm.paints));
        }

        // Calculate the price of the total items in cart.
        $scope.getTotal = function () {
            var total = 0;
            for (var i = 0; i < vm.cart.itemInCart.length; i++) {
                var paint = vm.cart.itemInCart[i];
                total += (paint.price * paint.qty);
            }
            return total;
        }

        $scope.total = function () {
            var total = 0;
            angular.forEach($scope.items, function (item) {
                total += item.price * item.qty;
            })

            return total;
        }



    }])
})();