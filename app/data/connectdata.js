var mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/test', function(err) {
  if (err) { throw err; }
});

/* CLIENTS */
var clientsSchema = new mongoose.Schema({
    num_cli   : { type: String, index: { unique: true } },
    nom       : String,
    prenom    : String
});

var Clients = mongoose.model('Clients', clientsSchema);
module.exports = Clients;

var query = Clients.find(null);
query.exec(function (err, res) {
  if (err) { throw err; }
  console.log('nb client : ' + res.length);
});



/* FACTURES */
var facturesSchema = new mongoose.Schema({
    num_cli   : String, 																				/* N° Client                                */
    num_fact  : { type: String, index: { unique: true } },			/* N° Facture ou du devis                   */
    dte_fact  : Date,																						/* N° Date                                  */
    eta_fact  : String,																					/* Etat de la facture DEVIS-ENCOURS-FACTURE */
    typ_fact	: String,																					/* Type de facture FACTURE-AVOIR            */
    remise  	: Number,																					/* Remise sur la totalité de la facture     */
    articles  : [																								/* Liste des articles de la facture         */
    							{ ht     : Number, 																	/* Prix hors taxe                     */
    								qte    : Number , 																/* Quantité				                    */
    								tva    : Number , 																/* Taux de tva		                    */
    								lib    : String , 																/* Libelle de l'article               */
    								remise : Number  																	/* remise sur l'article               */
    							}
    						]

});

var Factures = mongoose.model('Factures', facturesSchema);
module.exports = Factures;


/*
{
    "num_cli": "000001",
    "num_fact" : "2017-00001",
    "eta_fact" : "DEVIS",
    "typ_fact" : "F",
    "remise"   : "0"
}
*/