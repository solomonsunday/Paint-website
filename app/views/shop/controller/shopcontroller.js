(function() {

    "use strict";
    angular.module("paintApp").controller("shopCtrl", ["$filter", "$state", function($filter, $state) {

        var vm = this;

        vm.paints = [
            { id: 1, paintname: "Bridge Frame-10 x 20", price: "600.00", photo: "/images/paint1.jpg" },
            { id: 2, paintname: "Tree in Forest- Frame-10 x 30", price: "700.00", photo: "/images/paint2.jpg" },
            { id: 3, paintname: "Butterfly - Frame-10 x 10", price: "500.00", photo: "/images/paint3.jpg" },
            { id: 4, paintname: "Dancing Lady - Frame-20 x 20", price: "800.00", photo: "/images/paint7.jpg" },
            { id: 5, paintname: "Dancing Lady - Frame-50 x 20", price: "400.00", photo: "/images/paint8.jpg" },
            { id: 6, paintname: "Dancing Lady - Frame-40 x 20", price: "600.00", photo: "/images/paint9.jpg" },
            { id: 7, paintname: "Dancing Lady - Frame-30 x 10", price: "1500.00", photo: "/images/paint10.jpg" },
            { id: 8, paintname: "Dancing Lady - Frame-30 x 10", price: "1200.00", photo: "/images/paint11.jpg" },
            { id: 9, paintname: "Dancing Lady - Frame-10 x 20", price: "500.00", photo: "/images/paint12.jpg" },
            { id: 10, paintname: "Dancing Lady - Frame-30 x 40", price: "300.00", photo: "/images/paint13.jpg" },
            { id: 11, paintname: "Dancing Lady - Frame-50 x 20", price: "900.00", photo: "/images/paint14.jpg" },
            { id: 12, paintname: "Dancing Lady - Frame-30 x 20", price: "1300.00", photo: "/images/paint15.jpg" },
            { id: 13, paintname: "Dancing Lady - Frame-30 x 20", price: "1100.00", photo: "/images/paint16.jpg" },
            { id: 14, paintname: "Lonely Walk - Frame-30 x 20", price: "800.00", photo: "/images/paint17.jpg" },
            { id: 15, paintname: "River Demacation - Frame-30 x 20", price: "200.00", photo: "/images/paint19.jpg" },
            { id: 16, paintname: "Elephant Painting - Frame-30 x 20", price: "200.00", photo: "/images/paint20.jpg" }

        ];

        vm.loadMore = function() {
            vm.paints = [
                { id: 1, paintname: "Bridge Frame-10 x 20", price: "600.00", photo: "/images/paint1.jpg" },
                { id: 2, paintname: "Tree in Forest- Frame-10 x 30", price: "700.00", photo: "/images/paint2.jpg" },
                { id: 3, paintname: "Butterfly - Frame-10 x 10", price: "500.00", photo: "/images/paint3.jpg" },
                { id: 4, paintname: "Dancing Lady - Frame-20 x 20", price: "800.00", photo: "/images/paint7.jpg" },
                { id: 5, paintname: "Dancing Lady - Frame-50 x 20", price: "400.00", photo: "/images/paint8.jpg" },
                { id: 6, paintname: "Dancing Lady - Frame-40 x 20", price: "600.00", photo: "/images/paint9.jpg" },
                { id: 7, paintname: "Dancing Lady - Frame-30 x 10", price: "1500.00", photo: "/images/paint10.jpg" },
                { id: 8, paintname: "Dancing Lady - Frame-30 x 10", price: "1200.00", photo: "/images/paint11.jpg" },
            ];
        }


        vm.detail = function(item) {
            localStorage.setItem("detail", JSON.stringify(item));
            $state.go("index.previewitem")
        }


    }])
})();