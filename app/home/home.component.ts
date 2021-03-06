import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriemockService } from '../services/categoriemock.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
 category;
 categorie;

  constructor(private service: CategoriemockService, private router : Router) { }

  ngOnInit(): void {
      this.service.getCategories().subscribe(data=>{
        this.category = data;
     },err=>{
     	console.log("Erreur retourne : ",err);
     });

  }

  

  detailCategorie(id:number){

  	 this.service.getCategorie(id).subscribe(data=>{
        this.categorie = data;

        let nomCategorie : string = this.categorie.nom;

        switch (nomCategorie) {
    case 'FROMAGES':
        this.router.navigate(["/fromages",id]);
        break;
    case 'PAINS':
        this.router.navigate(["/pains",id]);
        break;
    case 'LEGUMES':
        this.router.navigate(["/legumes",id]);
        break;
    case 'VIANDES':
        this.router.navigate(["/viandes",id]);
        break;
    default:
        console.log("No categorie exists!");
        break;
	}
   // hedhy selon l catégorie ly besh tecliqui aaleha wyn besh t'hezek nty w roteurs 

     },err=>{
     	console.log("Erreur retourne categorie choisie : ",err);
     });

  }

  

}
