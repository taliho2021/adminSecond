import { AirAmsComponent } from './air-ams.component';
import { AirAmsDashboardComponent } from './air-ams-dashboard/air-ams-dashboard.component';
import { AirAmsDetailComponent } from './air-ams-detail/air-ams-detail.component';
import { AirAmsGridComponent } from './air-ams-grid/air-ams-grid.component';
import { AirAmsNewComponent } from './air-ams-new/air-ams-new.component';
import { AirAmsRoutingModule } from './air-ams-routing.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AirAmsComponent,
    AirAmsDashboardComponent,
    AirAmsGridComponent,
    AirAmsDetailComponent,
    AirAmsNewComponent,
  ],
  imports: [CommonModule, MatCardModule, AirAmsRoutingModule],
})
export class AirAmsModule {}
