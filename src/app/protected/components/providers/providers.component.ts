import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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


  // gloabal file name
  addSuppliersForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    phone: ['', Validators.required],
    description: [''],
    location: [''],
    image: ['', Validators.required], //making the image required here
    cover: ['', Validators.required], //making the image required here
    done: [false]
  })

  constructor(
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private _ser: SuppliersService
  ) {}


  ngOnInit(): void {
    this.getSuppliersListFromService()
  }


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


  addSuppliers() {
    console.log(this.addSuppliersForm.value);
    
    const formData = new FormData();
      Object.entries(this.addSuppliersForm.value).forEach(
        ([key, value]: any[]) => {
          formData.append(key, value);
          console.log(key + ':' +  value);
          
        }

      )
      
      console.log(formData);
      this._ser.addSuppliers(formData).subscribe((res: any) => {
      console.log(res);
    });
  }
  
  // on file select event
  onFileChange(event:any,inputName:any) {
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
}

