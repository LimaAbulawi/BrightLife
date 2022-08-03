import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

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

  addUsersForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    password_confirmation: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    image: new FormControl(''),
  });

  getListFromService() {
    return this._ser.getList().subscribe((res: any) => {
      this.users = res.users;
      console.log("this.users", this.users);

    })
  }
  details(Id: number) {
    this.isShown[Id] = !this.isShown[Id];
    return this._ser.getProfile(Id).
      subscribe((res: any) => {
        this.user = res;
        console.log("this.user", this.user);
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
      console.log("delete", this.isdelete);
    });
  }

  edit(Id: number) {

  }
  addUserDiv() {
    this.isAddUser = !this.isAddUser;
  }
  addUsers() {
    debugger
    this._ser.addUsers(this.addUsersForm.value).subscribe((res: any) => {
      console.log(res);
    });
  }
}
