		
angular.module('Test',["ngSanitize"])
.controller('TestCtrl', function($scope,$http) {

	$scope.listmenu=[
		{value :'DEVIS'   , label:'Liste des devis' , list : []},
		{value :'ENCOURS' , label:'Factures en cours' , list : []},
		{value :'FACTURE' , label:'Historique factures' , list : []}
		
	];

	$scope.choixcourant=null;
	$scope.vueCourante='';
	$scope.msg='';
	
	$scope.selectionMenu = function(choix) {
		$scope.choixcourant=choix;
		$http.get('/api/factures/'+choix).success(function(data){ 
			$scope.typeFact=data;
			$scope.vueCourante='vueListe';
			$scope.msg='Nb '+choix+' : '+data.length;
			}); 
		}

	$scope.selectionFact = function(idFact,typeFact) {
			$scope.unFact=typeFact[idFact];
			$scope.vueCourante='vueContenuFact';
		}



});


