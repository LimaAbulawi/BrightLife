import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuppliersService } from 'src/app/protected/services/suppliers.service';

@Component({
  selector: 'app-services-or-products',
  templateUrl: './services-or-products.component.html',
  styleUrls: ['./services-or-products.component.scss']
})
export class ServicesOrProductsComponent implements OnInit {

  id: any;
  constructor(private _Activatedroute: ActivatedRoute, private _ser: SuppliersService,) {
    this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }
  ngOnInit(): void {
  }

}
