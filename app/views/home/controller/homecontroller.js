(function () {

    "use strict";

    angular.module("paintApp").controller("homeCtrl", ["$scope", "$state", function ($scope, $state) {

        var vm = this;

        vm.paints = [{
                id: 1,
                paintname: "Bridge Frame-10 x 20",
                price: "$600.00",
                photo: "/images/img01.jpeg"
            },
            {
                id: 2,
                paintname: "Tree in Forest- Frame-10 x 30",
                price: "$700.00",
                photo: "/images/img02.jpeg"
            },
            {
                id: 3,
                paintname: "Butterfly - Frame-10 x 10",
                price: "$500.00",
                photo: "/images/img03.jpeg"
            },
            {
                id: 4,
                paintname: "Dancing Lady - Frame-30 x 20",
                price: "$200.00",
                photo: "/images/img04.jpeg"
            },

            //  {paintname: "Aerial Ocean", size: "11 x 23", photo:"/images/paint5.jpg"}
        ];
        //   vm.detail = function(item) {
        //     localStorage.setItem("detail", JSON.stringify(item));
        //     $state.go("index.previewitem")
        // }

        vm.detail = function (item) {
            localStorage.setItem("detail", JSON.stringify(item));
            $state.go("index.previewitem")
        }




    }])


})();