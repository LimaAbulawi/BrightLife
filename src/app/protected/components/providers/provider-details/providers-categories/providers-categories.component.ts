import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { SuppliersService } from 'src/app/protected/services/suppliers.service';

@Component({
  selector: 'app-providers-categories',
  templateUrl: './providers-categories.component.html',
  styleUrls: ['./providers-categories.component.scss']
})
export class ProvidersCategoriesComponent implements OnInit {

  @Input() providerId = ''; // decorate the property with @Input()
  categories: any;
  filter: any;
  resMsg: any;
  selectedTeam: any;
  constructor(private _ser: SuppliersService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getSupplier(this.providerId);
    this.filterCat(this.providerId);
    this.selectCat.controls.supplier_id.setValue(this.providerId)
  }


  selectCat = this.fb.group({
    supplier_id: ['', Validators.required],
    category_id: ['', Validators.required],
  })

  getSupplier(providerId: any) {
    return this._ser.getSupplier(providerId).subscribe((res: any) => {
      this.categories = res.user.categories;
      console.log(this.categories);
    })
  }

  submit() {
    if (!this.selectCat.valid) {
      this.selectCat.markAllAsTouched();
    }
    console.log(this.selectCat.value)
    this._ser.addCategory(this.selectCat.value).subscribe((res: any) => {
      this.resMsg = res.msg;
    });
    setTimeout(() => {
      console.log(this.resMsg)
      window.location.reload();
    },1000)
  }

  filterCat(providerId: any) {
    return this._ser.getSupplier(providerId)
      .pipe(map((res: any) =>
        res.user.categories.filter((x: any) => x.id == '51'))
      )
  }
  selectChangeHandler(event: any) {
    this.selectedTeam = event.target.value;
    this.selectCat.controls.category_id.setValue(this.selectedTeam)
  }
}
