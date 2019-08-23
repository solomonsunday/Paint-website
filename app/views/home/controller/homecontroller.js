(function (){

    "use strict";
    angular.module("taskApp").controller("homeCtrl", ["$scope", "$state", function($scope, $state){

      var vm = this;

      vm.paints = [
       {paintname: "Bridge Frame-10 x 20", price: "$600.00", photo:"/images/paint1.jpg"},
       {paintname: "Tree in Forest- Frame-10 x 30", price: "$700.00", photo:"/images/paint2.jpg"},
       {paintname: "Butterfly - Frame-10 x 10", price: "$500.00", photo:"/images/paint3.jpg"},
       {paintname: "Dancing Lady - Frame-30 x 20", price: "$200.00", photo:"/images/paint7.jpg"}
      //  {paintname: "Aerial Ocean", size: "11 x 23", photo:"/images/paint5.jpg"}
      ];


 }])
})();