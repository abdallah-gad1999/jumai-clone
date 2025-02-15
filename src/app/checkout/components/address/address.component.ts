import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Iaddress } from './model/iaddress';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css',
})
export class AddressComponent {
  address!: Iaddress;
  constructor() {}

  addNewAddress() {
    console.log(this.address);
  }
}
