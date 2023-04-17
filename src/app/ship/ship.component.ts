import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shered/api.service';

@Component({
  selector: 'app-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent {

  ships:any = [];

  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.getShips();
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

}
