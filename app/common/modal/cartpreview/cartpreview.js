(function() {

    "use strict"
    angular.module("paintApp").controller("cartpreviewCtrl", ["$scope", "$uibModal", "$state", "$uibModalInstance", function($scope, $uibModal, $state, $uibModalInstance) {

        var vm = this;
        vm.tasks = [];









    }])



    // Creating Entries
    let panitItem = 'Item 1';
    localStorage.setItem(panitItem, 'value')


    // Reading Entries
    val myPaintItem = localStorage.getItem(panitItem);

    // update Entries
    localStorage.setItem.setItem(panitItem, 'New value');

    // Delete Entries

    localStorage.removeItem(panitItem);

    // clearing Everything
    localStorage.clear();




})();