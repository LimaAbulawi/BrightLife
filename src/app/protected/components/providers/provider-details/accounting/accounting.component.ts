import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SuppliersService } from 'src/app/protected/services/suppliers.service';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss']
})
export class AccountingComponent implements OnInit {

  id: any;
  Id:any;

  constructor(private _Activatedroute: ActivatedRoute, private _ser: SuppliersService, private router: Router) {
    this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    let URL = this.router.url;
    let URL_AS_LIST = URL.split('details/');
    this.Id = URL_AS_LIST[1];
    console.log("URL_AS_LIST ", URL_AS_LIST)
    console.log("this.Idddd ", this.Id)
    let Split2 = this.Id.split('/');
    this.id = Split2[0];
    console.log("this.Id2 ", this.id, typeof (this.id))
    // let urlTree = this.router.parseUrl(this.router.url);
    // urlTree.queryParams = {};
    // console.log("tostring", urlTree.toString());


  }


  ngOnInit(): void {
  }

}
