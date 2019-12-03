'use strict';

angular.module('LpcWebTest2018')
    .directive('lpcLazyBackground', ['PotsService',function (PotsService) {
      //convertir limage en base64
      function arrayBufferToBase64( buffer ) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var length = bytes.byteLength;
        for (var i = 0; i<length; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }
    var lpcLazyBackgroundLink = function (scope, elem, attr) {
      elem.attr('class', attr.class + ' ' + attr.loadingClass);
        PotsService.getImgData(scope.lpcLazyBackground)
            .then(function (data, status, headers, config) {
                var imageUrl = 'data:imageUrl/png;base64,' + arrayBufferToBase64(data.data);
                var cssDef = {
                    background: 'url("'+imageUrl+'")'
                };
                cssDef["background-size"] = "cover";
                elem.css(cssDef);
            }, function (data, status, header, config) {
                console.error('Erreur du chargement de l"image !!'+data.String);
            })
    }
    return {
        restrict: 'A', scope: {lpcLazyBackground: '='}, link: lpcLazyBackgroundLink
    }

}]);