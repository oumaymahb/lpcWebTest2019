'use strict';

angular.module('LpcWebTest2018')
  .constant('RESOURCES',(function(){

    /* il y a un probleme dans l'url de l'image  !
    si on utilise l'url https://recette-flash.lepotcommuntest.fr/recruting/2019
    l'url de l'image retourné est : https://recette-flash.lepotcommuntest.fr/recruting/pot-image/14?h=306 
    hors que ce url ne marche pas donc j'ai utilisé un 2éme url "recrutement" pour récupérer les images
    */
    var BASE_URL1= 'https://recette-flash.lepotcommuntest.fr/recruting/2019';
    var BASE_URL2 = 'https://recrutement.lepotcommuntest.fr/recruting/2018';
    return {
      PROPERTIES_URL: BASE_URL1 + '/get-properties',
      GET_POTS_URL: BASE_URL2 + '/get-pots'
    }
  })());
