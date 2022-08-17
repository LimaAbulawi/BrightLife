import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SuppliersService } from 'src/app/protected/services/suppliers.service';

@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.scss']
})
export class AddProviderComponent implements OnInit {

  formData = new FormData();
  resMsg!: string;

  constructor(private fb: FormBuilder, private _ser: SuppliersService, private cd: ChangeDetectorRef,) { }

  ngOnInit(): void {
  }
  addSuppliersForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [ Validators.email, Validators.required]],
    password: ['', Validators.required],
    phone: ['', Validators.required],
    description: [''],
    location: [''],
    image: ['', Validators.required], //making the image required here
    cover: ['', Validators.required], //making the image required here
    done: [false]
  })

  addSuppliers() {
    console.log(this.addSuppliersForm.value);
    Object.entries(this.addSuppliersForm.value).forEach(
      ([key, value]: any[]) => {
        this.formData.append(key, value);
        console.log(key + ':' + value);
      }
    )
    
    this._ser.addSuppliers(this.formData).subscribe((res: any) => {
      this.resMsg = res.msg;
  
    });
  }

  // on file select event
  onFileChange(event: any, inputName: any) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      // just checking if it is an image, ignore if you want
      this.addSuppliersForm.patchValue({
        [inputName]: file
      });
      // need to run CD since file load runs outside of zone
      this.cd.markForCheck();
    }
  }
  deleteForm() {
    this.addSuppliersForm.controls.name.setValue('')
    this.addSuppliersForm.controls.email.setValue('')
    this.addSuppliersForm.controls.password.setValue('')
    this.addSuppliersForm.controls.phone.setValue('')
    this.addSuppliersForm.controls.image.setValue('')
    this.addSuppliersForm.controls.description.setValue('')
    this.addSuppliersForm.controls.location.setValue('')
    this.addSuppliersForm.controls.cover.setValue('')
  }
}
