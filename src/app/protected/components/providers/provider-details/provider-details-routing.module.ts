import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountingComponent } from './accounting/accounting.component';
import { MangeInfoComponent } from './mange-info/mange-info.component';
import { ServicesOrProductsComponent } from './services-or-products/services-or-products.component';

const routes: Routes = [
  
  { path: "", component: MangeInfoComponent },
  { path: "mangeInfo", component: MangeInfoComponent },
  { path: "accounting", component: AccountingComponent },
  { path: "services", component: ServicesOrProductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderDetailsRoutingModule { }
