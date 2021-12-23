import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PanierService } from '../services/panier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-achattermine',
  templateUrl: './achattermine.component.html',
  styleUrls: ['./achattermine.component.css']
})
export class AchattermineComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  cartItems = [];
  frais:number = 3.00;
  soustotal:number = 0.00;
  total:number = 0.00;
  constructor(private formBuilder: FormBuilder,private panier: PanierService, private router: Router) { 
    this.cartItems = this.panier.getItemsFromCart();
    this.cartItems.forEach(element => console.log('product price : ',element.prix));
    this.cartItems.forEach(element => this.soustotal += element.prix);
    this.total = this.soustotal + this.frais;
    console.log('Sous total : ',this.soustotal);
    console.log('cartitems : ',this.cartItems);
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.pattern("[0-9]{8}")]],
      adr: ['', Validators.required],
      cb: ['', Validators.required]
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // si formulaire invalide, on s'arrête.
      if (this.registerForm.invalid) {
          return;
      }

      const firstname = this.registerForm.get('firstName').value;
      const lastname = this.registerForm.get('lastName').value;
      const email = this.registerForm.get('email').value;
      const adresse = this.registerForm.get('adr').value;
      const telephone = this.registerForm.get('tel').value;
      // k ya3mel submit ne5ou les données w na3mel redirection lel page comfirmation
      //pour transiter les information d'un composant à un  autre  
      this.router.navigate(['/confirmation' , firstname, lastname, email, adresse, telephone]);

      // s'affiche si les valeurs du formulaires sont valides
      console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

}
