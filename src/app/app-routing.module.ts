import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipComponent } from './ship/ship.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: "", component:ShipComponent},
  {path: "about", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
