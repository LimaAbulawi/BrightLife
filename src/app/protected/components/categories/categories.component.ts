import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  constructor(private _ser: CategorysService, private fb: FormBuilder,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getCategorysListFromService();
  }
  addCategorysDiv() {
    this.isAddCatigorie = !this.isAddCatigorie;
  }

  addCategorysForm = this.fb.group({
    name: ['', Validators.required],
    image: ['', Validators.required], 
  })

  addCategorys() {
    console.log(this.addCategorysForm.value);
    const formData = new FormData();
    Object.entries(this.addCategorysForm.value).forEach(
      ([key, value]: any[]) => {
        formData.append(key, value);
        console.log(key + ':' + value);
      }
    )
    this._ser.addCategorys(formData).subscribe((res: any) => {
      console.log(res);
    });
  }

  getCategorysListFromService() {
    return this._ser.getCategoryList().subscribe((res: any) => {
      this.Categorys = res.Categorys;
      console.log("this.Categorys", this.Categorys);
    })
  }

  details(Id: number) {
    this.isShown[Id] = !this.isShown[Id];
  }
  
  onFileChange(event: any, inputName: any) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      // just checking if it is an image, ignore if you want
      this.addCategorysForm.patchValue({
        [inputName]: file
      });
      // need to run CD since file load runs outside of zone
      this.cd.markForCheck();
    }
  }

}
