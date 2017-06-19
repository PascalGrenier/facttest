var mongoose = require('mongoose');

require('./data/connectdata.js');

var ficheInfo=[ 
	{	id:1, num_fact:"2017-00015", nom:"Durant Jean" , dte_fact:"02/06/2017" ,ht:100,remise:0 ,tva:20,ttc:120	},
	{	id:2,	num_fact:"2017-00018", nom:"Coic Yann"   , dte_fact:"22/05/2017" ,ht:100,remise:0 ,tva:20,ttc:120 },
	{	id:3,	num_fact:"2017-00017", nom:"Legal Yvon"  , dte_fact:"13/06/2017",ht:100,remise:0 ,tva:20,ttc:120}
	];


exports.getFacture = function(req, res) {
		
		console.log("recFact = " + req.params.recFact);
	  res.send(ficheInfo); 
}		
