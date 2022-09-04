import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './components/categories/categories.component';
import { ServicesComponent } from './components/services/services.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { ProviderDetailsComponent } from './components/providers/provider-details/provider-details.component';
import { AddProviderComponent } from './components/providers/add-provider/add-provider.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { ProviderDetailsModule } from './components/providers/provider-details/provider-details.module';
import { NgApexchartsModule } from "ng-apexcharts"; 

import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    ProvidersComponent,
    CategoriesComponent,
    ServicesComponent,
    MainDashboardComponent,
    ProviderDetailsComponent,
    AddProviderComponent,
    OrdersComponent,
    AddUserComponent,
    AddCategoryComponent,
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    ReactiveFormsModule,
    ProviderDetailsModule,
    GoogleMapsModule,
    NgApexchartsModule
  ]
})
export class ProtectedModule { }
