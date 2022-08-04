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

  constructor(private _ser: UsersService, private cd: ChangeDetectorRef, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getListFromService();
  }


  addUsersForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    phone: ['', Validators.required],
    image: ['', Validators.required], 
    last_name : ['', Validators.required],
  })

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
    console.log(this.addUsersForm.value);
    const formData = new FormData();
    Object.entries(this.addUsersForm.value).forEach(
      ([key, value]: any[]) => {
        formData.append(key, value);
        console.log(key + ':' + value);
      }
    )
    this._ser.addUsers(formData).subscribe((res: any) => {
      console.log("res",res);
    });
  }

  onFileChange(event: any, inputName: any) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      // just checking if it is an image, ignore if you want
      this.addUsersForm.patchValue({
        [inputName]: file
      });
      // need to run CD since file load runs outside of zone
      this.cd.markForCheck();
    }
  }
}
