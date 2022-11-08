import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PromoCodeService } from '../../../services/promo-code.service';

@Component({
  selector: 'app-add-promo-code',
  templateUrl: './add-promo-code.component.html',
  styleUrls: ['./add-promo-code.component.scss']
})
export class AddPromoCodeComponent implements OnInit {

  resMsg!: string;
  placeholder: any | undefined;
  addForm = this.fb.group({
    code: ['', Validators.required],
    name: ['', Validators.required],
    type: ['', Validators.required],
    value: ['', Validators.required],
  })
  
  constructor(private fb: FormBuilder , private _ser: PromoCodeService) { }

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
  selectChangeHandler(event: any) {
    // this.selectedTeam = event.target.value;
    this.addForm.controls.type.setValue(event.target.value)
  }
}
