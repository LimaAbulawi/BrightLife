import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  basicUrl = "https://api.brightlifeapp.com/public";
  isAddService: Boolean = false;
  isShown: Array<Boolean> = [];
  services: any = [];
  delete: any = [];

  constructor(private _ser: ServicesService, private fb: FormBuilder,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getServicesListFromService();
  }
  addServiceDiv() {
    this.isAddService = !this.isAddService;
  }
  getServicesListFromService() {
    return this._ser.getServicesList().subscribe((res: any) => {
      this.services = res.Services;
      console.log("this.services", res);

      var CstSer = res.Services[0].category;
      console.log("this.CstSer", CstSer);
    })
  }
  details(Id: number) {
    this.isShown[Id] = !this.isShown[Id];
  }

  addServicesForm = this.fb.group({
    name: ['', Validators.required],
    image: ['', Validators.required], 
    content: ['', Validators.required], 
    price: ['', Validators.required], 
    category_id: ['', Validators.required], 
    supplier_id: ['', Validators.required], 
  })

  addServices() {
    console.log(this.addServicesForm.value);
    const formData = new FormData();
    Object.entries(this.addServicesForm.value).forEach(
      ([key, value]: any[]) => {
        formData.append(key, value);
        console.log(key + ':' + value);
      }
    )
    this._ser.addServices(formData).subscribe((res: any) => {
      console.log(res);
      window.location.reload();
    });
  }
  onFileChange(event: any, inputName: any) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      // just checking if it is an image, ignore if you want
      this.addServicesForm.patchValue({
        [inputName]: file
      });
      // need to run CD since file load runs outside of zone
      this.cd.markForCheck();
    }
  }
  deleteSer(Id: number) {
  
    return this._ser.deleteSer(Id).subscribe((res: any) => {
      this.delete = res;
      console.log("delete", this.delete);
      window.location.reload();
    });
  }
}
