import { Component, OnInit } from '@angular/core';
import { SlidersService } from 'src/app/protected/services/sliders.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.scss']
})
export class SlidersComponent implements OnInit {

  constructor(private _ser : SlidersService) { }


  basicUrl = environment.basicUrl;
  list: any = [];
  isShown: Array<Boolean> = [];
  isdelete: any = [];


  ngOnInit(): void {
    this.getListFromService()
  }

  getListFromService() {
    return this._ser.getList().subscribe((res: any) => {
      this.list = res.data;
      console.log("this.listSliders", this.list);
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
