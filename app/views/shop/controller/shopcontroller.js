(function () {
    "use strict";
    angular.module("paintApp").controller("shopCtrl", [
        "$filter",
        "$state",
        function ($filter, $state) {
            var vm = this;

            vm.paints = [{ id: 1, paintname: "Bridge Frame-10 x 20", price: "80.00", photo: "/images/img05.jpeg" },
            { id: 2, paintname: "Tree in Forest- Frame-10 x 30", price: "80.00", photo: "/images/img06.jpeg" },
            { id: 3, paintname: "Butterfly - Frame-10 x 10", price: "90.00", photo: "/images/img07.jpeg" },
            { id: 4, paintname: "Dancing Lady - Frame-20 x 20", price: "150.00", photo: "/images/img08.jpeg" },
            { id: 5, paintname: "Dancing Lady - Frame-50 x 20", price: "150.00", photo: "/images/img09.jpeg" },
            { id: 6, paintname: "Dancing Lady - Frame-40 x 20", price: "150.00", photo: "/images/img10.jpeg" },
            { id: 7, paintname: "Dancing Lady - Frame-30 x 10", price: "100.00", photo: "/images/img11.jpeg" },
            { id: 8, paintname: "Dancing Lady - Frame-30 x 10", price: "90.00", photo: "/images/img12.jpeg" },
            { id: 9, paintname: "Dancing Lady - Frame-10 x 20", price: "150.00", photo: "/images/img13.jpeg" },
            { id: 10, paintname: "Dancing Lady - Frame-30 x 40", price: "130.00", photo: "/images/img14.jpeg" },
            { id: 11, paintname: "Dancing Lady - Frame-50 x 20", price: "120.00", photo: "/images/img15.jpeg" },
            { id: 12, paintname: "Dancing Lady - Frame-30 x 20", price: "130.00", photo: "/images/img16.jpeg" },
            { id: 13, paintname: "Dancing Lady - Frame-30 x 20", price: "100.00", photo: "/images/img17.jpeg" },
            { id: 14, paintname: "Lonely Walk - Frame-30 x 20", price: "80.00", photo: "/images/img18.jpeg" },
            { id: 15, paintname: "River Demacation - Frame-30 x 20", price: "120.00", photo: "/images/img19.jpeg" },
            { id: 16, paintname: "Elephant Painting - Frame-30 x 20", price: "120.00", photo: "/images/img20.jpeg" }
            ];

            vm.loadMore = function () {
                vm.paints = [{ id: 1, paintname: "Bridge Frame-10 x 20", price: "70.00", photo: "/images/img21.jpeg" },
                { id: 2, paintname: "Tree in Forest- Frame-10 x 30", price: "70.00", photo: "/images/img22.jpeg" },
                { id: 3, paintname: "Butterfly - Frame-10 x 10", price: "90.00", photo: "/images/img23.jpeg" },
                { id: 4, paintname: "Dancing Lady - Frame-20 x 20", price: "100.00", photo: "/images/img24.jpeg" },
                { id: 5, paintname: "Dancing Lady - Frame-50 x 20", price: "100.00", photo: "/images/img25.jpeg" },
                { id: 6, paintname: "Dancing Lady - Frame-40 x 20", price: "140.00", photo: "/images/img26.jpeg" },
                { id: 7, paintname: "Dancing Lady - Frame-30 x 10", price: "150.00", photo: "/images/img27.jpeg" },
                { id: 8, paintname: "Dancing Lady - Frame-30 x 10", price: "120.00", photo: "/images/img28.jpeg" },
                { id: 3, paintname: "Butterfly - Frame-10 x 10", price: "110.00", photo: "/images/img29.jpeg" },
                { id: 4, paintname: "Dancing Lady - Frame-20 x 20", price: "80.00", photo: "/images/img30.jpeg" },
                { id: 5, paintname: "Dancing Lady - Frame-50 x 20", price: "60.00", photo: "/images/img31.jpeg" },
                { id: 6, paintname: "Dancing Lady - Frame-40 x 20", price: "90.00", photo: "/images/img32.jpeg" },
                { id: 7, paintname: "Dancing Lady - Frame-30 x 10", price: "150.00", photo: "/images/img33.jpeg" },
                { id: 8, paintname: "Dancing Lady - Frame-30 x 10", price: "120.00", photo: "/images/img34.jpeg" },
                { id: 8, paintname: "Dancing Lady - Frame-30 x 10", price: "120.00", photo: "/images/img35.jpeg" },
                { id: 8, paintname: "Dancing Lady - Frame-30 x 10", price: "120.00", photo: "/images/img01.jpeg" }


                ];
            };

            vm.detail = function (item) {
                localStorage.setItem("detail", JSON.stringify(item));
                $state.go("index.previewitem");
            };


            // function shoppingList(item) {
            //     if (item !== null || item !== undefined) {
            //         let tempItem = JSON.parse(localStorage.getItem("itemInCart"));
            //         if (tempItem) {
            //             vm.itemList = tempItem;
            //         }
            //         vm.itemList.push(item);
            //         localStorage.setItem("itemInCart", JSON.stringify(vm.itemList));
            //     }
            // }
        }
    ]);
})();