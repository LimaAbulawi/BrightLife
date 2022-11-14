import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import * as shared from '../../shared/shared';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  basicUrl = environment.basicUrl;
  headers = shared.headers;
  headers2 = shared.headers2;

  constructor(private http: HttpClient) { }

  // get list
  getList() {
    return this.http.get(this.basicUrl + "/api/v1/list-order", { 'headers': this.headers })
  }
  // view
  getView(Id: number) {
    return this.http.get(this.basicUrl + "/api/v1/view-order/" + Id, { 'headers': this.headers })
  }
  // search
  getsearch(search: any) {
    return this.http.get(this.basicUrl + "/api/v1/search-order/" + search, { 'headers': this.headers })
  }
  

}
  