import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddProviderComponent } from './components/providers/add-provider/add-provider.component';
import { ProviderDetailsComponent } from './components/providers/provider-details/provider-details.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { ServicesComponent } from './components/services/services.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [

  { path: "", component: MainDashboardComponent },
  { path: "dashboard", component: MainDashboardComponent },
  { path: "users", component: UsersComponent },
  { path: "providers", component: ProvidersComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "services", component: ServicesComponent },
  { path: "orders", component: OrdersComponent },
  // { path: 'providers/details/:id', component: ProviderDetailsComponent },  
  { path: "providers/add", component: AddProviderComponent },  
  { path: "users/add", component: AddUserComponent },  
  { path: "categories/add", component: AddCategoryComponent },  
   {
    //lazyloding the protected module
    path: "providers/details/:id",
    component : ProviderDetailsComponent,
    loadChildren: () => import('./components/providers/provider-details/provider-details.module').then(m=>m.ProviderDetailsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
