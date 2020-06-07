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
            { id: 4, paintname: "Flower Flask - Frame-20 x 20", price: "150.00", photo: "/images/img08.jpeg" },
            { id: 5, paintname: "G - Frame-50 x 20", price: "150.00", photo: "/images/img09.jpeg" },
            { id: 6, paintname: "W - Frame-40 x 20", price: "150.00", photo: "/images/img10.jpeg" },
            { id: 7, paintname: "F - Frame-30 x 10", price: "100.00", photo: "/images/img11.jpeg" },
            { id: 8, paintname: "H - Frame-30 x 10", price: "90.00", photo: "/images/img12.jpeg" },
            { id: 9, paintname: "Another Paint - Frame-10 x 20", price: "150.00", photo: "/images/img13.jpeg" },
            { id: 10, paintname: "B - Frame-30 x 40", price: "130.00", photo: "/images/img14.jpeg" },
            { id: 11, paintname: "A - Frame-50 x 20", price: "120.00", photo: "/images/img15.jpeg" },
            { id: 12, paintname: "C - Frame-30 x 20", price: "130.00", photo: "/images/img16.jpeg" },
            { id: 13, paintname: "S - Frame-30 x 20", price: "100.00", photo: "/images/img17.jpeg" },
            { id: 14, paintname: "K - Frame-30 x 20", price: "80.00", photo: "/images/img18.jpeg" },
            { id: 15, paintname: "R - Frame-30 x 20", price: "120.00", photo: "/images/img19.jpeg" },
            { id: 16, paintname: "Elephant Painting - Frame-30 x 20", price: "120.00", photo: "/images/img20.jpeg" }
            ];

            vm.loadMore = function () {
                vm.paints = [{ id: 17, paintname: "Bridge Frame-10 x 20", price: "70.00", photo: "/images/img21.jpeg" },
                { id: 18, paintname: "Tree in Bush- Frame-10 x 30", price: "70.00", photo: "/images/img22.jpeg" },
                { id: 19, paintname: "Butterfly Flies - Frame-10 x 10", price: "90.00", photo: "/images/img23.jpeg" },
                { id: 20, paintname: "Ducking - Frame-20 x 20", price: "100.00", photo: "/images/img24.jpeg" },
                { id: 21, paintname: "Q - Frame-50 x 20", price: "100.00", photo: "/images/img25.jpeg" },
                { id: 22, paintname: "L - Frame-40 x 20", price: "140.00", photo: "/images/img26.jpeg" },
                { id: 23, paintname: "Z - Frame-30 x 10", price: "150.00", photo: "/images/img27.jpeg" },
                { id: 24, paintname: "Different - Frame-30 x 10", price: "120.00", photo: "/images/img28.jpeg" },
                { id: 25, paintname: "Ignite - Frame-10 x 10", price: "110.00", photo: "/images/img29.jpeg" },
                { id: 26, paintname: "Nature - Frame-20 x 20", price: "80.00", photo: "/images/img30.jpeg" },
                { id: 27, paintname: "Peace - Frame-50 x 20", price: "60.00", photo: "/images/img31.jpeg" },
                { id: 28, paintname: "Water - Frame-40 x 20", price: "90.00", photo: "/images/img32.jpeg" },
                { id: 29, paintname: "Dancing - Frame-30 x 10", price: "150.00", photo: "/images/img33.jpeg" },
                { id: 30, paintname: "Sampling - Frame-30 x 10", price: "120.00", photo: "/images/img34.jpeg" },
                { id: 31, paintname: "Mottot - Frame-30 x 10", price: "120.00", photo: "/images/img35.jpeg" },
                { id: 32, paintname: "Checking - Frame-30 x 10", price: "120.00", photo: "/images/img01.jpeg" }


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