import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategorysService } from '../../services/categorys.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  isAddCatigorie: Boolean = false;
  isShown: Array<Boolean> = [];
  Categorys: any = [];
  basicUrl = "https://api.brightlifeapp.com/public";
  
  constructor(private _ser: CategorysService) { }

  ngOnInit(): void {
    this.getCategorysListFromService();
  }
  addCategorysDiv() {
    this.isAddCatigorie = !this.isAddCatigorie;
  }
  addCategorys() {
    this._ser.addCategorys(this.addCategorysForm.value).subscribe((res: any) => {
      console.log(res);
    });
  }
  addCategorysForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl(''),
  });

  getCategorysListFromService() {
    return this._ser.getCategoryList().subscribe((res: any) => {
      this.Categorys = res.Categorys;
      console.log("this.Categorys", this.Categorys);
    })
  }
  details(Id: number) {
    this.isShown[Id] = !this.isShown[Id];
  }
  onFileChange(event: any) {
    console.log(event)
  }

}
