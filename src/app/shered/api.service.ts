/*
* File: api.service.ts
* Author: Boros Zoltán
* Copyright: 2023 Borosfather
* Group: Szoft II N
* Date: 2023-04-17
* Github: https://github.com/borosfather
* Licenc: GNU GPL
*/ 


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 

  host = "http://localhost:8000/";

  constructor(private http: HttpClient) {}

  getShips() {

    let endpoint = "ships";
    let url = this.host + endpoint;
  
    return this.http.get<any>(url);
  }

  addShip(ship: any) {
    let endpoint = "ships";
    let url = this.host + endpoint;
    let headerObj = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let httpOption = {
      headers: headerObj
    }
    return this.http.post(url, ship, httpOption);
  }
}
