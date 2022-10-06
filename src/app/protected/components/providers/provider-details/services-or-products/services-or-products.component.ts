import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuppliersService } from 'src/app/protected/services/suppliers.service';

@Component({
  selector: 'app-services-or-products',
  templateUrl: './services-or-products.component.html',
  styleUrls: ['./services-or-products.component.scss']
})
export class ServicesOrProductsComponent implements OnInit {

  id: any;
  @Input() providerId = ''; // decorate the property with @Input()
  provider: any;
  products: any;

  isSizeShown: Array<Boolean> = [];


  constructor(private _Activatedroute: ActivatedRoute, private _ser: SuppliersService,) {
    this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }
  ngOnInit(): void {
    this.getSupplier(this.providerId);
  }
  getSupplier(providerId: any) {
    return this._ser.getSupplier(providerId).subscribe((res: any) => {
      this.provider = res.user;
      this.products = res.user.products;

      console.log(this.provider.products);
    })  
  }
  sizeDetails(Id: number) {
    this.isSizeShown[Id] = !this.isSizeShown[Id];
  }
}
