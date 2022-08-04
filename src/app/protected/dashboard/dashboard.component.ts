import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/public/services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isShown: Array<Boolean> = [];
  isdelete: any = [];

  constructor(private _ser: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  logOut() {
    return this._ser.logOut().subscribe((res: any) => {
      console.log("logout res" , res)
      if (res.code == 200) {
        this.router.navigate(['/public/']);
      }
      else {
        // alert("0"+res.success)
      }
    })
  }
}

