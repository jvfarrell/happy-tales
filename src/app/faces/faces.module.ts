import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenteraPeopleComponent } from './ventera-people/ventera-people.component';
import { SharedModule } from '../shared/shared.module';
import { FacesRoutingModule } from './faces-routing.module';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageListItemComponent } from './image-list-item/image-list-item.component';
import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  declarations: [
    VenteraPeopleComponent,
    ImageListComponent,
    ImageListItemComponent,
    MainpageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FacesRoutingModule,
  ]
})
export class FacesModule { }
