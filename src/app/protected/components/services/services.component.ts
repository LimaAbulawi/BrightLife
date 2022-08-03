import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  isAddService: Boolean = false;
  isShown: Array<Boolean> = [];
  services: any = [];

  constructor(private _ser:  ServicesService) { }

  ngOnInit(): void {
    this.getServicesListFromService();
  }
  addServiceDiv(){
    this.isAddService = !this.isAddService;
  }
  addServices(){
    this._ser.addServices(this.addServicesForm.value).subscribe((res: any) => {
      console.log(res);
    });
  }
  addServicesForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    category_id: new FormControl('', [Validators.required]),
    supplier_id: new FormControl('', [Validators.required]),
  });

  getServicesListFromService() {
    // return this._ser.getServicesList().subscribe((res: any) => {
    //   this.services = res.services;
    //   console.log("this.services", this.services);
    // })
  }
  details(Id: number) {
    this.isShown[Id] = !this.isShown[Id];
  }
  onFileChange(event :any){
    console.log(event)
  }
}
