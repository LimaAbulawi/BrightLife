import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderDetailsRoutingModule } from './provider-details-routing.module';
import { MangeInfoComponent } from './mange-info/mange-info.component';
import { ServicesOrProductsComponent } from './services-or-products/services-or-products.component';
import { ProvidersCategoriesComponent } from './providers-categories/providers-categories.component';
import { ProvidersOrdersComponent } from './providers-orders/providers-orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProviderFinanceComponent } from './provider-finance/provider-finance.component';



@NgModule({
  declarations: [
    MangeInfoComponent,
    ServicesOrProductsComponent,
    ProvidersCategoriesComponent,
    ProvidersOrdersComponent,
    ProviderFinanceComponent,
 
  ],
  imports: [
    CommonModule,
    ProviderDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ MangeInfoComponent,
    ServicesOrProductsComponent,
    ProvidersCategoriesComponent,
    ProvidersOrdersComponent,
    ProviderFinanceComponent
    ],
})
export class ProviderDetailsModule { }
