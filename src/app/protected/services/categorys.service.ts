import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LOCALSTORAGE_TOKEN_KEY } from 'src/app/app.module';

@Injectable({
  providedIn: 'root'
})
export class CategorysService {

  basicUrl = "https://api.brightlifeapp.com/public";
  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('mimeType', 'multipart/form-data')
    .set('Authorization', 'Bearer '+localStorage.getItem(LOCALSTORAGE_TOKEN_KEY));

    // .set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTkzNDk5NDE4ODIxNTMzYzg5ODBhYmFiNDRhYTk2OWRmYTc5MWIyYjk0YTRkZGI1NGMzMDExZTY3NDgwZTA1MGUwODU1OTQzMzRlZGMxMjMiLCJpYXQiOjE2NTkzNjE4NzMuNDY1NDUxMDAyMTIwOTcxNjc5Njg3NSwibmJmIjoxNjU5MzYxODczLjQ2NTQ1MjkwOTQ2OTYwNDQ5MjE4NzUsImV4cCI6MTY5MDg5Nzg3My40NjI2NTE5NjgwMDIzMTkzMzU5Mzc1LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.GFa9JEBx2HoAM3jg5xzpvc0rkcW14ew1d05lz5MoSzaVDpRenpWRDEv18aVaHxyFKSXbNndBjlqqMYCFbj8MSMHIMajFTkug0iUrIdjL2lOdcYaR5p5avVTGOh0xvFDboZd0X5Li8xbnIQomDKZPw_cAca-1VSxIpFL2Xx_1Emh8-joNZHeeCAFKi4dMAMrtFq5I3I78wXt3RXrVAF6SE4FKNKMtjcaWtMQDdsUlcDOgl-AuRRF25PYS_HBRVhI-wn-MFuypp833utHCAemdDGj_6RhuC3a8CEQ2Dd9g5gytMNstLSgJf8gsm1-wN3HO8KFjEO116jgYAnl4JhVKi8wpg--NYXJOfbKVXzOYdVsqs91uBpOvQZrObI27wG3XirGzPEke4PnjvXWnI1BNLPWPBGaLWqrqH08iPeVCvQ5M0-E8S5Y98DSSDvd6m1acgmlYC9LJdW_rxrz-UWS2TwSmFrnIGKzn0ftu_DaT6Tmg0RkFDAYrenenLCznSzgno3Le8QaFgZ7ePdysDXDedif8qr3Swx60p38V3Zbo1GtT8iZJVLxq04zZoRbtkvS3ESWvk6sr_zMZK4CK3bqqriiUMRkDQr7noPeN7dcv3fTx3OOOY5uawB1fJlMjCURbmYcMcFTh1fDvzEnm8gHywV3f_6vkPC9nIM-_QrOKpcA');

    headers2 = new HttpHeaders()
    .set('Authorization', 'Bearer '+localStorage.getItem(LOCALSTORAGE_TOKEN_KEY));

  constructor(private http: HttpClient) { }

  getCategoryList() {
    return this.http.get(this.basicUrl + "/api/v1/categories", { 'headers': this.headers })
  }

  addCategorys(categories:any){
    return this.http.post(this.basicUrl + "/api/v1/category-create", categories , { 'headers': this.headers2 }  )
  }
  deleteCat(Id: number) {
    return this.http.get(this.basicUrl + "/api/v1/category/delete/"+Id, { 'headers': this.headers })
  }
}
