import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/protected/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  formData = new FormData();
  resMsg!: string;
  placeholder: any | undefined;
  addUsersForm = this.fb.group({
    name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.compose([Validators.email, Validators.required])],
    password: ['', Validators.required],
    phone: ['', Validators.required],
    image: ['', Validators.required],
  })
  openModel: boolean = false;

  constructor(private _ser: UsersService, private cd: ChangeDetectorRef, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addUsers() {

    console.log(this.addUsersForm.value);
    if (!this.addUsersForm.valid) {
      this.addUsersForm.markAllAsTouched();
    }
    Object.entries(this.addUsersForm.value).forEach(
      ([key, value]: any[]) => {
        this.formData.append(key, value);
      }
    )
    this._ser.addUsers(this.formData).subscribe((res: any) => {
      this.resMsg = res.msg;
      if (res.code == 200) {
        this.openModel = true;
        this.deleteForm();
      }
      console.log("res", res);
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
  deleteForm() {
    this.addUsersForm.reset();
  }

  // space: any;
  // keyPress(event: KeyboardEvent) {
  //   // const pattern = /[0-9]/;
  //   if (event.charCode == 32) {
  //     event.preventDefault();
  //     // this.space = event.charCode;
  //     // const inputChar = String.fromCharCode(this.space);
  //     // if (!pattern.test(inputChar)) {
  //     //   // invalid character, prevent input
  //     //   event.preventDefault();
  //     // }
  //   }
  // }


  onInput(event: any) {
    this.placeholder = this.destroyMask(event.target.value);
    event.target.value = this.createMask(this.placeholder);
  }
  destroyMask(event: any) {
    return event.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  }
  createMask(event: any) {
    return event.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  }
}
