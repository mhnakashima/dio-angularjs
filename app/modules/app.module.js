var app = angular
  .module("app", ["ui.router"])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("/", {
        url: "/dashboard",
        templateUrl: "./app/templates/dashboard.html",
        controller: "DashboardController",
        controllerAs: "vm"
      })
      .state("dashboard", {
        url: "/dashboard",
        templateUrl: "./app/templates/dashboard.html",
        controller: "DashboardController",
        controllerAs: "vm",
      })
      .state('detail', {
          url: "/detail/:name",
          templateUrl: "./app/templates/detail.html",
          controller: "DetailController",
          controllerAs: "vm"
      })

    $urlRouterProvider.otherwise("/dashboard");
  });
