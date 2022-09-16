import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperationsComponent } from './operations.component';

const routes: Routes = [
  { path: '', component: OperationsComponent }, 
  { path: 'isf', loadChildren: () => import('./isf/isf.module').then(m => m.IsfModule) }, 
  { path: 'airAms', loadChildren: () => import('./air-ams/air-ams.module').then(m => m.AirAmsModule) }, 
  { path: 'seaAms', loadChildren: () => import('./sea-ams/sea-ams.module').then(m => m.SeaAmsModule) },
  { path: 'airImport', loadChildren: () => import('./air-import/air-import.module').then(m => m.AirImportModule) },
  { path: 'airExport', loadChildren: () => import('./air-export/air-export.module').then(m => m.AirExportModule) },
  { path: 'oceanExport', loadChildren: () => import('./ocean-export/ocean-export.module').then(m => m.OceanExportModule) },
  { path: 'oceanImport', loadChildren: () => import('./ocean-import/ocean-import.module').then(m => m.OceanImportModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
