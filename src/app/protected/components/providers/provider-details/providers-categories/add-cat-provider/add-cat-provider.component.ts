import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategorysService } from 'src/app/protected/services/categorys.service';
import { SuppliersService } from 'src/app/protected/services/suppliers.service';

@Component({
  selector: 'app-add-cat-provider',
  templateUrl: './add-cat-provider.component.html',
  styleUrls: ['./add-cat-provider.component.scss']
})
export class AddCatProviderComponent implements OnInit {
  selectedTeam: any;
  id: any;
  categories: any;
  resMsg: any;
  Categorys: any;
  constructor(private _ser: SuppliersService, private ser: CategorysService , private fb: FormBuilder , private _Activatedroute: ActivatedRoute) {
    this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  ngOnInit(): void {
this.getCategorysListFromService()
    this.selectCat.controls.supplier_id.setValue(this.id)
  }


  selectCat = this.fb.group({
    supplier_id: ['', Validators.required],
    category_id: ['', Validators.required],
  })

  selectChangeHandler(event: any) {
    this.selectedTeam = event.target.value;
    this.selectCat.controls.category_id.setValue(this.selectedTeam)
  }

  getCategorysListFromService() {
    return this.ser.getCategoryList().subscribe((res: any) => {
      this.Categorys = res.Categorys;
      console.log("this.Categorys", this.Categorys);
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

}
