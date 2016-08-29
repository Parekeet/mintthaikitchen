
(function() {
  "use strict";

  angular
    .module("mint")
    .config(mintRoutes);

  mintRoutes.$inject = ["$urlRouterProvider", "$stateProvider"];

  function mintRoutes($urlRouterProvider, $stateProvider) {
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "js/home.html"
      })
      .state("about", {
        url: "/about",
        templateUrl: "js/about.html"
      })
      .state("lunch", {
        url: "/lunch",
        templateUrl: "js/lunch.html"
      })
      .state("dinner", {
        url: "/dinner",
        templateUrl: "js/dinner.html"
      })
      .state("contact", {
        url: "/visit",
        templateUrl: "js/contact.html"
      });
    $urlRouterProvider.otherwise("/");
  }
})();
