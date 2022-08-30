import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/protected/services/users.service';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss']
})
export class AccountingComponent implements OnInit {

  id: any;
  Id: any;
  users: any = [];
  basicUrl = "https://api.brightlifeapp.com/public";

  constructor(private router: Router, private _ser: UsersService) {

    this.getListFromService();

    // get id from url 
    let URL = this.router.url;
    let URL_AS_LIST = URL.split('details/');
    this.Id = URL_AS_LIST[1];         // 8/accounting
    let Split2 = this.Id.split('/'); // array ['8', 'accounting']
    this.id = Split2[0];
  }

  ngOnInit(): void {
  }
  getListFromService() {
    return this._ser.getList().subscribe((res: any) => {
      this.users = res.users;
      // console.log("this.users", this.users);

    })
  }


}
