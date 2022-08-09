import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuppliersService } from 'src/app/protected/services/suppliers.service';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.scss']
})
export class ProviderDetailsComponent implements OnInit {

  isShown: Array<Boolean> = [];
  basicUrl = "https://api.brightlifeapp.com/public";
  suppliers: any = [];
  id: any;

  constructor(private _Activatedroute: ActivatedRoute, private _ser: SuppliersService,) {
    this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  ngOnInit(): void {
    this.getSuppliersListFromService()
  }

  getSuppliersListFromService() {
    this.isShown[this.id] = !this.isShown[this.id];
    return this._ser.getSuppliersList().subscribe((res: any) => {
      this.suppliers = res.suppliers;
    })
  }

}
