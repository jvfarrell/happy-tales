import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VenteraPeopleComponent } from './ventera-people/ventera-people.component';

const routes: Routes = [
  { path: '', component: VenteraPeopleComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacesRoutingModule { }
