import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PanierService } from 'src/app/services/panier.service';
import { Categorie } from '../../models/categorie';

@Component({
  selector: 'app-produitresult',
  templateUrl: './produitresult.component.html',
  styleUrls: ['./produitresult.component.css']
})
export class ProduitresultComponent implements OnInit {
	fromage = 'FROMAGES';
	pain = 'PAINS';
	legume = 'LEGUMES';
	viande = 'VIANDES';
	categorieName:string;

  constructor(private panier: PanierService) { }

  @Input()
  public result: Categorie;
  @Output()
  sendRequestData = new EventEmitter(); // Emetteur d'évènement

  ngOnInit(): void {
  	// console.log("categorie selectionne du cote parent : ",this.result);
  }
// catName hya ly besh tnedy lel les catégorie ly mdéclaryet'ha mel fouk li houma bydt'hom mdéclarin mel fouk bel kool w
//asslan mdéclaryin fel .html vel data-cat
  getCategoryName(catName:string) {
  	console.log("categorie nom cote fils : "+catName);
  	this.sendRequestData.emit(catName);
  }

  sendEvent(){
  	this.sendRequestData.emit(this.categorieName);
  }

  /*handelAddToCart = (product) => {
    this.panier.addItemsToCart(product);
  }*/
  handelAddToCart = (product) => {
    this.panier.addItemsToCart(product);
  }

}
