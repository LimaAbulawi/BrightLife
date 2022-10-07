import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuppliersService } from 'src/app/protected/services/suppliers.service';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.scss']
})
export class ProviderDetailsComponent implements OnInit {

  provider: any;
  providerName: any;
  id: any;

  isShown: Array<Boolean> = [];
  basicUrl = "https://api.brightlifeapp.com/public";
  suppliers: any = [];
  active: number = 1;

  constructor(private _Activatedroute: ActivatedRoute, private _ser: SuppliersService,) {
    this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  ngOnInit(): void {
    this.getSupplier(this.id)
  }

  getSupplier(providerId: any) {
    return this._ser.getSupplier(providerId).subscribe((res: any) => {
      this.provider = res.user;
      this.providerName = this.provider.name;
      console.log(this.provider.name)
    })
  }
}
