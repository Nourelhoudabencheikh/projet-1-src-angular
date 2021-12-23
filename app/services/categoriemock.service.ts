import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const CATEGORIES = [
  {
    id: 1, nom: 'FROMAGES', url: 'assets/categories/FROMAGES.jpg',
    produit: [
      { id: 1, nom: "GRUYERE", prix: 2.50, description: "plaquette", derniere_maj: "2013-10-18 07:59:14", url: 'assets/produits/GRUYERE.png' },
      { id: 7, nom: "LAIT", prix: 1.20, description: "pack", derniere_maj: "2013-07-06 22:00:00", url: 'assets/produits/LAIT.png' },
      { id: 10, nom: "OEUFS", prix: 2.30, description: "6", derniere_maj: "2013-07-06 22:00:00", url: 'assets/produits/OEUFS.png' },

    ]
  },
  {
    id: 2, nom: 'PAINS', url: 'assets/categories/PAINS.jpg',
    produit: [
      { id: 2, nom: "PIZZA", prix: 6.50, description: "unite", derniere_maj: "2013-10-18 07:59:14", url: 'assets/produits/PIZZA.png' },
      { id: 11, nom: "PAIN", prix: 1.60, description: "pièce", derniere_maj: "2013-10-18 07:59:14", url: 'assets/produits/PAIN.png' },
      { id: 9, nom: "CROISSANT", prix: 1.60, description: "unite", derniere_maj: "2013-10-18 07:59:14", url: 'assets/produits/CROISSANT.png' },
      { id: 4, nom: "COOKIES", prix: 0.50, description: "piece", derniere_maj: "2013-10-18 07:59:14", url: 'assets/produits/COOKIES.png' }
    ]
  },
  {
    id: 3, nom: 'LEGUMES', url: 'assets/categories/LEGUMES.jpg',
    produit: [
      { id: 3, nom: "RADIS", prix: 4.80, description: "kg", derniere_maj: "2013-10-18 07:59:14", url: 'assets/produits/RADIS.png' },
      { id: 5, nom: "CAROTTES", prix: 1.80, description: "kg", derniere_maj: "2013-10-18 07:59:14", url: 'assets/produits/CAROTTES.png' },
      { id: 12, nom: "TOMATES", prix: 1.50, description: "unite", derniere_maj: "2013-10-18 07:59:14", url: 'assets/produits/TOMATES.png' },
      { id: 8, nom: "MAIS", prix: 3.0, description: "kg", derniere_maj: "2013-10-18 07:59:14", url: 'assets/produits/MAIS.png' }
    ]
  },
  {
    id: 4, nom: 'VIANDES', url: 'assets/categories/VIANDES.jpg',
    produit: [
      { id: 6, nom: "JAMBON", prix: 8.50, description: "kg", derniere_maj: "2013-10-18 07:59:14", url: 'assets/produits/JAMBON.png' },
      { id: 14, nom: "POULET", prix: 1.60, description: "kg", derniere_maj: "2013-10-18 07:59:14", url: 'assets/produits/POULET.png' }
    ]
  },
];

@Injectable({
  providedIn: 'root'
})
export class CategoriemockService {
  

  constructor() { }

  getCategories() { return of(CATEGORIES); } // c'est afin de retourner la liste de catégories avec tous ces produits


  getCategorie(id: number | string) {
    //c'est pour retourner une catégorie à partie de son Id
    return this.getCategories().pipe(
      // (+) before `id` turns the string into a number
      map(categories => categories.find(categorie => categorie.id === +id))
    );
  }

  getCategoriesByNom(nom: string) {
    return this.getCategories().pipe(
      map(categories => categories.filter(cat => cat.nom === nom))
    )
  }
}