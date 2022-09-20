import { AirAmsComponent } from './air-ams.component';
import { AirAmsDashboardComponent } from './air-ams-dashboard/air-ams-dashboard.component';
import { AirAmsDetailComponent } from './air-ams-detail/air-ams-detail.component';
import { AirAmsGridComponent } from './air-ams-grid/air-ams-grid.component';
import { AirAmsNewComponent } from './air-ams-new/air-ams-new.component';
import { AirAmsRoutingModule } from './air-ams-routing.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AirAmsComponent,
    AirAmsDashboardComponent,
    AirAmsGridComponent,
    AirAmsDetailComponent,
    AirAmsNewComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    AirAmsRoutingModule,
    MatFormFieldModule,
    MatRadioModule,
  ],
})
export class AirAmsModule {}
