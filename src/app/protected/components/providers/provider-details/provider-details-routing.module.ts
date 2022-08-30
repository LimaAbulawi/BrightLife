import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountingComponent } from './accounting/accounting.component';
import { MangeInfoComponent } from './mange-info/mange-info.component';
import { ServicesOrProductsComponent } from './services-or-products/services-or-products.component';
import { ZoonsComponent } from './zoons/zoons.component';

const routes: Routes = [
  
  { path: "", component: MangeInfoComponent },
  { path: ":id/mangeInfo", component: MangeInfoComponent },
  { path: "accounting", component: AccountingComponent },
  { path: "services/:id", component: ServicesOrProductsComponent },
  { path: "zoons", component: ZoonsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderDetailsRoutingModule { }
