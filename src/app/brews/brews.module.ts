import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrewsRoutingModule } from './brews-routing.module';
import { BreweryComponent } from './brewery/brewery.component';
import { RulesComponent } from './rules/rules.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BreweryComponent,
    RulesComponent
  ],
  imports: [
    CommonModule,
    BrewsRoutingModule,
    SharedModule
  ]
})
export class BrewsModule { }
