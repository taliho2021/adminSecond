import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtrapagesRoutingModule } from './extrapages-routing.module';
import { ExtrapagesComponent } from './extrapages.component';


@NgModule({
  declarations: [
    ExtrapagesComponent
  ],
  imports: [
    CommonModule,
    ExtrapagesRoutingModule
  ]
})
export class ExtrapagesModule { }
