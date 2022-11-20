import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LOCALSTORAGE_TOKEN_KEY } from 'src/app/app.module';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  basicUrl = "http://api.brightlifeapp.com/public";
  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', 'Bearer ' + localStorage.getItem(LOCALSTORAGE_TOKEN_KEY));

  headers2 = new HttpHeaders()
    .set('Authorization', 'Bearer ' + localStorage.getItem(LOCALSTORAGE_TOKEN_KEY));

  constructor(private http: HttpClient) { }
  getList() {
    // console.log(localStorage.getItem(LOCALSTORAGE_TOKEN_KEY));
    return this.http.get(this.basicUrl + "/api/v1/users", { 'headers': this.headers2 })
  }
  getProfile(Id: number) {
    return this.http.get(this.basicUrl + "/api/v1/user/" + Id, { 'headers': this.headers })
  }
  delete(Id: number) {
    return this.http.get(this.basicUrl + "/api/v1/user/delete/" + Id, { 'headers': this.headers })
  }
  edit(Id: number) {

  }
  addUsers(newUser: any) {
    return this.http.post<any>(this.basicUrl + "/api/v1/user-create", newUser, { 'headers': this.headers2 })
  }
}
