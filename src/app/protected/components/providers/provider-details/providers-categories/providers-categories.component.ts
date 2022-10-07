import { Component, Input, OnInit } from '@angular/core';
import { SuppliersService } from 'src/app/protected/services/suppliers.service';

@Component({
  selector: 'app-providers-categories',
  templateUrl: './providers-categories.component.html',
  styleUrls: ['./providers-categories.component.scss']
})
export class ProvidersCategoriesComponent implements OnInit {
  
  @Input() providerId = ''; // decorate the property with @Input()
  categories: any;

  constructor(private _ser: SuppliersService) { }

  ngOnInit(): void {
    this.getSupplier(this.providerId);
  }
  getSupplier(providerId: any) {
    return this._ser.getSupplier(providerId).subscribe((res: any) => {
      // this.provider = res.user;
      this.categories = res.user.categories;
      console.log(this.categories);
    })  
  }
}
