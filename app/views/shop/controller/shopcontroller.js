(function (){

  "use strict";
  angular.module("paintApp").controller("shopCtrl", ["$scope", "$state", function($scope, $state){

    var vm = this;

    vm.paints = [
     {paintname: "Bridge Frame-10 x 20", price: "$600.00", photo:"/images/paint1.jpg"},
     {paintname: "Tree in Forest- Frame-10 x 30", price: "$700.00", photo:"/images/paint2.jpg"},
     {paintname: "Butterfly - Frame-10 x 10", price: "$500.00", photo:"/images/paint3.jpg"},
     {paintname: "Dancing Lady - Frame-20 x 20", price: "$800.00", photo:"/images/paint7.jpg"},
     {paintname: "Dancing Lady - Frame-50 x 20", price: "$400.00", photo:"/images/paint8.jpg"},
     {paintname: "Dancing Lady - Frame-40 x 20", price: "$600.00", photo:"/images/paint9.jpg"},
     {paintname: "Dancing Lady - Frame-30 x 10", price: "$1500.00", photo:"/images/paint10.jpg"},
     {paintname: "Dancing Lady - Frame-30 x 10", price: "$1200.00", photo:"/images/paint11.jpg"},
     {paintname: "Dancing Lady - Frame-10 x 20", price: "$500.00", photo:"/images/paint12.jpg"},
     {paintname: "Dancing Lady - Frame-30 x 40", price: "$300.00", photo:"/images/paint13.jpg"},
     {paintname: "Dancing Lady - Frame-50 x 20", price: "$900.00", photo:"/images/paint14.jpg"},
     {paintname: "Dancing Lady - Frame-30 x 20", price: "$1300.00", photo:"/images/paint15.jpg"},
     {paintname: "Dancing Lady - Frame-30 x 20", price: "$1100.00", photo:"/images/paint16.jpg"},
     {paintname: "Lonely Walk - Frame-30 x 20", price: "$800.00", photo:"/images/paint17.jpg"},
     {paintname: "River Demacation - Frame-30 x 20", price: "$200.00", photo:"/images/paint19.jpg"},
     {paintname: "Elephant Painting - Frame-30 x 20", price: "$200.00", photo:"/images/paint20.jpg"}


    ];


}])
})();