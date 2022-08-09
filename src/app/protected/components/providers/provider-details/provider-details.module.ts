import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderDetailsRoutingModule } from './provider-details-routing.module';
import { MangeInfoComponent } from './mange-info/mange-info.component';
import { ServicesOrProductsComponent } from './services-or-products/services-or-products.component';
import { AccountingComponent } from './accounting/accounting.component';


@NgModule({
  declarations: [
    MangeInfoComponent,
    ServicesOrProductsComponent,
    AccountingComponent
  ],
  imports: [
    CommonModule,
    ProviderDetailsRoutingModule
  ]
})
export class ProviderDetailsModule { }
