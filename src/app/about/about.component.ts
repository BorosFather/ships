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
    this.name = "tanulo";
    this.version = "early alpha 0.1";
    this.owner = "BorosFather";
    this.group = "Szoft II N";
    this.date = "2023-03-07";
    this.git = "https://github.com/BorosFather"
   
  }
}
