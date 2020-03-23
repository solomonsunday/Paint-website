(function () {

    "use strict";
    angular.module("paintApp").controller("shopCtrl", ["$filter", "$state", function ($filter, $state) {

        var vm = this;

        vm.paints = [{
                id: 1,
                paintname: "Bridge Frame-10 x 20",
                price: "600.00",
                photo: "/images/img05.jpeg"
            },
            {
                id: 2,
                paintname: "Tree in Forest- Frame-10 x 30",
                price: "700.00",
                photo: "/images/img06.jpeg"
            },
            {
                id: 3,
                paintname: "Butterfly - Frame-10 x 10",
                price: "500.00",
                photo: "/images/img07.jpeg"
            },
            {
                id: 4,
                paintname: "Dancing Lady - Frame-20 x 20",
                price: "800.00",
                photo: "/images/img08.jpeg"
            },
            {
                id: 5,
                paintname: "Dancing Lady - Frame-50 x 20",
                price: "400.00",
                photo: "/images/img09.jpeg"
            },
            {
                id: 6,
                paintname: "Dancing Lady - Frame-40 x 20",
                price: "600.00",
                photo: "/images/img10.jpeg"
            },
            {
                id: 7,
                paintname: "Dancing Lady - Frame-30 x 10",
                price: "1500.00",
                photo: "/images/img11.jpeg"
            },
            {
                id: 8,
                paintname: "Dancing Lady - Frame-30 x 10",
                price: "1200.00",
                photo: "/images/img12.jpeg"
            },
            {
                id: 9,
                paintname: "Dancing Lady - Frame-10 x 20",
                price: "500.00",
                photo: "/images/img13.jpeg"
            },
            {
                id: 10,
                paintname: "Dancing Lady - Frame-30 x 40",
                price: "300.00",
                photo: "/images/img14.jpeg"
            },
            {
                id: 11,
                paintname: "Dancing Lady - Frame-50 x 20",
                price: "900.00",
                photo: "/images/img15.jpeg"
            },
            {
                id: 12,
                paintname: "Dancing Lady - Frame-30 x 20",
                price: "1300.00",
                photo: "/images/img16.jpeg"
            },
            {
                id: 13,
                paintname: "Dancing Lady - Frame-30 x 20",
                price: "1100.00",
                photo: "/images/img17.jpeg"
            },
            {
                id: 14,
                paintname: "Lonely Walk - Frame-30 x 20",
                price: "800.00",
                photo: "/images/img18.jpeg"
            },
            {
                id: 15,
                paintname: "River Demacation - Frame-30 x 20",
                price: "200.00",
                photo: "/images/img19.jpeg"
            },
            {
                id: 16,
                paintname: "Elephant Painting - Frame-30 x 20",
                price: "200.00",
                photo: "/images/img20.jpeg"
            }

        ];

        vm.loadMore = function () {
            vm.paints = [{
                    id: 1,
                    paintname: "Bridge Frame-10 x 20",
                    price: "600.00",
                    photo: "/images/img21.jpeg"
                },
                {
                    id: 2,
                    paintname: "Tree in Forest- Frame-10 x 30",
                    price: "700.00",
                    photo: "/images/img22.jpeg"
                },
                {
                    id: 3,
                    paintname: "Butterfly - Frame-10 x 10",
                    price: "500.00",
                    photo: "/images/img23.jpeg"
                },
                {
                    id: 4,
                    paintname: "Dancing Lady - Frame-20 x 20",
                    price: "800.00",
                    photo: "/images/img24.jpeg"
                },
                {
                    id: 5,
                    paintname: "Dancing Lady - Frame-50 x 20",
                    price: "400.00",
                    photo: "/images/img25.jpeg"
                },
                {
                    id: 6,
                    paintname: "Dancing Lady - Frame-40 x 20",
                    price: "600.00",
                    photo: "/images/img26.jpeg"
                },
                {
                    id: 7,
                    paintname: "Dancing Lady - Frame-30 x 10",
                    price: "1500.00",
                    photo: "/images/img27.jpeg"
                },
                {
                    id: 8,
                    paintname: "Dancing Lady - Frame-30 x 10",
                    price: "1200.00",
                    photo: "/images/img28.jpeg"
                },
            ];
        }


        vm.detail = function (item) {
            localStorage.setItem("detail", JSON.stringify(item));
            $state.go("index.previewitem")
        }


    }])
})();