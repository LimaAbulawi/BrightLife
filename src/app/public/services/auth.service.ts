import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, tap } from 'rxjs';
import { LOCALSTORAGE_TOKEN_KEY } from 'src/app/app.module';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  basicUrl = "http://api.brightlifeapp.com/public";
  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', 'Bearer ' + localStorage.getItem(LOCALSTORAGE_TOKEN_KEY));

  constructor(
    private http: HttpClient,
    private jwtService: JwtHelperService
  ) { }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.basicUrl + '/api/v1/login', loginRequest).pipe(
      tap((res: LoginResponse) => localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.data.token),
      ),
      tap((res: LoginResponse) => localStorage.setItem("userName", res.data.user.name)
      ),
      tap((res: LoginResponse) => localStorage.setItem("userImage", res.data.user.image)
      ),
      tap((res: LoginResponse) => localStorage.setItem("userEmail", res.data.user.email)
      ),
    );
  }

  register(loginRequest: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.basicUrl + '/api/v1/user-reg', loginRequest).pipe(
      tap((res: RegisterResponse) => localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.data.token),
      ),
    );
  }
 
  logout() {
   debugger
    return this.http.get(this.basicUrl + "/api/v1/logout", { 'headers': this.headers })
  }
}
