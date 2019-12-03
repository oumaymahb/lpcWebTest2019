'use strict';

angular.module('LpcWebTest2018')
    .service('PotsService',['$http','RESOURCES',function($http,RESOURCES){
        var getImpl = function(){
            return $http.get(RESOURCES.GET_POTS_URL);
        }
        //get image data 
        var getImage = function(url){
            return $http({
                method: 'GET',
                url: url,
                responseType: 'arraybuffer'
            });
        };

        return {
            get : getImpl,
            getImgData : getImage
        }
    }]);
