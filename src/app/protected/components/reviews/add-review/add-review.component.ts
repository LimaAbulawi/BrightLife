import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReviewsService } from 'src/app/protected/services/reviews.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

 
  resMsg!: string;
  addForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    points: ['', Validators.required],
    status: ['', Validators.required],
  })
  
  constructor(private fb: FormBuilder , private _ser: ReviewsService) { }

  ngOnInit(): void {
  }

  addItem() { 
    console.log(this.addForm.value);
    if (!this.addForm.valid) {
      this.addForm.markAllAsTouched();
    }
    this._ser.create(this.addForm.value).subscribe((res: any) => {
      this.resMsg = res.msg;
      console.log("res", res);
    });
  }

  checkBoxValue(event : any){
    console.log(event.target.checked)
    if(event.target.checked == true){
      this.addForm.controls.status.setValue('1')
    }else{
      this.addForm.controls.status.setValue('0')
    }
  }
}
