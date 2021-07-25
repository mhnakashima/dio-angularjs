(function () {
  "use strict";

  app.controller("DashboardController", DashboardController);

  function DashboardController($scope, apiService) {
    var vm = $scope;
    vm.numberPerPage = 20;
    vm.indexPage = 0;
    vm.coins = [];
    vm.bufferCoins = [];
    vm.search = "";
    vm.propertyOrder;

    vm.init = function () {
      vm.getData(20, 1);
    };

    vm.applyFilter = function (value) {
      if (value && value !== "" && vm.bufferCoins) {
        vm.bufferCoins = vm.coins.filter((item) =>
          item.name.toUpperCase().includes(value.toUpperCase())
        );
      }

      if (value === "") {
        vm.bufferCoins = vm.coins;
      }
    };

    vm.orderBy = function (value) {
      vm.propertyOrder = value;
    };

    vm.loadMore = function () {
      vm.getData(vm.numberPerPage, vm.indexPage);
    };

    vm.getData = function (registersPerPage, page) {
      apiService
        .getData(registersPerPage, page)
        .then(result => {
          const data = result.data;
          vm.coins = vm.bufferCoins = [...vm.coins, ...data];
          vm.indexPage++;
          apiService.setCoinStorage(vm.coins);
        })
        .catch((er) => {
          console.log(er);
        });
    };
    vm.init();
  }
})();
