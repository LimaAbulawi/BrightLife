import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { empty } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { ReviewsService } from '../../services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  basicUrl = environment.basicUrl;
  list: any = [];
  view: any = [];
  isShown: Array<Boolean> = [];
  isdelete: any = [];
  resMsg!: string;
  isChecked: any;

  editForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    points: ['', Validators.required],
    status: ['', Validators.required],
    supplier_id: ['', Validators.required],
    user_id: ['', Validators.required],
  })

  constructor(private _ser: ReviewsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getListFromService()
  }

  getListFromService() {
    return this._ser.getList().subscribe((res: any) => {
      this.list = res.data;
      console.log("this.list", this.list);
    })
  }
  details(Id: number) {
    this._ser.getView(Id).subscribe((res: any) => {
      this.view = res.data;
      console.log("view", this.view)
      console.log("user.id", this.view.user.id)
      this.editForm.controls.title.setValue(this.view.title);
      this.editForm.controls.content.setValue(this.view.content);
      this.editForm.controls.points.setValue(this.view.points);
      this.editForm.controls.user_id.setValue(this.view.user.id);
      this.editForm.controls.supplier_id.setValue(this.view.supplier_id.id);
      this.editForm.controls.status.setValue(this.view.status);

    });

    // console.log("viewww", this.view.title)
    this.isShown[Id] = !this.isShown[Id];
  }
  delete(Id: number) {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this._ser.delete(Id).subscribe((res: any) => {
          this.isdelete = res;
          window.location.reload();
        });
      }
    })
  }

  checkBoxValue(event: any) {
    console.log(event.target.checked)
    if (event.target.checked == false) {
      this.editForm.controls.status.setValue("0");
    } else if (event.target.checked == true)
      this.editForm.controls.status.setValue("1");
  }


  editItem() {

    console.log(this.editForm.value);
    if (!this.editForm.valid) {

      this.editForm.markAllAsTouched();
    }
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // Swal.fire('Saved!', '', 'success')
        this._ser.create(this.editForm.value).subscribe((res: any) => {
          this.resMsg = res.msg;
          console.log("res", res);
          window.location.reload();
        });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}
