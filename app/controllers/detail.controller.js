(function () {
  "use strict";

  app.controller("DetailController", DetailController);

  function DetailController($scope, apiService, $stateParams) {
    var vm = $scope;
    vm.coin = {};

    vm.init = function () {
      const coins = apiService.getCoinStorage() || [];
      if($stateParams?.name){
        vm.coin = coins.find(coin => coin.name === $stateParams.name);
      }
    };
    vm.init();
  }
})();
