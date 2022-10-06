import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { SuppliersService } from 'src/app/protected/services/suppliers.service';

@Component({
  selector: 'app-mange-info',
  templateUrl: './mange-info.component.html',
  styleUrls: ['./mange-info.component.scss']
})
export class MangeInfoComponent implements OnInit {

  basicUrl = "https://api.brightlifeapp.com/public";
  @Input() providerId = ''; // decorate the property with @Input()
  provider : any;

  constructor(private _Activatedroute: ActivatedRoute, private _ser: SuppliersService, private router: Router) {
  }

  ngOnInit(): void {
    this.getSupplier(this.providerId);
  }

  getSupplier(providerId: any) {
    return this._ser.getSupplier(providerId).subscribe((res: any) => {
      this.provider = res.user;
    })
  }
}
