import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PanierComponent } from './panier/panier.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProduitfromageComponent } from './produits/produitfromage/produitfromage.component';
import { ProduitpainComponent } from './produits/produitpain/produitpain.component';
import { ProduitlegumeComponent } from './produits/produitlegume/produitlegume.component';
import { ProduitviandeComponent } from './produits/produitviande/produitviande.component';
import { ProduitresultComponent } from './shared/produitresult/produitresult.component';
import { registerLocaleData } from '@angular/common';
import localetn from '@angular/common/locales/ar-TN';
import { AchattermineComponent } from './achattermine/achattermine.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// the second parameter 'fr-FR' is optional
registerLocaleData(localetn, 'ar-tn');



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanierComponent,
    PagenotfoundComponent,
    ProduitfromageComponent,
    ProduitpainComponent,
    ProduitlegumeComponent,
    ProduitviandeComponent,
    ProduitresultComponent,
    AchattermineComponent,
    ConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [    { provide: LOCALE_ID, useValue: 'ar-tn'}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
