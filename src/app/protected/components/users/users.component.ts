import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
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
  dtOptions: DataTables.Settings = {};

  constructor(private _ser: UsersService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._ser.delete(Id).subscribe((res: any) => {
          this.isdelete = res;
          window.location.reload();
        });
      }
    })
  }
  edit(Id: number) {

  }
}
