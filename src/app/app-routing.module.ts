import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) }, 
  { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  { path: 'extrapages', loadChildren: () => import('./extrapages/extrapages.module').then(m => m.ExtrapagesModule) },
  { path: 'layouts', loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule) }, 
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },
  { path:'', redirectTo:'layouts', pathMatch:'full'},
  { path: 'operations', loadChildren: () => import('./operations/operations.module').then(m => m.OperationsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
