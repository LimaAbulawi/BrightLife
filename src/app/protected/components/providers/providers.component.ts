import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuppliersService } from '../../services/suppliers.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss']
})
export class ProvidersComponent implements OnInit {

  isShown: Array<Boolean> = [];
  isAddSupplier: Boolean = false;
  suppliers: any = [];
  basicUrl = "https://api.brightlifeapp.com/public";

  constructor(
    private _ser: SuppliersService,
  ) { }

  ngOnInit(): void {
    this.getSuppliersListFromService()
  }

  getSuppliersListFromService() {
    return this._ser.getSuppliersList().subscribe((res: any) => {
      this.suppliers = res.suppliers;
    })
  }

  // details(Id: number) {
  //   // this.isShown[Id] = !this.isShown[Id];
  //   this.router.navigate(['/protected/providers/details']);
  // }

  // addSuppliersDiv() {
  //   this.isAddSupplier = !this.isAddSupplier;
  // }

}

