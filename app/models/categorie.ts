type MyArrayType = Array<{id: number, prix: number, nom: string, description: string, derniere_maj: string, url: string}>;
export class Categorie {
   id: number;
         nom: string;
         url: string;
         produit: MyArrayType;
         constructor() { }
}
