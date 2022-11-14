import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { OrdersService } from '../../services/orders.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  basicUrl = environment.basicUrl;
  list: any = [];
  isShown: Array<Boolean> = [];
  isdelete: any = [];
  searchRes: any;

  constructor(private _ser: OrdersService) { }

  ngOnInit(): void {
    this.getListFromService()
  }

  getListFromService() {
    return this._ser.getList().subscribe((res: any) => {
      this.list = res.data;
      console.log("this.list", this.list);
    })
  }

  getSearchFromService(search: any) {
    return this._ser.getsearch(search).subscribe((res: any) => {
      this.searchRes = res;
      console.log("this.response", this.searchRes);
    })
  }

  details(Id: number) {
    this.isShown[Id] = !this.isShown[Id];
  }



}
