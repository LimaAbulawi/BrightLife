import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard/auth.guard';
import { DashboardComponent } from './protected/dashboard/dashboard.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'public' },

  {
    //lazyloding the public module
    path: "public",
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
  //lazyloding the protected module
    path: "protected",
    component : DashboardComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./protected/protected.module').then(m=>m.ProtectedModule)
  },
  {
    // redirect all paths that are not matching to the "public" route/path
    path:'**',
    redirectTo:'public' ,
    pathMatch :'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
