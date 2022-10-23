import { Component, Input, OnInit } from '@angular/core';
import { SuppliersService } from 'src/app/protected/services/suppliers.service';

@Component({
  selector: 'app-provider-finance',
  templateUrl: './provider-finance.component.html',
  styleUrls: ['./provider-finance.component.scss']
})

export class ProviderFinanceComponent implements OnInit {
  
  @Input() providerId = ''; // decorate the property with @Input()
  provider : any;

  constructor(private _ser: SuppliersService) { }

  ngOnInit(): void {
    this.getSupplier(this.providerId);

  }
getSupplier(providerId: any) {
    return this._ser.getSupplier(providerId).subscribe((res: any) => {
      this.provider = res.user;
    })
  }
}
