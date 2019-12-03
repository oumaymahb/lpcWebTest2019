angular.module('LpcWebTest2018')
    .service('LpcTranslateService', ['$http', '$rootScope', function ($http, $rootScope) {
        var pUrl;
        setPropertiesUrlImpl = function (url) {
            pUrl = url;
        },
            loadPropertiesImpl = function () {
                if (!$rootScope.propData && pUrl) {
                    $http.get(pUrl)
                        .then(function (data, status, headers, config) {
                            $rootScope.propData = data.data;
                        }, function (data, status, header, config) {
                            console.error('Erreur lors de la traduction !!');
                        });
                }
            };

        return {
            setPropertiesUrl: setPropertiesUrlImpl,
            loadProperties: loadPropertiesImpl
        }
    }]);
