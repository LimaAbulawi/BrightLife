import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FAQsService } from 'src/app/protected/services/faqs.service';

@Component({
  selector: 'app-add-faq',
  templateUrl: './add-faq.component.html',
  styleUrls: ['./add-faq.component.scss']
})
export class AddFaqComponent implements OnInit {


  resMsg!: string;
  placeholder: any | undefined;
  addForm = this.fb.group({
    question: ['', Validators.required],
    answer: ['', Validators.required],
  })
  
  constructor(private fb: FormBuilder , private _ser: FAQsService) { }

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

}
