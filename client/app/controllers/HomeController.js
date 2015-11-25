'use strict';

angular.module('Destel')
  .controller('HomeController', function($scope, Slider, Destacado, Faja, Promotion) {

    $scope.title = "Destel Norte";

    // Initialization

    $scope.iteration = 3;

    $scope.sliders = [];

    $scope.destacados = [];

    $scope.fajas = [];

    loadSliders();

    loadDestacados();

    loadFajas();

    loadPromos();

    // Loaders

    function loadSliders() {
      Slider.find(function(data) {
        $scope.sliders = data;
        console.log(data);
      });
    }

    function loadDestacados() {
      Destacado.find(function(data) {
        $scope.destacados = data;
        console.log(data);
      });

      console.log($scope.destacados);
    }

    function loadFajas() {
      Faja.find(function (data) {
        $scope.fajas = data;
        console.log(data);
      });

    }

    function loadPromos() {
      Promotion.find(function (data) {
        $scope.promos = data;
        console.log(data);
      });

    }




  });
