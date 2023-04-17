import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
