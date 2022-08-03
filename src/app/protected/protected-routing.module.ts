import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { ServicesComponent } from './components/services/services.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [

  { path: "", component: UsersComponent },
  { path: "users", component: UsersComponent },
  { path: "providers", component: ProvidersComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "services", component: ServicesComponent },  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
