import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LOCALSTORAGE_TOKEN_KEY } from 'src/app/app.module';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  basicUrl = "https://api.brightlifeapp.com/public";
  headers = new HttpHeaders()
    .set("content-type", "application/json")
    .set('Authorization', 'Bearer ' + localStorage.getItem(LOCALSTORAGE_TOKEN_KEY));

  constructor(private http: HttpClient) { }

  getSuppliersList() {
    return this.http.get(this.basicUrl + "/api/v1/suppliers", { 'headers': this.headers })
  }

  getSupplier(providerId: any) {
    return this.http.get(this.basicUrl + "/api/v1/supplier/" + providerId, { 'headers': this.headers })
  }

  addSuppliers(suppliers: any) {
    return this.http.post<any>(this.basicUrl + "/api/v1/user-supplier", suppliers)
  }

  addCategory(category: any) {
    console.log(category)
    return this.http.post<any>(this.basicUrl + "/api/v1/suppliers/category", category)
  }
  addProduct(product :any){
    return this.http.post<any>(this.basicUrl + "/api/v1/products-create", product)
  }
}
