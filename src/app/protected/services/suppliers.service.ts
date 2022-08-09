import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  basicUrl = "https://api.brightlifeapp.com/public";
  headers = new HttpHeaders()
    .set("Content-Type", "multipart/form-data")
    .set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTExODgxMTJjNjU5ODkzM2UzNmViZTZkMTdmZGU3ZDNjYjRmNzUzNzkxOTkyZmMzNjNkM2RhNWNlN2Q5OTNlY2JmMzAyZjYyYTk2ZDM2NjUiLCJpYXQiOjE2NTk1Mzc1NjEuMzg3OTAyMDIxNDA4MDgxMDU0Njg3NSwibmJmIjoxNjU5NTM3NTYxLjM4NzkwNDg4MjQzMTAzMDI3MzQzNzUsImV4cCI6MTY5MTA3MzU2MS4zODUyMTAwMzcyMzE0NDUzMTI1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.tfkG0GQkzzakH_M_YyqxUO9Wevaxc82EiR28q6UNB-bUVL-w9mHXoyS6K0831F4LEiCJbDPHSAhZ7h1wXwo2syhJzhJrfyvpofgF5E7qz2vImPMsJbCQKoQ2FAQ4cVEv_ci40BpQv8dtWIyHmDJ7pWMhBtdYEbmJJrWu41QfKwfrOCCLsjlx1UbsWaGRe1x9fcHu3ZxTb3N20XULXdqzq-X-zLdqzj6122YzH_V6UskrTpVpLFaXJR6egIhJtO30JFFSgEim-3RS_5RCRP1b_xxiAiiZ1Fn2PpXW2rrzzGhKUuIEhiqmSCefvmwX_JEeT_dzhjI6b8NQqJzClMUpVZhJLCyGNUcA5x3dFugiM3z-wv8k00GItt5AMckqN8FnOmTPBGUHPBXpGaOhU_osqvN7DElOvclgrV8ZnA4N5Qp2I2tWX5tyGWjsHqRifIxQHA6e1Qf8PlW8NOSFaKBZSNTFUVMvTTEqOkxtAGDoP0u596-6Uft3tDTcMSwwFVwPs4tJBtKcheiKZnj_W0_GLMI066Raou3w1dUihlGl6UB0Bj6z5yUTZ5TzGZ50eq3g0I7jU6Mhlq1MEd1yRvqJx6V9qW34rJAa3RMSdP53iEAZvbe_VM9M-ql27q_chMb9Cj2-sd5oQURCquOBlU16BFku9P_KuwRJa0PT8fFjbGo');

  constructor(private http: HttpClient) { }

  getSuppliersList() {
    return this.http.get(this.basicUrl + "/api/v1/suppliers", { 'headers': this.headers })
  }

  addSuppliers(suppliers:any){
    return this.http.post<any>(this.basicUrl + "/api/v1/user-supplier", suppliers  )
  }
}
