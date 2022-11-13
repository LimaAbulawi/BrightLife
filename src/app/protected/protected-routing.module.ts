import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AddFaqComponent } from './components/faqs/add-faq/add-faq.component';
import { FAQsComponent } from './components/faqs/faqs.component';
import { FinanceComponent } from './components/finance/finance.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddPromoCodeComponent } from './components/promo-code/add-promo-code/add-promo-code.component';
import { PromoCodeComponent } from './components/promo-code/promo-code.component';
import { AddProviderComponent } from './components/providers/add-provider/add-provider.component';
import { ProviderDetailsComponent } from './components/providers/provider-details/provider-details.component';
import { ProvidersComponent } from './components/providers/providers.component';
import { AddReviewComponent } from './components/reviews/add-review/add-review.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { UsersComponent } from './components/users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [

  { path: "", component: MainDashboardComponent },
  { path: "dashboard", component: MainDashboardComponent },
  { path: "users", component: UsersComponent },
  { path: "users/add", component: AddUserComponent },  
  { path: "providers", component: ProvidersComponent },
  { path: "providers/add", component: AddProviderComponent },  
  // { path: 'providers/details/:id', component: ProviderDetailsComponent },  
  { path: "categories", component: CategoriesComponent },
  { path: "categories/add", component: AddCategoryComponent },  
  { path: "orders", component: OrdersComponent },
  { path: "finance", component: FinanceComponent },
  { path: "FAQs", component: FAQsComponent },
  { path: "FAQs/add", component: AddFaqComponent },  
  { path: "reviews", component: ReviewsComponent },
  { path: "reviews/add-review", component: AddReviewComponent },
  { path: "promocode", component: PromoCodeComponent },
  { path: "promocode/add-promocode", component: AddPromoCodeComponent },

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
