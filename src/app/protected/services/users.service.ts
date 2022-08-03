import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  basicUrl = "http://api.brightlifeapp.com/public";
  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODdkZjdhYzM0ZGNjZTBhNDM1MzBmNjA4MThhMzNiY2U4MGUwMDhiZWUzY2U2NjQyZDg0MWU2ODM1NWQ5M2VhMDM3YTg4NDBjMzRmMDFkMjMiLCJpYXQiOjE2NTk0NDM2MTcuODYwNjI0MDc0OTM1OTEzMDg1OTM3NSwibmJmIjoxNjU5NDQzNjE3Ljg2MDYyNjkzNTk1ODg2MjMwNDY4NzUsImV4cCI6MTY5MDk3OTYxNy44NTc4MjAwMzQwMjcwOTk2MDkzNzUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.Acegr_Dc3Wf3MFlCWGYbDrWi_TpnABpQdZR4zizhuC3653ZMYeJIgEuJU1GS_f_OXmr4Zw86RJQGVl1_hoGL-PHsyXOds7sEAiVikHdUtPGVTNghBN3MnPwEApU4LNPBFT-SUxJJCoE2LqOBPyvRDM913-BhxLBeJ060Kd-HJHMl0muPtNKV8qxjDFQLq9-AStcVUc2IBjEsx7tFTVPSfFH20In8MpUR_utF5BbWag9VAaOnvsxOQdVH7a8n-UCXCHHFLIvRV5wEMDDIsQnRvHRwCQLvCsSG9aRCnrIGOFqUOKcjDvrouY_fQ0PMp_Fg1ZAHaUweZVC99H5lo6p97xU6VPrkCzKnCT0MH5BEFRepyA7tYKw-FwAIQjs65S-xSHEyapZUcCAYT4hxazDtIpjNtNGgf2LNaPEygm8gSqBtGnxyYhLKlPD00ztmXtEglBdee5fjsfz4Vot-dWPSvoik2qOBf-3PdraM06h28GnRyG05ngQNJShhpC2Cvw-iGDuPcOIJtAar9w3FB3Y6ss2q_4q7pwDWEz2Zw2Cp6kk9KjCApXlo88bVhEItJut5LK-2lz6bQuOIbK0iTDaOOfGwMMFjxRvQ4VCo40KQTfHraB7JeU3UsBN9rScEovxY2cMElzaWDttNoh4m0iMLcp0DT3w3rEajotjrSK0_Duk');

  constructor(private http: HttpClient) { }
  getList() {
    return this.http.get(this.basicUrl + "/api/v1/users", { 'headers': this.headers })
  }
  getProfile(Id: number) {
    return this.http.get(this.basicUrl + "/api/v1/user/"+Id, { 'headers': this.headers })
  }
  delete(Id: number) {
    return this.http.get(this.basicUrl + "/api/v1/user/delete/"+Id, { 'headers': this.headers })
  }
  edit(Id: number) {
    
  }
  addUsers(newUser:any){
    debugger
    return this.http.post(this.basicUrl + "/api/v1/user-create", newUser , { 'headers': this.headers }  )
  }
}
