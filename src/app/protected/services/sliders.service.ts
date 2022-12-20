import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as shared from '../../shared/shared';

@Injectable({
  providedIn: 'root'
})

export class SlidersService {

  basicUrl = environment.basicUrl;
  headers = shared.headers;
  headers2 = shared.headers2;

  constructor(private http: HttpClient) { }

  // get list
  getList() {
    return this.http.get(this.basicUrl + "/api/v1/sliders", { 'headers': this.headers })
  }
  // view
  getView(Id: number) {
    return this.http.get(this.basicUrl + "/api/v1/slider/" + Id, { 'headers': this.headers })
  }
  // add new
  create(newFormData: any) {
    return this.http.post<any>(this.basicUrl + "/api/v1/slider-create", newFormData, { 'headers': this.headers2 })
  }
  // get delete 
  delete(Id: number){ 
    return this.http.get(this.basicUrl + "/api/v1/slider/delete/" + Id, { 'headers': this.headers })
  }
  
}
