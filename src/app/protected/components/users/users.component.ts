import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  basicUrl = "https://api.brightlifeapp.com/public";
  isShown: Array<Boolean> = [];
  isOrderShown: Array<Boolean> = [];
  isAddressesShown: Array<Boolean> = [];
  users: any = [];
  user: any = [];
  isdelete: any = [];
  isAddUser: boolean = false;

  constructor(private _ser: UsersService) { }

  ngOnInit(): void {
    this.getListFromService();
  }

  getListFromService() {
    return this._ser.getList().subscribe((res: any) => {
      this.users = res.users;
      // console.log("this.users", this.users);

    })
  }

  details(Id: number) {
    this.isShown[Id] = !this.isShown[Id];
    return this._ser.getProfile(Id).
      subscribe((res: any) => {
        this.user = res;
        // console.log("this.user", this.user);
      })
  }

  OrdersDetails(Id: number) {
    this.isOrderShown[Id] = !this.isOrderShown[Id];
  }

  AddressesDetails(Id: number) {
    this.isAddressesShown[Id] = !this.isAddressesShown[Id];
  }
  
  delete(Id: number) {
    return this._ser.delete(Id).subscribe((res: any) => {
      this.isdelete = res;
      window.location.reload();
      // console.log("delete", this.isdelete);
    });
  }

  edit(Id: number) {

  }
}
