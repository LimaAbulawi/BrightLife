import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SuppliersService } from '../../services/suppliers.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {

  isShown: Array<Boolean> = [];
  isAddSupplier: Boolean = false;
  suppliers: any = [];

  constructor(private _ser: SuppliersService) { }

  ngOnInit(): void {
    this.getSuppliersListFromService()
  }

  addSuppliersForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    image: new FormControl(''),
    description: new FormControl(''),
    // cover: new FormControl(''),
    location: new FormControl(''),
  });

  getSuppliersListFromService() {
    return this._ser.getSuppliersList().subscribe((res: any) => {
      this.suppliers = res.suppliers;
      console.log("this.suppliers", this.suppliers);
    })
  }

  details(Id: number) {
    this.isShown[Id] = !this.isShown[Id];
  }

  addSuppliersDiv() {
    this.isAddSupplier = !this.isAddSupplier;
  }
  // this._ser.addSuppliers(this.addSuppliersForm.value).subscribe((res: any) => {
  //   console.log(res);
  // });

  addSuppliers() {
    debugger
    this._ser.addSuppliers(this.formData).subscribe((res: any) => {
      console.log(res);
    });
  }
  formData = new FormData();
  // on file select event
  onFileChange(event: any) {
    debugger
    this.formData.append('name', "testuser");
    this.formData.append('email', "testuser");
    this.formData.append('password', "testuser");
    this.formData.append('phone', "testuser");
    this.formData.append('image', event.target.files[0]);
    console.log(this.formData);
  }

  // appendFormData(){
  // if (event.target.files.length > 0) {
  //   console.log("start")
  //   const file = event.target.files[0].name;
  //   console.log(event.target.files[0]);
  //   this.addSuppliersForm.patchValue({
  //     image: file
  //   });
  //   console.log("end")
  // }
  // }
}
