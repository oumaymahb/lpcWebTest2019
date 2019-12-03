'use strict';

angular.module('LpcWebTest2018')
    .filter('lpcTranslate',['LpcTranslateService','$rootScope',function(LpcTranslateService,$rootScope){
        //charger les proprietes à partir du service
        LpcTranslateService.loadProperties();
        var filter = function(key,locale){
            return $rootScope.propData ? $rootScope.propData[locale][key] : '';
        }
        filter.$stateful = true;
        return filter;
    }]);
