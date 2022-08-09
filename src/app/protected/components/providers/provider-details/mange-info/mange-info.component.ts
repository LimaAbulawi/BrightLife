import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuppliersService } from 'src/app/protected/services/suppliers.service';

@Component({
  selector: 'app-mange-info',
  templateUrl: './mange-info.component.html',
  styleUrls: ['./mange-info.component.scss']
})
export class MangeInfoComponent implements OnInit {

  basicUrl = "https://api.brightlifeapp.com/public";
  suppliers: any = [];
  isShown: Array<Boolean> = [];
  id: any;
  public href: string = "";

  constructor(private _Activatedroute: ActivatedRoute, private _ser: SuppliersService, private router: Router) {

    this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log("this.params ", params)
      console.log("this.id ", this.id)
    });
  }

  ngOnInit(): void {
    this.getSuppliersListFromService()
    this.href = this.router.url;
    console.log(this.router.url);
  }

  getSuppliersListFromService() {
    this.isShown[this.id] = !this.isShown[this.id];
    return this._ser.getSuppliersList().subscribe((res: any) => {
      this.suppliers = res.suppliers;
      console.log("this.suppliers", this.suppliers)
    })
  }
}
