import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SlidersService } from 'src/app/protected/services/sliders.service';

@Component({
  selector: 'app-add-slider',
  templateUrl: './add-slider.component.html',
  styleUrls: ['./add-slider.component.scss']
})
export class AddSliderComponent implements OnInit {

 
  resMsg!: string;
  addForm = this.fb.group({
    image: ['', Validators.required],
  })

  constructor(private _ser: SlidersService, private fb: FormBuilder,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  formData = new FormData();
  add() {
    console.log(this.addForm.value);
    Object.entries(this.addForm.value).forEach(
      ([key, value]: any[]) => {
        this.formData.append(key, value);
        console.log(key + ':' + value);
      }
    )
    this._ser.create(this.formData).subscribe((res: any) => {
      this.resMsg = res.msg;
      // window.location.reload();
      console.log(res);
    });
  }
  onFileChange(event: any, inputName: any) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      // just checking if it is an image, ignore if you want
      this.addForm.patchValue({
        [inputName]: file
      });
      // need to run CD since file load runs outside of zone
      this.cd.markForCheck();
    }
  }
  deleteForm() {
    this.addForm.controls.image.setValue('');
  }

}
