import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MangeInfoComponent } from './mange-info/mange-info.component';
import { ServicesOrProductsComponent } from './services-or-products/services-or-products.component';

const routes: Routes = [
  
  { path: "", component: MangeInfoComponent },
  { path: ":id/mangeInfo", component: MangeInfoComponent },
  { path: "services/:id", component: ServicesOrProductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderDetailsRoutingModule { }
