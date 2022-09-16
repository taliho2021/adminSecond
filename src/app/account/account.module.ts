import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
