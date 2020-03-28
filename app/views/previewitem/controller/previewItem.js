(function () {
    "use strict"
    angular.module("paintApp").controller("previewitemCtrl", ["$scope", "$state", function ($scope, $state) {

        var vm = this;
        vm.paint = {};
        vm.itemList = [];

        vm.paint.qty = 1;
        vm.paint.total = 0;
        var price = "";


        var detail = localStorage.getItem("detail");
        if (detail !== undefined || detail !== null) {
            vm.paint = JSON.parse(detail);
        }
        // Get the modal
        var modal = document.getElementById("modalinfo");

        // Get the button that opens the modal
        var btn = document.getElementById("myBtn");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks the button, open the modal 
        btn.onclick = function () {
            modal.style.display = "block";
            // shoppingList(vm.paint);
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        // var total = function () {

        // }


        vm.shoppingList = function (item) {
            if (item !== null || item !== undefined) {
                let tempItem = JSON.parse(localStorage.getItem("itemInCart"));
                if (tempItem) {
                    vm.itemList = tempItem;
                }
                vm.itemList.push(item);
                localStorage.setItem("itemInCart", JSON.stringify(vm.itemList));
            }
        }

    }])
})();