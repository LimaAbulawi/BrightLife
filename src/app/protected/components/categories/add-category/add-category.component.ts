import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategorysService } from 'src/app/protected/services/categorys.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  resMsg!: string;
  addCategorysForm = this.fb.group({
    name: ['', Validators.required],
    image: ['', Validators.required],
  })

  constructor(private _ser: CategorysService, private fb: FormBuilder,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
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
      this.resMsg = res.msg;
      // window.location.reload();
      console.log(res);
    });
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
  deleteForm() {
    this.addCategorysForm.controls.name.setValue('');
    this.addCategorysForm.controls.image.setValue('');
  }
}
