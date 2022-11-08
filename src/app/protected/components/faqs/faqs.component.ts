import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { FAQsService } from '../../services/faqs.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FAQsComponent implements OnInit {

  basicUrl = environment.basicUrl;
  list: any = [];
  isShown: Array<Boolean> = [];
  isdelete: any = [];

  constructor(private _ser: FAQsService) { }

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
          // Swal.fire(
          //   'Deleted!',
          //   'Your file has been deleted.',
          //   'success'
          // )
          window.location.reload();
        });
      }
    })
  }

}
