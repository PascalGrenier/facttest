angular.module("LesDirectives", [])
.directive("contenuFact", function() {
	return {
		restrict: "E",
		template: '<div class="spacer"> \
                <div class="well"> \
                    <h1>N° {{fact.num_fact}}</h1> \
                    <p><label>Nom :</label> <span>{{fact.nom}}</span></p> \
                    <p><label>Liste des articles</span></p> \
                     \
                </div> \
                
            </div>',
        scope: {
        	fact: "="
        }
	}
});
