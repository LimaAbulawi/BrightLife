import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const LOCALSTORAGE_TOKEN_KEY = 'login_and_register'
export function tokenGetter(){
  return localStorage.getItem(LOCALSTORAGE_TOKEN_KEY)
}

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    JwtModule.forRoot({
      config :{
        tokenGetter:tokenGetter , 
        allowedDomains : ['localhost:3000' , 'localhost:8000']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
