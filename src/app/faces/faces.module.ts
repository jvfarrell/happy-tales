import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenteraPeopleComponent } from './ventera-people/ventera-people.component';
import { SharedModule } from '../shared/shared.module';
import { FacesRoutingModule } from './faces-routing.module';

@NgModule({
  declarations: [
    VenteraPeopleComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FacesRoutingModule,
  ]
})
export class FacesModule { }
