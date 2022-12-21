import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { ProtectedModule } from './protected/protected.module';
import { DataTablesModule } from "angular-datatables";

export const LOCALSTORAGE_TOKEN_KEY = 'login_and_register'
export function tokenGetter(){
  return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY)

}
// export const LOCALSTORAGE_USER_NAME = 'user_name'
// export function userNameGetter(){
//   return localStorage.getItem(LOCALSTORAGE_USER_NAME)
// }

@NgModule({
  declarations: [
    AppComponent,       
  ],
  imports: [
    BrowserModule,
    // ProtectedModule,
    AppRoutingModule,
    HttpClientModule ,
    GoogleMapsModule,
    DataTablesModule,
    JwtModule.forRoot({
      config :{
        tokenGetter:tokenGetter , 
        allowedDomains : ['localhost:3000' , 'localhost:8000']
      }
    }),
  ],
  exports: [GoogleMapsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
