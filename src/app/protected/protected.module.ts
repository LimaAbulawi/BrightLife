import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './components/categories/categories.component';
import { ServicesComponent } from './components/services/services.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    ProvidersComponent,
    CategoriesComponent,
    ServicesComponent,
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProtectedModule { }
