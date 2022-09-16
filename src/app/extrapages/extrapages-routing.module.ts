import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExtrapagesComponent } from './extrapages.component';

const routes: Routes = [{ path: '', component: ExtrapagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtrapagesRoutingModule { }
