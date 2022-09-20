import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirAmsRoutingModule } from './air-ams-routing.module';
import { AirAmsComponent } from './air-ams.component';
import { AirAmsDashboardComponent } from './air-ams-dashboard/air-ams-dashboard.component';
import { AirAmsGridComponent } from './air-ams-grid/air-ams-grid.component';

import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AirAmsComponent,
    AirAmsDashboardComponent,
    AirAmsGridComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    AirAmsRoutingModule,
  ]
})
export class AirAmsModule { }
