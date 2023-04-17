 /*
* File: adout.component.html
* Author: Boros Zoltán
* Copyright: 2023 Borosfather
* Group: Szoft II N
* Date: 2023-04-17
* Github: https://github.com/borosfather
* Licenc: GNU GPL
*/ 


import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  name!: string;
  version!: string;
  owner!: string;
  group!: string;
  date!: string;
  git!: String;

  ngOnInit(): void {
    this.name = "hajok";
    this.version = "early alpha 0.1";
    this.owner = "BorosFather";
    this.group = "Szoft II N";
    this.date = "2023-04-17";
    this.git = "https://github.com/BorosFather"
   
  }
}
