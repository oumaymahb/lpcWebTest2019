'use strict';

angular.module('LpcWebTest2018')
    .controller('PotsController', ['$scope', '$window', 'PotsService', function ($scope, $window, PotsService) {
        var stored = $window.localStorage.getItem('locale');
        $scope.locale = stored ? stored : 'fr';
        //changer la langue
        $scope.changeLocale = function (langue) {
            $scope.locale = langue;
            $window.localStorage.setItem('locale', langue);
        };
        //chargement des pots
        PotsService.get().then(function (data, status, headers, config) {
            $scope.pots = data.data;
        }, function (data, status, header, config) {
            console.error('Erreur lors du chargement des pots !!');
        });
    }]);
