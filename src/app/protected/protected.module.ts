import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './components/categories/categories.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { ProviderDetailsComponent } from './components/providers/provider-details/provider-details.component';
import { AddProviderComponent } from './components/providers/add-provider/add-provider.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { ProviderDetailsModule } from './components/providers/provider-details/provider-details.module';
import { NgApexchartsModule } from "ng-apexcharts"; 

import { GoogleMapsModule } from '@angular/google-maps';
import { FinanceComponent } from './components/finance/finance.component';
import { FAQsComponent } from './components/faqs/faqs.component';
import { AddFaqComponent } from './components/faqs/add-faq/add-faq.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AddReviewComponent } from './components/reviews/add-review/add-review.component';
import { PromoCodeComponent } from './components/promo-code/promo-code.component';
import { AddPromoCodeComponent } from './components/promo-code/add-promo-code/add-promo-code.component';
import { SlidersComponent } from './components/home/sliders/sliders.component';
import { AddSliderComponent } from './components/home/sliders/add-slider/add-slider.component';
import { DataTablesModule } from "angular-datatables";


@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    ProvidersComponent,
    CategoriesComponent,
    MainDashboardComponent,
    ProviderDetailsComponent,
    AddProviderComponent,
    OrdersComponent,
    AddUserComponent,
    AddCategoryComponent,
    FinanceComponent,
    FAQsComponent,
    AddFaqComponent,
    ReviewsComponent,
    AddReviewComponent,
    PromoCodeComponent,
    AddPromoCodeComponent,
    SlidersComponent,
    AddSliderComponent,
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    ReactiveFormsModule,
    ProviderDetailsModule,
    GoogleMapsModule,
    NgApexchartsModule,
    DataTablesModule
  ]
})
export class ProtectedModule { }
