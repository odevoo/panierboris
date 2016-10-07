var panier = [];
var sorbet = {
	img: "img/sorbet.jpg",
	libelle: "sorbet",
	categorie: "glace",
	prix: 7
};

/* Fonction appelée après le chargement du DOM */
$(function() {
	//console.log("jQuery OK");
	$("#btn-sorbet").on("click", clickBtnSorbet);
});

/* Fonction appelé lors du click sur le bouton clickBtnSorbet */
function clickBtnSorbet() {
	//alert("click");
	panier.push(sorbet);

	updatePanier();
	updatePanierDetails();
}

// Met à jour le panier
function updatePanier() {
	var txtTaillePanier = panier.length + " articles";
	$("#taille-panier").text(txtTaillePanier);

	var totalPrix = 0;
	for(var i = 0; i < panier.length; i++) {
		console.log("index passé : " + i);
		totalPrix += panier[i].prix;
	}
	$("#total-panier").text(totalPrix);
}

/* */
function updatePanierDetails() {
	/* On compte le nombre de sorbets (par exmple) */
	var nbSorbet = 0;
	for(var i = 0; i < panier.length; i++) {
		if(panier[i].libelle == "sorbet") {
			nbSorbet++;
		}
	}

	if(nbSorbet > 0) {
		/* TODO */
		//$("#table-panier").find("tr").find("td")[1].text("toto");
	}
}