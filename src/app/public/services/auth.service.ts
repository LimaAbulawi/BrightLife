import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, tap } from 'rxjs';
import { LOCALSTORAGE_TOKEN_KEY } from 'src/app/app.module';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private jwtService: JwtHelperService
  ) { }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('http://api.brightlifeapp.com/public/api/v1/login', loginRequest).pipe(
      tap((res: LoginResponse) => localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.data.token),
      ),
    );
  }
  register(loginRequest: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>('http://api.brightlifeapp.com/public/api/v1/user-reg', loginRequest).pipe(
      tap((res: RegisterResponse) => localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.data.token),
      ),
    );
  }
  // getLoggedInUser() {
  //   const decodedToken = this.jwtService.decodeToken();
  //   return decodedToken.user;
  // }
}
