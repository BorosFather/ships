 /*
* File: ship.component.ts
* Author: Boros Zoltán
* Copyright: 2023 Borosfather
* Group: Szoft II N
* Date: 2023-04-17
* Github: https://github.com/borosfather
* Licenc: GNU GPL
*/ 

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shered/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent {

  ships !: any;
  shipForm !: FormGroup;

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.getShips();
    this.shipForm = this.formBuilder.group({
      name: [''],
      length: [''],
      price: [''],
      person: [''],
      trailer: [''],
    });
  }

  getShips() {
    this.api.getShips().subscribe({
      next: (res:any) => {
        this.ships = res;
      },
      error: (err:any) => {
        console.log("Hiba! A rest api lekérése sikertelen!");
        
      }
      
    });
  }

  saveButotn() {

    let ship = {
      name: this.shipForm.value.name,
      length: this.shipForm.value.length,
      price: this.shipForm.value.price,
      person: this.shipForm.value.person,
      trailer: this.shipForm.value.trailer
    }
    this.api.addShip(ship).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err:any) => {
        console.log("Hiba! hajó felvétele sikertelen!");
      }
    });
  }

}
