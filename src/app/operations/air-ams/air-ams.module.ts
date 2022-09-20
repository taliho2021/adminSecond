import { AirAmsComponent } from './air-ams.component';
import { AirAmsDashboardComponent } from './air-ams-dashboard/air-ams-dashboard.component';
<<<<<<< HEAD
import { AirAmsGridComponent } from './air-ams-grid/air-ams-grid.component';

import { MatCardModule } from '@angular/material/card';

=======
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
>>>>>>> 2d2ce42e6b89fa1b1a900126ef0d6d368c6d6ff1

@NgModule({
  declarations: [
    AirAmsComponent,
    AirAmsDashboardComponent,
<<<<<<< HEAD
    AirAmsGridComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    AirAmsRoutingModule,
  ]
=======
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
>>>>>>> 2d2ce42e6b89fa1b1a900126ef0d6d368c6d6ff1
})
export class AirAmsModule {}
