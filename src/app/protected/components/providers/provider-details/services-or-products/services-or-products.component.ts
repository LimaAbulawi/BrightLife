import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SuppliersService } from 'src/app/protected/services/suppliers.service';

@Component({
  selector: 'app-services-or-products',
  templateUrl: './services-or-products.component.html',
  styleUrls: ['./services-or-products.component.scss']
})
export class ServicesOrProductsComponent implements OnInit {

  @Input() providerId = ''; // decorate the property with @Input()
  provider: any;
  products: any;

  isSizeShown: Array<Boolean> = [];
  isextrasShown: Array<Boolean> = [];
  resMsg: any;

  extras : Array<any> =[] ;
  sizes : Array<any> =[] ;

  constructor(private _Activatedroute: ActivatedRoute, private _ser: SuppliersService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getSupplier(this.providerId);
    this.addProduct.controls.user_id.setValue(this.providerId)
  }

  getSupplier(providerId: any) {
    return this._ser.getSupplier(providerId).subscribe((res: any) => {
      // this.provider = res.user;
      this.products = res.user.products;

      // console.log(this.provider.products);
    })
  }

  sizeDetails(Id: number) {
    this.isSizeShown[Id] = !this.isSizeShown[Id];
  }

  extrasDetails(Id: number) {
    this.isextrasShown[Id] = !this.isextrasShown[Id];
  }


  addProduct = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    content: ['', Validators.required],
    user_id: ['', Validators.required],
    type: ['', Validators.required],
    extras: [this.extras],
    sizes: [this.sizes],
  })

  submit() {
    if (!this.addProduct.valid) {
      this.addProduct.markAllAsTouched();
    }
    console.log(this.addProduct.value)
    this._ser.addProduct(this.addProduct.value).subscribe((res: any) => {
      this.resMsg = res.msg;
     console.log(res)

    });
    // setTimeout(() => {
    //   console.log(this.resMsg)
    //   window.location.reload();
    // },1000)
  }

}
