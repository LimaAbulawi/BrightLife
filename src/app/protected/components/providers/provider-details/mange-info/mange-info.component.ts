import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { SuppliersService } from 'src/app/protected/services/suppliers.service';

@Component({
  selector: 'app-mange-info',
  templateUrl: './mange-info.component.html',
  styleUrls: ['./mange-info.component.scss']
})
export class MangeInfoComponent implements OnInit {

  basicUrl = "https://api.brightlifeapp.com/public";
  suppliers: any = [];
  isShown: Array<Boolean> = [];
  id: any;
  Id:any;
  Id2:any;
  public href: string = "";

  constructor(private _Activatedroute: ActivatedRoute, private _ser: SuppliersService, private router: Router) {

    console.log(router.url); // This will print the current url
    let URL = this.router.url;
    let URL_AS_LIST = URL.split('details/');
    this.Id = URL_AS_LIST[1];
    console.log("URL_AS_LIST ", URL_AS_LIST)
    console.log("this.Idddd ", this.Id)
    let Split2 = this.Id.split('/');
    this.id = Split2[0];
    console.log("this.Id2 ", this.id , typeof(this.id))
    let urlTree = this.router.parseUrl(this.router.url);
    urlTree.queryParams = {}; 
    console.log( "tostring",urlTree.toString());

    // .........
    // this.router.events
    //   .subscribe((event) => {
    //     if (event instanceof NavigationStart) {
    //       // Could add more chars url:path?=;other possible
    //       const urlDelimitators = new RegExp(/[?//,;&:#$+=]/);
    //       let currentUrlPath = event.url.slice(1).split(urlDelimitators)[0];
    //       console.log('URL_PATH: ', currentUrlPath);
    //     }
    //   });
    // ........
    this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log("this.params ", params)
      console.log("type this.id:", typeof(this.id) , " , this.id:" , this.id)
    });
  }

  ngOnInit(): void {
    this.getSuppliersListFromService()
    this.href = this.router.url;
     console.log("this.router.url", this.router.url);
  }

  getSuppliersListFromService() {
    this.isShown[this.id] = !this.isShown[this.id];
    return this._ser.getSuppliersList().subscribe((res: any) => {
      this.suppliers = res.suppliers;
      // console.log("this.suppliers", this.suppliers)
    })
  }
}
